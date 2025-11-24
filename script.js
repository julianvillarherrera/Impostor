const categories = {
  Videojuegos: ["Mario", "Zelda", "Halo", "Minecraft", "Fortnite", "Tetris"],
  Deportes: ["Fútbol", "Baloncesto", "Tenis", "Natación", "Ciclismo", "Voleibol"],
  "Películas y series": ["Inception", "Breaking Bad", "Avatar", "Friends", "Titanic", "The Office"],
  Comida: ["Pizza", "Sushi", "Hamburguesa", "Tacos", "Paella", "Arepa"],
  Animales: ["León", "Delfín", "Águila", "Koala", "Pingüino", "Tortuga"],
  Famosos: ["Shakira", "Messi", "Bad Bunny", "Zendaya", "The Rock", "Beyoncé"],
  Música: ["Rock", "Reguetón", "Salsa", "Jazz", "Pop", "Hip-Hop"],
  Países: ["España", "Argentina", "México", "Japón", "Italia", "Brasil"],
};

const state = {
  category: "Videojuegos",
  players: [],
  impostorCount: 1,
  wheelRotation: 0,
};

const playerList = document.getElementById("playerList");
const playerTemplate = document.getElementById("playerInputTemplate");
const cardTemplate = document.getElementById("cardTemplate");
const categoryGrid = document.getElementById("categoryGrid");
const selectedCategory = document.getElementById("selectedCategory");
const roulette = document.getElementById("roulette");
const spinResult = document.getElementById("spinResult");

const playerCountInput = document.getElementById("playerCount");
const impostorCountInput = document.getElementById("impostorCount");

const btnAddPlayer = document.getElementById("btnAddPlayer");
const btnSpin = document.getElementById("btnSpin");
const btnPreparar = document.getElementById("btnPreparar");
const btnReiniciar = document.getElementById("btnReiniciar");
const btnOcultar = document.getElementById("btnOcultar");
const cardsContainer = document.getElementById("cards");

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
    card.innerHTML = `<span class="emoji">${emojiForCategory(cat)}</span><div><div class="eyebrow">Paquete</div><strong>${cat}</strong></div>`;
    if (cat === state.category) card.classList.add("selected");

    card.addEventListener("click", () => {
      state.category = cat;
      selectedCategory.textContent = cat;
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

function updateWheel() {
  const total = state.players.length;
  if (!total) {
    roulette.style.background = "conic-gradient(from 0deg, #2d3748 0deg, #2d3748 360deg)";
    spinResult.textContent = "Añade jugadores para girar la ruleta.";
    return;
  }

  const slice = 360 / total;
  const stops = state.players
    .map((_, idx) => {
      const start = idx * slice;
      const end = start + slice;
      const color = idx % 2 === 0 ? "#3c4a6b" : "#1f2a44";
      return `${color} ${start}deg ${end}deg`;
    })
    .join(", ");

  roulette.style.background = `conic-gradient(${stops})`;
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

function prepareGame() {
  syncPlayersFromInputs();

  const players = state.players;
  const impostorCount = Math.max(1, Math.min(parseInt(impostorCountInput.value, 10) || 1, players.length - 1));
  impostorCountInput.value = impostorCount;

  if (players.length < 3) {
    alert("Necesitas al menos 3 jugadores.");
    return;
  }

  const indices = players.map((_, idx) => idx);
  shuffle(indices);
  const impostors = new Set(indices.slice(0, impostorCount));
  const civilians = indices.slice(impostorCount);

  const words = categories[state.category];
  const secret = words[Math.floor(Math.random() * words.length)];
  const alternatives = words.filter((w) => w !== secret);
  const decoy = alternatives.length
    ? alternatives[Math.floor(Math.random() * alternatives.length)]
    : secret;

  cardsContainer.innerHTML = "";

  players.forEach((name, idx) => {
    const cardNode = cardTemplate.content.cloneNode(true);
    const card = cardNode.querySelector(".role-card");
    const pill = cardNode.querySelector(".role-pill");
    const cardName = cardNode.querySelector(".card-name");
    const desc = cardNode.querySelector(".role-description");
    const secretWord = cardNode.querySelector(".secret-word");
    const revealBtn = cardNode.querySelector(".reveal");

    const isImpostor = impostors.has(idx);
    const role = isImpostor ? "Impostor" : "Civil";

    pill.textContent = role;
    cardName.textContent = name;
    desc.textContent = isImpostor
      ? "Recibes una palabra distinta, convence al resto."
      : "Compartes la palabra verdadera, describe sin revelar demasiado.";
    secretWord.textContent = isImpostor ? decoy : secret;

    card.classList.add(isImpostor ? "impostor" : "civil");
    revealBtn.addEventListener("click", () => card.classList.add("revealed"));

    cardsContainer.appendChild(cardNode);
  });
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function resetGame() {
  playerList.innerHTML = "";
  state.players = [];
  const defaultCount = Math.max(3, parseInt(playerCountInput.value, 10) || 6);
  playerCountInput.value = defaultCount;
  adjustPlayerInputs(defaultCount);
  state.wheelRotation = 0;
  roulette.style.transform = "rotate(0deg)";
  cardsContainer.innerHTML = "";
  spinResult.textContent = "Añade jugadores para girar la ruleta.";
  updateWheel();
}

function hideWords() {
  cardsContainer.querySelectorAll(".role-card").forEach((card) => {
    card.classList.remove("revealed");
  });
}

function init() {
  renderCategories();
  adjustPlayerInputs(parseInt(playerCountInput.value, 10));

  playerCountInput.addEventListener("change", (e) => {
    const value = Math.max(3, Math.min(12, parseInt(e.target.value, 10) || 3));
    e.target.value = value;
    adjustPlayerInputs(value);
  });

  impostorCountInput.addEventListener("change", (e) => {
    const value = Math.max(1, Math.min(3, parseInt(e.target.value, 10) || 1));
    e.target.value = value;
  });

  btnAddPlayer.addEventListener("click", () => {
    createPlayerInput(`Jugador ${playerList.childElementCount + 1}`);
    syncPlayersFromInputs();
  });

  btnSpin.addEventListener("click", spinWheel);
  btnPreparar.addEventListener("click", prepareGame);
  btnReiniciar.addEventListener("click", resetGame);
  btnOcultar.addEventListener("click", hideWords);
}

init();
