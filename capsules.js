(() => {
  let recorder = null;
  let chunks = [];
  let timer = null;

  function db() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("LondraCapsule", 1);
      request.onupgradeneeded = () => request.result.createObjectStore("capsules", { keyPath: "id", autoIncrement: true });
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async function save(capsule) {
    const database = await db();
    await new Promise((resolve, reject) => {
      const transaction = database.transaction("capsules", "readwrite");
      transaction.objectStore("capsules").add(capsule);
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
    database.close();
  }

  async function read() {
    const database = await db();
    const result = await new Promise((resolve, reject) => {
      const request = database.transaction("capsules", "readonly").objectStore("capsules").getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    database.close();
    return result.sort((a, b) => b.createdAt - a.createdAt);
  }

  function position() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) return reject(new Error("Posizione non disponibile"));
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      });
    });
  }

  async function render() {
    const drawer = document.querySelector("#drawer");
    const backdrop = document.querySelector("#backdrop");
    document.querySelector("#drawerTitle").textContent = "Capsule sonore";
    document.querySelector("#drawerContent").innerHTML = `
      <p class="capsule-status" id="capsuleStatus">Premi il pulsante per autorizzare microfono e posizione. Registrazione fino a 10 secondi.</p>
      <button class="record-button" id="recordCapsule" type="button" aria-label="Registra capsule sonora"></button>
      <div id="capsuleList"><p style="color:#77796f;font-size:12px">Caricamento capsule...</p></div>
    `;
    drawer.classList.add("open");
    backdrop.classList.add("open");

    let capsules = [];
    try { capsules = await read(); } catch {
      document.querySelector("#capsuleList").innerHTML = `<p style="color:#77796f;font-size:12px">Archivio non disponibile.</p>`;
      return;
    }
    document.querySelector("#capsuleList").innerHTML = capsules.length ? capsules.map(capsule => {
      const url = URL.createObjectURL(capsule.audio);
      const link = capsule.latitude && capsule.longitude
        ? `<a href="https://www.google.com/maps/search/?api=1&query=${capsule.latitude},${capsule.longitude}" target="_blank" rel="noopener noreferrer">Apri il punto registrato · ${capsule.latitude.toFixed(5)}, ${capsule.longitude.toFixed(5)}</a>`
        : "";
      return `<article class="capsule-card"><time>${new Date(capsule.createdAt).toLocaleString("it-IT", { dateStyle: "medium", timeStyle: "short" })}</time><audio controls src="${url}"></audio>${link}</article>`;
    }).join("") : `<p style="color:#77796f;font-size:12px">Nessuna capsule registrata.</p>`;
  }

  const button = document.querySelector("#capsuleButton");
  if (button) button.addEventListener("click", render);

  document.addEventListener("click", async event => {
    if (!event.target.closest("#recordCapsule")) return;
    if (recorder && recorder.state === "recording") {
      recorder.stop();
      return;
    }

    const status = document.querySelector("#capsuleStatus");
    const recordButton = document.querySelector("#recordCapsule");
    status.textContent = "Richiedo autorizzazione per microfono e posizione...";
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      let coords = null;
      try {
        const place = await position();
        coords = place.coords;
      } catch {
        status.textContent = "Registrazione avviata. Posizione non disponibile.";
      }

      chunks = [];
      const mimeType = ["audio/mp4", "audio/webm"].find(type => MediaRecorder.isTypeSupported(type));
      recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
      recorder.ondataavailable = event => { if (event.data.size) chunks.push(event.data); };
      recorder.onstop = async () => {
        clearTimeout(timer);
        stream.getTracks().forEach(track => track.stop());
        recordButton.classList.remove("recording");
        const audio = new Blob(chunks, { type: recorder.mimeType });
        await save({
          audio,
          latitude: coords?.latitude || null,
          longitude: coords?.longitude || null,
          accuracy: coords?.accuracy || null,
          createdAt: Date.now()
        });
        status.textContent = "Capsula salvata.";
        await render();
      };
      recorder.start();
      recordButton.classList.add("recording");
      status.textContent = "Registrazione in corso · stop automatico dopo 10 secondi";
      timer = setTimeout(() => {
        if (recorder && recorder.state === "recording") recorder.stop();
      }, 10000);
    } catch {
      status.textContent = "Permesso negato o microfono non disponibile. Consenti microfono e posizione nelle impostazioni Safari.";
    }
  });
})();
