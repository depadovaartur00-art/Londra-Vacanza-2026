const icon = {
  train: '<svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="15" rx="3"/><path d="M8 21l2-3m6 3-2-3M8 7h8M8 11h8"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/></svg>',
  bag: '<svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/></svg>',
  shop: '<svg viewBox="0 0 24 24"><path d="M4 10h16l-2-6H6l-2 6Z"/><path d="M6 10v10h12V10M9 20v-6h6v6"/></svg>',
  food: '<svg viewBox="0 0 24 24"><path d="M7 3v7M4 3v7a3 3 0 0 0 6 0V3M7 10v11M16 3v18M16 3c4 3 4 8 0 10"/></svg>',
  art: '<svg viewBox="0 0 24 24"><path d="M4 20h16M6 20V8l6-4 6 4v12M9 20v-7h6v7"/></svg>',
  museum: '<svg viewBox="0 0 24 24"><path d="M3 9h18M5 9v8m4-8v8m6-8v8m4-8v8M3 20h18M12 3l9 6H3l9-6Z"/></svg>',
  walk: '<svg viewBox="0 0 24 24"><circle cx="13" cy="4" r="2"/><path d="M10 22l2-7-3-3 2-5 4 3 3 1M12 15l4 2 2 5"/></svg>',
  bridge: '<svg viewBox="0 0 24 24"><path d="M3 18h18M5 18V8m14 10V8M5 11h14M8 11V8m8 3V8M8 8c2-3 6-3 8 0"/></svg>',
  palace: '<svg viewBox="0 0 24 24"><path d="M3 20h18M5 20V9l3 2 4-6 4 6 3-2v11M9 20v-5h6v5"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/></svg>',
  taxi: '<svg viewBox="0 0 24 24"><path d="M5 17h14l-2-7H7l-2 7Z"/><path d="M8 10l1-3h6l1 3M7 17v2m10-2v2M9 14h6"/></svg>'
};

const days = [
  {
    kicker: "Primo giorno",
    title: "Il West End",
    origin: "Gatwick Airport, London",
    destination: "Z Hotel Holborn, 16-18 Turnmill St, London",
    stops: [
      { time: "12:15", label: "Trasferimento", title: "Gatwick → Z Hotel", detail: "Treno verso Farringdon, poi Elizabeth line o metro fino a Holborn · 60–90 min", icon: "train", place: "Gatwick Airport, London" },
      { time: "14:00", label: "Check-in", title: "Holborn & pranzo", detail: "Lasciate i bagagli in hotel e mangiate nei dintorni", icon: "bag", place: "Z Hotel Holborn, 16-18 Turnmill St, London" },
      { time: "14:30", label: "Esplorazione", title: "Covent Garden", detail: "Piazza, mercato coperto e strade del quartiere", icon: "walk", place: "Covent Garden, London" },
      { time: "15:00", label: "Shopping", title: "Scuffers · Brewer Street", detail: "A Soho, passando da Leicester Square · felpa e cappellino", icon: "shop", place: "Scuffers, 52 Brewer Street, London" },
      { time: "16:30", label: "Shopping", title: "Oxford Street", detail: "Da Oxford Circus alle luminarie natalizie", icon: "shop", place: "Oxford Circus, London" },
      { time: "18:00", label: "Serata", title: "Cena tra Soho e Covent Garden", detail: "Poi rientro a piedi a Holborn · 15–25 min", icon: "food", place: "Covent Garden, London" }
    ]
  },
  {
    kicker: "Secondo giorno",
    title: "Arte & Tamigi",
    origin: "Z Hotel Holborn, London",
    destination: "Tower Hill Station, London",
    stops: [
      { time: "09:30", label: "Partenza", title: "Verso Trafalgar Square", detail: "A piedi da Holborn passando da Covent Garden · 25–30 min", icon: "walk", place: "Trafalgar Square, London" },
      { time: "10:00", label: "Ingresso gratuito", title: "National Gallery", detail: "Due ore · concentratevi sulle sale che preferite", icon: "art", place: "The National Gallery, Trafalgar Square, London" },
      { time: "12:00", label: "Pausa", title: "Pranzo a Soho", detail: "10 minuti a piedi da Trafalgar Square · fino alle 13:00", icon: "food", place: "Soho, London" },
      { time: "13:20", label: "Ingresso gratuito", title: "British Museum", detail: "Stele di Rosetta, Egitto e Grecia · circa 2 ore", icon: "museum", place: "British Museum, Great Russell Street, London" },
      { time: "15:20", label: "Passeggiata", title: "Verso il Tate Modern", detail: "Fleet Street, St Paul’s e Millennium Bridge · circa 50 min", icon: "walk", place: "St Paul's Cathedral, London" },
      { time: "16:10", label: "Collezione permanente", title: "Tate Modern", detail: "1 ora e 30 · punto panoramico se aperto", icon: "art", place: "Tate Modern, Bankside, London" },
      { time: "17:40", label: "Fotografia", title: "Tower Bridge", detail: "35 minuti lungo il Tamigi, poi attraversamento e luci", icon: "bridge", place: "Tower Bridge, London" },
      { time: "18:30", label: "Rientro", title: "Da Tower Hill a Holborn", detail: "Metro diretta · arrivo previsto verso le 19:15", icon: "train", place: "Z Hotel Holborn, 16-18 Turnmill St, London" }
    ]
  },
  {
    kicker: "Terzo giorno",
    title: "Musei & Maestà",
    origin: "Z Hotel Holborn, London",
    destination: "Teddington, London",
    stops: [
      { time: "08:15", label: "Check-out", title: "Valigie alla reception", detail: "Zaino leggero con power bank, documenti e cambio", icon: "bag", place: "Z Hotel Holborn, London" },
      { time: "08:45", label: "Da prenotare", title: "St Paul’s Cathedral", detail: "Visita a pagamento · circa 1 ora e 30", icon: "museum", place: "St Paul's Cathedral, London" },
      { time: "10:20", label: "Prenotazione", title: "Science Museum", detail: "Tecnologia, spazio e innovazione · circa 2 ore", icon: "museum", place: "Science Museum, South Kensington, London" },
      { time: "12:30", label: "Pranzo", title: "Five Guys", detail: "Nella zona di South Kensington", icon: "food", place: "Five Guys, South Kensington, London" },
      { time: "13:40", label: "Prenotazione", title: "Natural History Museum", detail: "Hintze Hall e dinosauri · circa 2 ore", icon: "museum", place: "Natural History Museum, London" },
      { time: "16:00", label: "Foto", title: "Buckingham Palace", detail: "Metro in zona, poi St James’s Park verso Westminster", icon: "palace", place: "Buckingham Palace, London" },
      { time: "16:40", label: "Video", title: "Big Ben & Westminster", detail: "Vista dall’esterno e foto", icon: "clock", place: "Big Ben, London" },
      { time: "17:15", label: "Trasferimento", title: "Hotel → Teddington", detail: "Ritiro bagagli, poi metro e treno · 60–90 min", icon: "train", place: "Teddington, London" }
    ]
  },
  {
    kicker: "Ultimo giorno",
    title: "Rientro a Gatwick",
    origin: "Teddington, London",
    destination: "Gatwick Airport, London",
    stops: [
      { time: "03:00", label: "Partenza", title: "Taxi da Teddington", detail: "Prenotato in anticipo, con tempo per terminal e bagagli", icon: "taxi", place: "Teddington, London" },
      { time: "04:15", label: "Arrivo", title: "Gatwick Airport", detail: "Orario da adattare al terminal di partenza", icon: "train", place: "Gatwick Airport, London" },
      { time: "06:50", label: "Decollo", title: "Buon viaggio", detail: "Arrivate con largo anticipo", icon: "plane", place: "Gatwick Airport, London" }
    ]
  }
];

const timeline = document.querySelector("#timeline");
const template = document.querySelector("#timelineTemplate");

const tripDate = new Date("2026-12-05T00:00:00");
const today = new Date();
const daysLeft = Math.ceil((tripDate - today) / 86400000);
const countdown = document.querySelector("#tripCountdown");
countdown.textContent = daysLeft > 0
  ? `Mancano ${daysLeft} giorni · 5–8 dicembre 2026`
  : daysLeft === 0
    ? "Oggi si parte · 5 dicembre 2026"
    : "Viaggio concluso · 5–8 dicembre 2026";

function renderDay(index) {
  const day = days[index];
  document.querySelector("#dayKicker").textContent = day.kicker;
  document.querySelector("#dayTitle").textContent = day.title;
  document.querySelector("#routePill").innerHTML = `<span></span> ${day.stops.length} tappe`;
  timeline.innerHTML = "";

  day.stops.forEach((stop, stopIndex) => {
    const node = template.content.cloneNode(true);
    node.querySelector(".time strong").textContent = stop.time;
    node.querySelector(".stop-label").textContent = stop.label;
    node.querySelector("h3").textContent = stop.title;
    node.querySelector(".stop-detail").textContent = stop.detail;
    node.querySelector(".stop-icon").innerHTML = icon[stop.icon] || icon.walk;
    if (stopIndex > 0) {
      const previousPlace = day.stops[stopIndex - 1].place;
      const controls = document.createElement("div");
      controls.className = "leg-controls";
      controls.innerHTML = `
        <button class="leg-button" type="button" data-from="${previousPlace}" data-to="${stop.place}">Naviga verso ${stop.title}</button>
      `;
      node.querySelector(".stop-copy").appendChild(controls);
    }
    node.querySelector(".stop-card").addEventListener("click", event => {
      if (event.target.closest(".leg-button")) return;
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stop.place)}`, "_blank", "noopener,noreferrer");
    });
    timeline.appendChild(node);
  });
}

document.querySelector("#dateTabs").addEventListener("click", event => {
  const tab = event.target.closest(".date-tab");
  if (!tab) return;
  document.querySelectorAll(".date-tab").forEach(item => item.classList.remove("active"));
  tab.classList.add("active");
  renderDay(Number(tab.dataset.day));
});

renderDay(0);

const drawer = document.querySelector("#drawer");
const backdrop = document.querySelector("#backdrop");

function openDrawer(title, content) {
  document.querySelector("#drawerTitle").textContent = title;
  document.querySelector("#drawerContent").innerHTML = content;
  drawer.classList.add("open");
  backdrop.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}
function closeDrawer() {
  stopCamera();
  drawer.classList.remove("open");
  backdrop.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
}

document.querySelector("#drawerContent").addEventListener("click", event => {
  const choice = event.target.closest("[data-route-mode]");
  if (!choice) return;
  const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(choice.dataset.from)}&destination=${encodeURIComponent(choice.dataset.to)}&travelmode=${choice.dataset.routeMode}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

const savedTheme = localStorage.getItem("londonNightTheme");
if (savedTheme === "true") document.body.classList.add("night");

document.querySelector("#themeButton").addEventListener("click", () => {
  document.body.classList.toggle("night");
  localStorage.setItem("londonNightTheme", document.body.classList.contains("night"));
});

document.querySelector("#mapViewButton").addEventListener("click", () => {
  const activeDay = Number(document.querySelector(".date-tab.active").dataset.day);
  const day = days[activeDay];
  const stops = day.stops.map((stop, index) => `
    <div class="map-stop" data-number="${index + 1}">
      <strong>${stop.title}</strong>
      <span>${stop.time}</span>
    </div>
  `).join("");
  openDrawer(day.title, `<div class="map-list">${stops}</div>`);
});

document.querySelector("#menuButton").addEventListener("click", () => {
  document.querySelector("#mapViewButton").click();
});

function readWrittenDiary() {
  return JSON.parse(localStorage.getItem("londonWrittenDiary") || "[]");
}
function readPhotoDiary() {
  return JSON.parse(localStorage.getItem("londonPhotoDiary") || "[]");
}

let cameraStream = null;
let capturedPhotoBlob = null;

async function getPhotoDirectory() {
  if (!navigator.storage?.getDirectory) throw new Error("Archivio interno non disponibile");
  const root = await navigator.storage.getDirectory();
  return root.getDirectoryHandle("diary-photos", { create: true });
}

async function savePhotoToInternalFolder(blob) {
  try {
    const directory = await getPhotoDirectory();
    const fileName = `london-${Date.now()}.jpg`;
    const fileHandle = await directory.getFileHandle(fileName, { create: true });
    const writable = await fileHandle.createWritable();
    await writable.write(blob);
    await writable.close();
    return fileName;
  } catch {
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}

async function getPhotoUrl(fileName) {
  if (!fileName) return "";
  if (fileName.startsWith("data:image")) return fileName;
  try {
    const directory = await getPhotoDirectory();
    const handle = await directory.getFileHandle(fileName);
    const file = await handle.getFile();
    return URL.createObjectURL(file);
  } catch {
    return "";
  }
}

async function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(track => track.stop());
    cameraStream = null;
  }
}

async function startCamera() {
  const video = document.querySelector("#diaryCamera");
  if (!video) return;
  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false
    });
    video.srcObject = cameraStream;
    await video.play();
  } catch (error) {
    const status = document.querySelector("#cameraStatus");
    status.textContent = "Apri la fotocamera del dispositivo.";
    let capture = document.querySelector("#nativePhotoCapture");
    if (!capture) {
      capture = document.createElement("input");
      capture.id = "nativePhotoCapture";
      capture.type = "file";
      capture.accept = "image/*";
      capture.capture = "environment";
      capture.className = "native-photo-input";
      document.querySelector(".diary-entry").prepend(capture);
    }
  }
}

async function renderWrittenDiary() {
  await stopCamera();
  capturedPhotoBlob = null;
  const entries = readWrittenDiary();
  const cards = [];
  for (const entry of entries) {
    cards.push(`
      <article class="diary-card">
        <time>${entry.date}</time>
        ${entry.text ? `<p>${entry.text.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]))}</p>` : ""}
      </article>
    `);
  }

  openDrawer("Diario scritto", `
    <div class="diary-entry">
      <textarea id="writtenDiaryText" placeholder="Scrivi cosa avete visto, mangiato o vissuto..."></textarea>
      <button id="saveWrittenDiary" type="button" style="margin-top:8px">Salva nota</button>
    </div>
    ${cards.length ? cards.join("") : `<p style="color:#77796f;font-size:12px">Nessuna nota salvata.</p>`}
  `);
}

async function renderPhotoDiary() {
  await stopCamera();
  capturedPhotoBlob = null;
  const entries = readPhotoDiary();
  const cards = [];
  for (const entry of entries) {
    const photoUrl = await getPhotoUrl(entry.photo);
    if (photoUrl) cards.push(`
      <article class="diary-card">
        <time>${entry.date}</time>
        <img class="diary-photo" src="${photoUrl}" alt="Foto del diario">
      </article>
    `);
  }

  openDrawer("Diario fotografico", `
    <div class="diary-entry">
      <input id="nativePhotoCapture" class="native-photo-input" type="file" accept="image/*" capture="environment" aria-label="Scatta foto con la fotocamera del dispositivo">
      <div class="camera-box" id="cameraBox">
        <video id="diaryCamera" autoplay playsinline muted></video>
      </div>
      <img id="capturedPreview" class="camera-preview" alt="Anteprima foto" hidden>
      <canvas id="diaryCanvas" width="1200" height="900"></canvas>
      <p id="cameraStatus" style="color:#77796f;font-size:10px;margin:6px 0">Attivazione fotocamera...</p>
      <div class="camera-actions">
        <button id="phoneCamera" type="button">Fotocamera telefono</button>
        <button id="takePhoto" class="primary" type="button">Scatta foto</button>
      </div>
      <button id="savePhotoDiary" type="button" style="margin-top:8px">Salva foto</button>
    </div>
    ${cards.length ? cards.join("") : `<p style="color:#77796f;font-size:12px">Nessuna foto salvata.</p>`}
  `);
  requestAnimationFrame(() => startCamera());
}

document.querySelector("#diaryButton").addEventListener("click", renderWrittenDiary);
document.querySelector("#photoDiaryButton").addEventListener("click", renderPhotoDiary);

document.querySelector("#drawerContent").addEventListener("click", async event => {
  const diaryTab = event.target.closest("[data-diary-tab]");
  if (diaryTab) {
    if (diaryTab.dataset.diaryTab === "written") await renderWrittenDiary();
    else await renderPhotoDiary();
    return;
  }

  if (event.target.matches("#saveWrittenDiary")) {
    const text = document.querySelector("#writtenDiaryText").value.trim();
    if (!text) return;
    const entries = readWrittenDiary();
    entries.unshift({
      text,
      date: new Date().toLocaleString("it-IT", { dateStyle: "medium", timeStyle: "short" })
    });
    localStorage.setItem("londonWrittenDiary", JSON.stringify(entries));
    await renderWrittenDiary();
    return;
  }

  if (event.target.matches("#startCamera")) {
    await startCamera();
    return;
  }

  if (event.target.matches("#phoneCamera")) {
    const capture = document.querySelector("#nativePhotoCapture");
    if (capture) capture.click();
    return;
  }

  if (event.target.matches("#takePhoto")) {
    const video = document.querySelector("#diaryCamera");
    const canvas = document.querySelector("#diaryCanvas");
    if (!video.videoWidth) {
      const capture = document.querySelector("#nativePhotoCapture");
      if (capture) capture.click();
      return;
    }
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    const preview = document.querySelector("#capturedPreview");
    preview.src = canvas.toDataURL("image/jpeg", 0.82);
    preview.hidden = false;
    document.querySelector("#cameraBox").hidden = true;
    await stopCamera();
    capturedPhotoBlob = await new Promise(resolve => canvas.toBlob(resolve, "image/jpeg", 0.82));
    document.querySelector("#cameraStatus").textContent = "Foto acquisita e pronta da salvare.";
    return;
  }

  if (!event.target.matches("#savePhotoDiary") || !capturedPhotoBlob) return;
  let photoName = "";
  try {
    photoName = await savePhotoToInternalFolder(capturedPhotoBlob);
  } catch {
    document.querySelector("#cameraStatus").textContent = "Non è stato possibile salvare la foto.";
    return;
  }
  const entries = readPhotoDiary();
  entries.unshift({
    photo: photoName,
    date: new Date().toLocaleString("it-IT", { dateStyle: "medium", timeStyle: "short" })
  });
  localStorage.setItem("londonPhotoDiary", JSON.stringify(entries));
  await renderPhotoDiary();
});

document.querySelector("#drawerContent").addEventListener("change", async event => {
  if (!event.target.matches("#nativePhotoCapture")) return;
  const file = event.target.files[0];
  if (!file) return;
  capturedPhotoBlob = file.type === "image/jpeg" ? file : file;
  const preview = document.querySelector("#capturedPreview");
  preview.src = URL.createObjectURL(file);
  preview.hidden = false;
  await stopCamera();
  document.querySelector("#cameraStatus").textContent = "Foto acquisita e pronta da salvare.";
});

document.querySelector("#closeDrawer").addEventListener("click", closeDrawer);
backdrop.addEventListener("click", closeDrawer);

let routeMode = "walking";

document.querySelectorAll(".mode-button").forEach(button => {
  button.addEventListener("click", () => {
    routeMode = button.dataset.mode;
    document.querySelectorAll(".mode-button").forEach(item => item.classList.toggle("active", item === button));
  });
});

timeline.addEventListener("click", event => {
  const legButton = event.target.closest(".leg-button");
  if (!legButton) return;
  openDrawer("Come raggiungere la meta", `
    <p style="color:#77796f;font-size:12px;line-height:1.5">Scegli il mezzo per aprire il tragitto in Google Maps.</p>
    <div class="route-choice">
      <button type="button" data-route-mode="walking" data-from="${legButton.dataset.from}" data-to="${legButton.dataset.to}">A piedi</button>
      <button type="button" data-route-mode="transit" data-from="${legButton.dataset.from}" data-to="${legButton.dataset.to}">Metro / mezzi</button>
    </div>
  `);
});

document.querySelector("#mapButton").addEventListener("click", () => {
  const activeDay = Number(document.querySelector(".date-tab.active").dataset.day);
  const day = days[activeDay];
  const waypoints = day.stops.slice(1, -1).map(stop => stop.place).filter(Boolean);
  const params = new URLSearchParams({
    api: "1",
    origin: day.origin,
    destination: day.destination,
    travelmode: routeMode
  });
  if (waypoints.length) params.set("waypoints", waypoints.join("|"));
  window.open(`https://www.google.com/maps/dir/?${params.toString()}`, "_blank", "noopener,noreferrer");
});
