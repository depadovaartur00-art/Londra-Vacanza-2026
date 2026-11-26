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
  if (activeRecorder && activeRecorder.state === "recording") activeRecorder.stop();
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

function readDaySummary(dayIndex) {
  return JSON.parse(localStorage.getItem(`londonSummary${dayIndex}`) || '{"ratings":{},"completed":[],"note":""}');
}

function saveDaySummary(dayIndex, summary) {
  localStorage.setItem(`londonSummary${dayIndex}`, JSON.stringify(summary));
}

function formatOutsideTime(milliseconds) {
  const totalMinutes = Math.max(0, Math.floor(milliseconds / 60000));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${String(minutes).padStart(2, "0")}m`;
}

function getOutsideDisplay(summary) {
  let elapsed = Number(summary.outsideSeconds || 0) * 1000;
  if (summary.outsideStartedAt) elapsed += Date.now() - Number(summary.outsideStartedAt);
  return formatOutsideTime(elapsed);
}

function renderSummary() {
  const dayIndex = Number(document.querySelector(".date-tab.active").dataset.day);
  const day = days[dayIndex];
  const summary = readDaySummary(dayIndex);
  const completedCount = summary.completed.length;
  const ratings = Object.values(summary.ratings).filter(value => Number(value) > 0);
  const average = ratings.length
    ? (ratings.reduce((total, value) => total + Number(value), 0) / ratings.length).toFixed(1)
    : "-";

  const rows = day.stops.map((stop, stopIndex) => {
    const rating = summary.ratings[stopIndex] || 0;
    const completed = summary.completed.includes(stopIndex);
    const stars = [1, 2, 3, 4, 5].map(value =>
      `<button class="star-button ${value <= rating ? "active" : ""}" type="button" data-rate="${stopIndex}" data-value="${value}" aria-label="${value} stelle">${value <= rating ? "★" : "☆"}</button>`
    ).join("");
    return `
      <div class="rate-row">
        <label>
          <input type="checkbox" data-complete="${stopIndex}" ${completed ? "checked" : ""}>
          ${stop.title}
        </label>
        <div class="stars">${stars}</div>
      </div>
    `;
  }).join("");

  openDrawer("Riepilogo giornata", `
    <div class="summary-stats">
      <div class="summary-stat"><strong>${completedCount}/${day.stops.length}</strong><span>Tappe</span></div>
      <div class="summary-stat"><strong>${average}</strong><span>Voto medio</span></div>
      <div class="summary-stat"><strong>${day.stops.length}</strong><span>Da valutare</span></div>
    </div>
    <div class="summary-extra">
      <div class="summary-field">
        <label for="summarySteps">Passi</label>
        <input id="summarySteps" type="number" min="0" inputmode="numeric" value="${summary.steps || ""}" placeholder="0">
      </div>
      <div class="summary-field">
        <label>Fuori casa</label>
        <input id="outsideTime" type="text" value="${getOutsideDisplay(summary)}" readonly>
      </div>
    </div>
    <div class="summary-actions">
      <button id="toggleOutside" class="${summary.outsideStartedAt ? "outside-active" : ""}" type="button">
        ${summary.outsideStartedAt ? "Esci dall'uscita" : "Avvia fuori casa"}
      </button>
      <button id="resetOutside" type="button">Azzera tempo</button>
    </div>
    ${rows}
    <textarea id="summaryNote" class="summary-note" placeholder="Nota finale della giornata...">${summary.note || ""}</textarea>
  `);
}

document.querySelector("#summaryButton").addEventListener("click", renderSummary);

document.querySelector("#drawerContent").addEventListener("click", event => {
  const toggleOutside = event.target.closest("#toggleOutside");
  if (toggleOutside) {
    const dayIndex = Number(document.querySelector(".date-tab.active").dataset.day);
    const summary = readDaySummary(dayIndex);
    if (summary.outsideStartedAt) {
      summary.outsideSeconds = (summary.outsideSeconds || 0) +
        Math.floor((Date.now() - Number(summary.outsideStartedAt)) / 1000);
      delete summary.outsideStartedAt;
    } else {
      summary.outsideStartedAt = Date.now();
    }
    saveDaySummary(dayIndex, summary);
    renderSummary();
    return;
  }

  const resetOutside = event.target.closest("#resetOutside");
  if (resetOutside) {
    const dayIndex = Number(document.querySelector(".date-tab.active").dataset.day);
    const summary = readDaySummary(dayIndex);
    summary.outsideSeconds = 0;
    delete summary.outsideStartedAt;
    saveDaySummary(dayIndex, summary);
    renderSummary();
    return;
  }

  const star = event.target.closest("[data-rate]");
  if (!star) return;
  const dayIndex = Number(document.querySelector(".date-tab.active").dataset.day);
  const summary = readDaySummary(dayIndex);
  summary.ratings[star.dataset.rate] = Number(star.dataset.value);
  saveDaySummary(dayIndex, summary);
  renderSummary();
});

document.querySelector("#drawerContent").addEventListener("change", event => {
  if (event.target.matches("#summarySteps")) {
    const dayIndex = Number(document.querySelector(".date-tab.active").dataset.day);
    const summary = readDaySummary(dayIndex);
    summary.steps = Math.max(0, Number(event.target.value) || 0);
    saveDaySummary(dayIndex, summary);
  }

  const complete = event.target.closest("[data-complete]");
  if (complete) {
    const dayIndex = Number(document.querySelector(".date-tab.active").dataset.day);
    const summary = readDaySummary(dayIndex);
    const stopIndex = Number(complete.dataset.complete);
    summary.completed = complete.checked
      ? [...new Set([...summary.completed, stopIndex])]
      : summary.completed.filter(index => index !== stopIndex);
    saveDaySummary(dayIndex, summary);
    renderSummary();
  }

  if (event.target.matches("#summaryNote")) {
    const dayIndex = Number(document.querySelector(".date-tab.active").dataset.day);
    const summary = readDaySummary(dayIndex);
    summary.note = event.target.value;
    saveDaySummary(dayIndex, summary);
  }
});

document.querySelector("#drawerContent").addEventListener("input", event => {
  if (event.target.matches("#summarySteps")) {
    const dayIndex = Number(document.querySelector(".date-tab.active").dataset.day);
    const summary = readDaySummary(dayIndex);
    summary.steps = Math.max(0, Number(event.target.value) || 0);
    saveDaySummary(dayIndex, summary);
    return;
  }

  if (!event.target.matches("#summaryNote")) return;
  const dayIndex = Number(document.querySelector(".date-tab.active").dataset.day);
  const summary = readDaySummary(dayIndex);
  summary.note = event.target.value;
  saveDaySummary(dayIndex, summary);
});
async function renderWrittenDiary() {
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

document.querySelector("#diaryButton").addEventListener("click", renderWrittenDiary);

document.querySelector("#drawerContent").addEventListener("click", async event => {
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
  }
});

document.querySelector("#closeDrawer").addEventListener("click", closeDrawer);
backdrop.addEventListener("click", closeDrawer);

let activeRecorder = null;
let activeRecordingChunks = [];
let activeRecordingTimer = null;
let currentPosition = null;

function openCapsuleDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("LondraVacanza", 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore("capsules", { keyPath: "id", autoIncrement: true });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveCapsule(capsule) {
  const db = await openCapsuleDb();
  await new Promise((resolve, reject) => {
    const transaction = db.transaction("capsules", "readwrite");
    transaction.objectStore("capsules").add(capsule);
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error);
  });
  db.close();
}

async function readCapsules() {
  const db = await openCapsuleDb();
  const capsules = await new Promise((resolve, reject) => {
    const request = db.transaction("capsules", "readonly").objectStore("capsules").getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  db.close();
  return capsules.sort((a, b) => b.createdAt - a.createdAt);
}

async function getCurrentPosition() {
  if (!navigator.geolocation) throw new Error("Posizione non disponibile");
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 60000
    });
  });
}

async function renderCapsules() {
  if (activeRecorder && activeRecorder.state === "recording") activeRecorder.stop();
  clearInterval(activeRecordingTimer);
  openDrawer("Capsule sonore", `
    <p class="capsule-status" id="capsuleStatus">Premi il pulsante per autorizzare microfono e posizione. La registrazione dura al massimo 10 secondi.</p>
    <button class="record-button" id="recordCapsule" type="button" aria-label="Registra capsule sonora"></button>
    <div id="capsuleList"><p style="color:#77796f;font-size:12px">Caricamento capsule...</p></div>
  `);
  let capsules = [];
  try {
    capsules = await readCapsules();
  } catch {
    document.querySelector("#capsuleList").innerHTML = `<p style="color:#77796f;font-size:12px">Archivio capsule non disponibile.</p>`;
    return;
  }
  const cards = [];
  for (const capsule of capsules) {
    const audioUrl = URL.createObjectURL(capsule.audio);
    const mapsUrl = capsule.latitude && capsule.longitude
      ? `https://www.google.com/maps/search/?api=1&query=${capsule.latitude},${capsule.longitude}`
      : "";
    cards.push(`
      <article class="capsule-card">
        <time>${new Date(capsule.createdAt).toLocaleString("it-IT", { dateStyle: "medium", timeStyle: "short" })}</time>
        <audio controls src="${audioUrl}"></audio>
        ${mapsUrl ? `<a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">Apri il punto registrato · ${capsule.latitude.toFixed(5)}, ${capsule.longitude.toFixed(5)}</a>` : ""}
      </article>
    `);
  }

  document.querySelector("#capsuleList").innerHTML =
    cards.length ? cards.join("") : `<p style="color:#77796f;font-size:12px">Nessuna capsule registrata.</p>`;
}

document.querySelector("#capsuleButton").addEventListener("click", renderCapsules);

document.querySelector("#drawerContent").addEventListener("click", async event => {
  if (!event.target.closest("#recordCapsule")) return;
  if (activeRecorder && activeRecorder.state === "recording") {
    activeRecorder.stop();
    return;
  }

  const status = document.querySelector("#capsuleStatus");
  const recordButton = document.querySelector("#recordCapsule");
  status.textContent = "Richiedo permessi per microfono e posizione...";
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true },
      video: false
    });
    let position = null;
    try {
      position = await getCurrentPosition();
    } catch {
      status.textContent = "Registrazione avviata. Posizione non disponibile.";
    }
    currentPosition = position;

    const preferredTypes = ["audio/mp4", "audio/webm"];
    const mimeType = preferredTypes.find(type => MediaRecorder.isTypeSupported(type));
    activeRecorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
    activeRecordingChunks = [];
    activeRecorder.ondataavailable = event => {
      if (event.data.size) activeRecordingChunks.push(event.data);
    };
    activeRecorder.onstop = async () => {
      clearInterval(activeRecordingTimer);
      stream.getTracks().forEach(track => track.stop());
      recordButton.classList.remove("recording");
      const blob = new Blob(activeRecordingChunks, { type: activeRecorder.mimeType });
      await saveCapsule({
        audio: blob,
        latitude: currentPosition?.coords.latitude || null,
        longitude: currentPosition?.coords.longitude || null,
        accuracy: currentPosition?.coords.accuracy || null,
        createdAt: Date.now()
      });
      status.textContent = "Capsula salvata con coordinate.";
      await renderCapsules();
    };
    activeRecorder.start();
    recordButton.classList.add("recording");
    status.textContent = "Registrazione in corso · stop automatico dopo 10 secondi";
    activeRecordingTimer = setTimeout(() => {
      if (activeRecorder && activeRecorder.state === "recording") activeRecorder.stop();
    }, 10000);
  } catch (error) {
    status.textContent = "Permesso negato o microfono non disponibile. Autorizza microfono e posizione nelle impostazioni Safari.";
  }
});

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
