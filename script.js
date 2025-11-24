const categories = {
  Videojuegos: ["", "", "", "", "", ""],
  Deportes: ["", "", "", "", "", ""],
  "Películas y series": ["Inception", "Breaking Bad", "Avatar", "Friends", "Titanic", "The Office"],
  Comida: ["Pizza", "Sushi", "Hamburguesa", "Tacos", "Paella", "Arepa"],
  Animales: ["León", "Delfín", "Águila", "Koala", "Pingüino", "Tortuga"],
  Famosos: ["Shakira", "Messi", "Bad Bunny", "Zendaya", "The Rock", "Beyoncé"],
  Música: ["Rock", "Reguetón", "Salsa", "Jazz", "Pop", "Hip-Hop"],
  Países: ["España", "Argentina", "México", "Japón", "Italia", "Brasil"],
};

const spinPrompt = "Pulsa \"Girar\" para elegir quién empieza.";

const state = {
  category: "Videojuegos",
  players: [],
  impostorCount: 1,
  wheelRotation: 0,
  mode: "decoy",
  assignments: [],
  currentIndex: 0,
};

const stepper = document.getElementById("stepper");
const pages = document.querySelectorAll(".page");
const playerList = document.getElementById("playerList");
const playerTemplate = document.getElementById("playerInputTemplate");
const categoryGrid = document.getElementById("categoryGrid");
const roulette = document.getElementById("roulette");
const spinResult = document.getElementById("spinResult");
const cardProgress = document.getElementById("cardProgress");

const playerCountInput = document.getElementById("playerCount");
const impostorCountInput = document.getElementById("impostorCount");

const btnAddPlayer = document.getElementById("btnAddPlayer");
const btnSpin = document.getElementById("btnSpin");
const btnToCategory = document.getElementById("toCategory");
const btnToTurns = document.getElementById("toTurns");
const btnToCards = document.getElementById("toCards");
const btnNextPlayer = document.getElementById("nextPlayer");
const btnShowSummary = document.getElementById("showSummary");
const btnReplay = document.getElementById("btnReplay");
const btnRestart = document.getElementById("btnRestart");
const summary = document.getElementById("summary");
const summaryList = document.getElementById("summaryList");

const activeCard = document.getElementById("activeCard");
const activeRole = document.getElementById("activeRole");
const activeName = document.getElementById("activeName");
const activeDescription = document.getElementById("activeDescription");
const activeWord = document.getElementById("activeWord");

let dragStartY = 0;
let dragging = false;

function createPlayerInput(name = "") {
  const clone = playerTemplate.content.cloneNode(true);
  const wrapper = clone.querySelector(".player-input");
  const input = clone.querySelector(".player-name");
  const deleteBtn = clone.querySelector(".delete");

  input.value = name;
  deleteBtn.addEventListener("click", () => {
    wrapper.remove();
    syncPlayersFromInputs();
  });

  input.addEventListener("input", syncPlayersFromInputs);
  playerList.appendChild(clone);
}

function syncPlayersFromInputs() {
  const inputs = playerList.querySelectorAll(".player-name");
  state.players = Array.from(inputs)
    .map((input, idx) => input.value.trim() || `Jugador ${idx + 1}`)
    .filter(Boolean);

  playerCountInput.value = state.players.length;
  updateWheel();
}

function adjustPlayerInputs(targetCount) {
  const current = playerList.childElementCount;
  if (targetCount > current) {
    for (let i = current; i < targetCount; i++) {
      createPlayerInput(`Jugador ${i + 1}`);
    }
  } else if (targetCount < current) {
    for (let i = current; i > targetCount; i--) {
      playerList.lastElementChild?.remove();
    }
  }

  syncPlayersFromInputs();
}

function renderCategories() {
  categoryGrid.innerHTML = "";
  Object.keys(categories).forEach((cat) => {
    const card = document.createElement("button");
    card.className = "category-card";
    card.innerHTML = `<span class="emoji">${emojiForCategory(cat)}</span><div><strong class="category-name">${cat}</strong></div>`;
    if (cat === state.category) card.classList.add("selected");

    card.addEventListener("click", () => {
      state.category = cat;
      renderCategories();
    });

    categoryGrid.appendChild(card);
  });
}

function emojiForCategory(cat) {
  const map = {
    Videojuegos: "🎮",
    Deportes: "🏀",
    "Películas y series": "🎬",
    Comida: "🍔",
    Animales: "🦁",
    Famosos: "⭐️",
    Música: "🎵",
    Países: "🌍",
  };
  return map[cat] || "🃏";
}

function renderModes() {
  document.querySelectorAll(".mode-card").forEach((card) => {
    card.classList.toggle("selected", card.dataset.mode === state.mode);
    if (!card.dataset.bound) {
      card.addEventListener("click", () => {
        state.mode = card.dataset.mode;
        renderModes();
      });
      card.dataset.bound = "true";
    }
  });
}

function updateWheel() {
  const total = state.players.length;
  const size = roulette.clientWidth || 240;
  const dpr = window.devicePixelRatio || 1;
  roulette.width = size * dpr;
  roulette.height = size * dpr;

  const ctx = roulette.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, size, size);

  const center = size / 2;
  const borderOffset = 12;
  const radius = center - borderOffset;
  const baseColor = "#2f3a54";
  const dividerColor = "#111826";
  const dividerWidth = 10;

  ctx.beginPath();
  ctx.arc(center, center, radius, 0, Math.PI * 2);
  ctx.fillStyle = baseColor;
  ctx.fill();

  if (!total) {
    spinResult.textContent = "Añade jugadores para girar la ruleta.";
    return;
  }

  spinResult.textContent = spinPrompt;

  const sliceRad = (Math.PI * 2) / total;
  ctx.save();
  ctx.translate(center, center);
  ctx.strokeStyle = dividerColor;
  ctx.lineWidth = dividerWidth;
  ctx.lineCap = "butt";

  for (let i = 0; i < total; i++) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(radius, 0);
    ctx.stroke();
    ctx.rotate(sliceRad);
  }

  ctx.restore();
}

function spinWheel() {
  if (state.players.length === 0) return;

  const winnerIndex = Math.floor(Math.random() * state.players.length);
  const slice = 360 / state.players.length;
  const targetRotation = 360 * 5 + (360 - winnerIndex * slice - slice / 2);
  state.wheelRotation += targetRotation;
  roulette.style.transform = `rotate(${state.wheelRotation}deg)`;

  setTimeout(() => {
    spinResult.textContent = `Empieza ${state.players[winnerIndex]} 🧭`;
  }, 2400);
}

function goToPage(pageName) {
  pages.forEach((page) => {
    const isActive = page.dataset.page === pageName;
    page.hidden = !isActive;
  });

  stepper.querySelectorAll(".step").forEach((step) => {
    const active = step.dataset.step === pageName;
    step.classList.toggle("active", active);
  });

  if (pageName === "turns") {
    spinResult.textContent = spinPrompt;
  }
}

function validatePlayers() {
  syncPlayersFromInputs();

  const players = state.players;
  const impostorCount = Math.max(1, Math.min(parseInt(impostorCountInput.value, 10) || 1, players.length - 1));
  impostorCountInput.value = impostorCount;
  state.impostorCount = impostorCount;

  if (players.length < 3) {
    alert("Necesitas al menos 3 jugadores.");
    return false;
  }
  return true;
}

function prepareAssignments() {
  syncPlayersFromInputs();
  if (!validatePlayers()) return false;

  const players = state.players;
  const impostorCount = state.impostorCount;
  const indices = players.map((_, idx) => idx);
  shuffle(indices);
  const impostors = new Set(indices.slice(0, impostorCount));

  const words = categories[state.category];
  const secret = words[Math.floor(Math.random() * words.length)];
  const alternatives = words.filter((w) => w !== secret);
  const decoy = alternatives.length ? alternatives[Math.floor(Math.random() * alternatives.length)] : secret;

  state.assignments = players.map((name, idx) => {
    const isImpostor = impostors.has(idx);
    const role = isImpostor ? "Impostor" : "Civil";

    const description = isImpostor
      ? state.mode === "label"
        ? "Tu carta dice impostor. Sé creativo para despistar."
        : "Recibes una palabra distinta, convence al resto."
      : "Compartes la palabra verdadera, describe sin revelar demasiado.";

    const word = isImpostor
      ? state.mode === "label"
        ? "Impostor"
        : decoy
      : secret;

    return { name, role, description, word, isImpostor };
  });

  state.currentIndex = 0;
  return true;
}

function renderActiveCard() {
  const total = state.assignments.length;
  const assignment = state.assignments[state.currentIndex];
  if (!assignment) return;

  activeCard.classList.remove("impostor", "civil", "revealed");
  activeCard.dataset.role = assignment.isImpostor ? "impostor" : "civil";
  activeRole.textContent = assignment.role;
  activeName.textContent = assignment.name;
  activeDescription.textContent = assignment.description;
  activeWord.textContent = assignment.word;
  cardProgress.textContent = `Jugador ${state.currentIndex + 1} de ${total}`;

  activeCard.classList.remove("revealing");
  activeCard.style.transform = "translateY(0)";
}

function nextPlayerCard() {
  if (state.currentIndex < state.assignments.length - 1) {
    state.currentIndex += 1;
    renderActiveCard();
  } else {
    showReadyScreen();
  }
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function resetGame({ clearPlayers = false } = {}) {
  if (clearPlayers) {
    playerList.innerHTML = "";
    state.players = [];
    const baseCount = 3;
    playerCountInput.value = baseCount;
    adjustPlayerInputs(baseCount);
  } else {
    syncPlayersFromInputs();
  }
  state.wheelRotation = 0;
  roulette.style.transform = "rotate(0deg)";
  spinResult.textContent = spinPrompt;
  state.assignments = [];
  state.mode = "decoy";
  renderModes();
  state.currentIndex = 0;
  cardProgress.textContent = "Jugador 1 de 1";
  activeCard.classList.remove("revealing", "impostor", "civil");
  activeCard.style.transform = "translateY(0)";
  summary.hidden = true;
  goToPage("players");
  updateWheel();
}

function startReveal(e) {
  dragging = true;
  dragStartY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
  activeCard.classList.remove("revealed");
  activeCard.classList.remove("impostor", "civil");
  if (e.pointerId !== undefined) {
    activeCard.setPointerCapture(e.pointerId);
  }
}

function moveReveal(e) {
  if (!dragging) return;
  const currentY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
  const delta = Math.min(0, currentY - dragStartY);
  const translate = Math.max(-160, delta);
  activeCard.style.transform = `translateY(${translate}px)`;
  if (translate <= -40) {
    activeCard.classList.add("revealing");
    if (activeCard.dataset.role) {
      activeCard.classList.add(activeCard.dataset.role);
    }
  } else {
    activeCard.classList.remove("revealing", "impostor", "civil");
  }
}

function endReveal(e) {
  if (e?.pointerId !== undefined) {
    try {
      activeCard.releasePointerCapture(e.pointerId);
    } catch (err) {
      // ignore release errors
    }
  }
  dragging = false;
  activeCard.style.transform = "translateY(0)";
  setTimeout(() => {
    activeCard.classList.remove("revealing", "impostor", "civil");
  }, 120);
}

function showReadyScreen() {
  summary.hidden = true;
  goToPage("ready");
}

function renderSummary() {
  summaryList.innerHTML = "";
  state.assignments.forEach((assignment) => {
    const item = document.createElement("div");
    item.className = "summary-item";
    item.innerHTML = `<div><strong>${assignment.name}</strong><p class="muted">${assignment.role}</p></div><div class="word">${assignment.word || "(Vacío)"}</div>`;
    summaryList.appendChild(item);
  });
}

function init() {
  renderCategories();
  renderModes();
  adjustPlayerInputs(parseInt(playerCountInput.value, 10));

  playerCountInput.addEventListener("change", (e) => {
    const value = Math.max(3, Math.min(12, parseInt(e.target.value, 10) || 3));
    e.target.value = value;
    adjustPlayerInputs(value);
  });

  impostorCountInput.addEventListener("change", (e) => {
    const value = Math.max(1, Math.min(3, parseInt(e.target.value, 10) || 1));
    e.target.value = value;
    state.impostorCount = value;
  });

  btnAddPlayer.addEventListener("click", () => {
    createPlayerInput(`Jugador ${playerList.childElementCount + 1}`);
    syncPlayersFromInputs();
  });

  btnSpin.addEventListener("click", spinWheel);

  btnToCategory.addEventListener("click", () => {
    if (validatePlayers()) {
      goToPage("category");
    }
  });

  btnToTurns.addEventListener("click", () => {
    if (validatePlayers()) {
      goToPage("turns");
    }
  });

  btnToCards.addEventListener("click", () => {
    const ok = prepareAssignments();
    if (ok) {
      renderActiveCard();
      summary.hidden = true;
      goToPage("cards");
    }
  });

  document.querySelectorAll("[data-back]").forEach((btn) => {
    btn.addEventListener("click", () => goToPage(btn.dataset.back));
  });

  btnNextPlayer.addEventListener("click", nextPlayerCard);

  btnShowSummary.addEventListener("click", () => {
    renderSummary();
    summary.hidden = false;
  });

  btnReplay.addEventListener("click", () => {
    summary.hidden = true;
    goToPage("category");
  });

  btnRestart.addEventListener("click", () => resetGame({ clearPlayers: true }));

  activeCard.addEventListener("pointerdown", startReveal);
  activeCard.addEventListener("pointermove", moveReveal);
  activeCard.addEventListener("pointerup", endReveal);
  activeCard.addEventListener("pointercancel", endReveal);
  activeCard.addEventListener("pointerleave", endReveal);
}

init();
