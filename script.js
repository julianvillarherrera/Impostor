const categories = {
  Videojuegos: [
    "Mario Kart",
    "Super Mario Bros",
    "Minecraft",
    "Fortnite",
    "Call of Duty",
    "FIFA",
    "Grand Theft Auto V",
    "The Legend of Zelda",
    "Pokémon",
    "Tetris",
    "Counter-Strike",
    "League of Legends",
    "Overwatch",
    "God of War",
    "Red Dead Redemption 2",
    "Among Us",
    "Roblox",
    "Halo",
    "Assassin's Creed",
    "Resident Evil",
    "The Witcher 3",
    "Elden Ring",
    "Dark Souls",
    "Candy Crush",
    "Clash Royale",
    "Clash of Clans",
    "Rocket League",
    "Animal Crossing",
    "Doom",
    "Skyrim",
    "Fallout",
    "Battlefield",
    "Valorant",
    "Diablo",
    "StarCraft",
    "World of Warcraft",
    "Cyberpunk 2077",
    "Mortal Kombat",
    "Street Fighter",
    "Pac-Man",
    "Donkey Kong",
    "Sonic the Hedgehog",
    "Splatoon",
    "Monster Hunter",
    "PUBG",
    "Genshin Impact",
    "Horizon Zero Dawn",
    "Metal Gear Solid",
    "Tekken",
    "Left 4 Dead",
  ],
  Deportes: [
    "Fútbol",
    "Baloncesto",
    "Tenis",
    "Pádel",
    "Natación",
    "Atletismo",
    "Ciclismo",
    "Boxeo",
    "Judo",
    "Karate",
    "Esgrima",
    "Rugby",
    "Golf",
    "Gimnasia",
    "Voleibol",
    "Balonmano",
    "Béisbol",
    "Surf",
    "Skateboard",
    "Snowboard",
    "Esquí",
    "Remo",
    "Piragüismo",
    "Triatlón",
    "Bádminton",
    "Halterofilia",
    "Lucha libre",
    "Kickboxing",
    "Taekwondo",
    "Waterpolo",
    "Polo",
    "Correr",
    "Senderismo",
    "Escalada",
    "Motociclismo",
    "Fórmula 1",
    "Automovilismo",
    "Cricket",
    "Hockey sobre hielo",
    "Hockey hierba",
    "Ajedrez",
    "Dardos",
    "Billar",
    "Petanca",
    "Vela",
    "Parkour",
    "Softbol",
    "Squash",
    "Esgrima",
    "Tenis de mesa",
  ],
  "Películas y series": [
    "La Casa de Papel",
    "Élite",
    "Aquí no hay quien viva",
    "Aída",
    "El Ministerio del Tiempo",
    "Cuéntame cómo pasó",
    "Paquita Salas",
    "Los Serrano",
    "Física o Química",
    "Veneno",
    "Vis a Vis",
    "El Internado",
    "Los Hombres de Paco",
    "Amar en tiempos revueltos",
    "7 Vidas",
    "La que se avecina",
    "Velvet",
    "El Príncipe",
    "Merlí",
    "Patria",
    "Stranger Things",
    "Juego de Tronos",
    "Breaking Bad",
    "Friends",
    "The Big Bang Theory",
    "The Walking Dead",
    "The Office",
    "Vikings",
    "Narcos",
    "The Mandalorian",
    "Lost",
    "Dark",
    "Succession",
    "Black Mirror",
    "El Señor de los Anillos",
    "Harry Potter",
    "Avatar",
    "Titanic",
    "Forrest Gump",
    "Gladiator",
    "Joker",
    "Pulp Fiction",
    "Star Wars",
    "Jurassic Park",
    "El Padrino",
    "El Rey León",
    "Shrek",
    "Intocable",
    "Ocho apellidos vascos",
    "Campeones",
  ],
  Comida: [
    "Pizza",
    "Hamburguesa",
    "Ensalada",
    "Pasta",
    "Arroz",
    "Sopa",
    "Sushi",
    "Tacos",
    "Pan",
    "Queso",
    "Yogur",
    "Pollo",
    "Carne",
    "Pescado",
    "Huevo",
    "Aguacate",
    "Tomate",
    "Patatas",
    "Cereal",
    "Chocolate",
    "Helado",
    "Empanada",
    "Tortilla",
    "Crepe",
    "Donut",
    "Bocadillo",
    "Salsa",
    "Hummus",
    "Croqueta",
    "Jamón",
    "Naranja",
    "Uva",
    "Manzana",
    "Plátano",
    "Mango",
    "Galletas",
    "Café",
    "Té",
    "Batido",
    "Zumo",
    "Albóndigas",
    "Lasaña",
    "Burrito",
    "Nachos",
    "Kebap",
    "Falafel",
    "Brocheta",
    "Cangrejo",
    "Atún",
    "Tarta",
  ],
  Animales: [
    "Perro",
    "Gato",
    "León",
    "Tigre",
    "Elefante",
    "Jirafa",
    "Pingüino",
    "Cebra",
    "Tortuga",
    "Delfín",
    "Tiburón",
    "Ballena",
    "Oso",
    "Lobo",
    "Zorro",
    "Águila",
    "Halcón",
    "Caballo",
    "Vaca",
    "Cerdo",
    "Oveja",
    "Cabra",
    "Mono",
    "Gorila",
    "Canguro",
    "Koala",
    "Rana",
    "Lagarto",
    "Serpiente",
    "Conejo",
    "Hámster",
    "Erizo",
    "Murciélago",
    "Avestruz",
    "Pato",
    "Ganso",
    "Gallina",
    "Pavo",
    "Camello",
    "Ñu",
    "Hipopótamo",
    "Rinoceronte",
    "Caracol",
    "Mariposa",
    "Abeja",
    "Mosquito",
    "Pulpo",
    "Medusa",
    "Cangrejo",
    "Llama",
  ],
  Famosos: [
    "Cristiano Ronaldo",
    "Lionel Messi",
    "Rosalía",
    "Shakira",
    "Aitana",
    "Penélope Cruz",
    "Antonio Banderas",
    "Bad Bunny",
    "Beyoncé",
    "Taylor Swift",
    "Rihanna",
    "Jennifer Lopez",
    "Dwayne Johnson",
    "Tom Cruise",
    "Brad Pitt",
    "Leonardo DiCaprio",
    "Johnny Depp",
    "Will Smith",
    "Zendaya",
    "Robert Downey Jr.",
    "Chris Hemsworth",
    "Samuel L. Jackson",
    "Keanu Reeves",
    "Emma Stone",
    "Margot Robbie",
    "Pedro Luis Dominguez Quevedo",
    "Dua Lipa",
    "Karol G",
    "Sebastián Yatra",
    "David Bisbal",
    "Pablo Alborán",
    "Sergio Ramos",
    "Rafa Nadal",
    "Fernando Alonso",
    "Luis Tosar",
    "Mario Casas",
    "Úrsula Corberó",
    "Blanca Suárez",
    "Javier Bardem",
    "Ana de Armas",
    "Billie Eilish",
    "Ed Sheeran",
    "Eminem",
    "Drake",
    "The Weeknd",
    "Katy Perry",
    "Lady Gaga",
    "Justin Bieber",
    "Ariana Grande",
    "Maluma",
  ],
  Música: [
    "Pop",
    "Rock",
    "Reguetón",
    "Flamenco",
    "Trap",
    "Rap",
    "Jazz",
    "Blues",
    "Techno",
    "House",
    "Salsa",
    "Bachata",
    "Reggae",
    "Indie",
    "Metal",
    "Clásica",
    "Rosalía",
    "Aitana",
    "Bad Bunny",
    "Karol G",
    "David Bisbal",
    "Lola Índigo",
    "Shakira",
    "Alejandro Sanz",
    "Quevedo",
    "Bizarrap",
    "C. Tangana",
    "Daddy Yankee",
    "Maluma",
    "Dua Lipa",
    "Ed Sheeran",
    "Coldplay",
    "Imagine Dragons",
    "Taylor Swift",
    "Rihanna",
    "Lady Gaga",
    "The Weeknd",
    "Bruno Mars",
    "Despacito",
    "Shape of You",
    "Viva la Vida",
    "Blinding Lights",
    "Tusa",
    "La Bicicleta",
    "Con altura",
    "Bailando",
    "Quédate (Bizarrap & Quevedo)",
    "Hawái",
    "Thriller",
    "Bohemian Rhapsody",
  ],
  Países: [
    "España",
    "Francia",
    "Italia",
    "Alemania",
    "Portugal",
    "México",
    "Argentina",
    "Brasil",
    "Chile",
    "Colombia",
    "Perú",
    "Ecuador",
    "Bolivia",
    "Uruguay",
    "Paraguay",
    "Venezuela",
    "Canadá",
    "Estados Unidos",
    "Cuba",
    "República Dominicana",
    "Japón",
    "China",
    "Corea del Sur",
    "Corea del Norte",
    "Rusia",
    "India",
    "Indonesia",
    "Australia",
    "Nueva Zelanda",
    "Sudáfrica",
    "Egipto",
    "Marruecos",
    "Nigeria",
    "Kenia",
    "Turquía",
    "Arabia Saudita",
    "Catar",
    "Emiratos Árabes Unidos",
    "Israel",
    "Grecia",
    "Polonia",
    "Noruega",
    "Suecia",
    "Finlandia",
    "Dinamarca",
    "Suiza",
    "Austria",
    "Bélgica",
    "Países Bajos",
    "Irlanda",
  ],
};

const rouletteColors = [
  "#5eead4",
  "#60a5fa",
  "#a78bfa",
  "#f472b6",
  "#fbbf24",
  "#34d399",
  "#38bdf8",
  "#c084fc",
  "#fb7185",
  "#f97316",
  "#22c55e",
  "#0ea5e9",
  "#a3e635",
  "#f9a8d4",
  "#facc15",
  "#4ade80",
  "#67e8f9",
  "#fda4af",
  "#c7d2fe",
  "#fcd34d",
];

const spinPrompt = "Pulsa \"Girar\"";

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
const activeWord = document.getElementById("activeWord");

let dragStartY = 0;
let dragging = false;

function createPlayerInput(name = "", placeholder = "") {
  const clone = playerTemplate.content.cloneNode(true);
  const wrapper = clone.querySelector(".player-input");
  const input = clone.querySelector(".player-name");
  const deleteBtn = clone.querySelector(".delete");

  const idx = playerList.childElementCount + 1;
  const fallbackPlaceholder = placeholder || name || `Jugador ${idx}`;
  input.placeholder = fallbackPlaceholder;
  input.value = name ? name : "";
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
  updateImpostorLimits();
  updateWheel();
}

function adjustPlayerInputs(targetCount) {
  const cappedTarget = Math.max(3, Math.min(20, targetCount));
  if (targetCount !== cappedTarget) {
    playerCountInput.value = cappedTarget;
  }

  const current = playerList.childElementCount;
  if (cappedTarget > current) {
    for (let i = current; i < cappedTarget; i++) {
      createPlayerInput("", `Jugador ${i + 1}`);
    }
  } else if (cappedTarget < current) {
    for (let i = current; i > cappedTarget; i--) {
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

function updateImpostorLimits() {
  const total = Math.max(0, state.players.length);
  const maxImpostors = Math.max(1, Math.floor(total / 2) || 1);
  impostorCountInput.max = maxImpostors;

  let value = parseInt(impostorCountInput.value, 10) || 1;
  value = Math.max(1, Math.min(value, maxImpostors));
  impostorCountInput.value = value;
  state.impostorCount = value;
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
  const dividerColor = "#0a1020";
  const dividerWidth = 8;

  if (!total) {
    spinResult.textContent = "Añade jugadores para girar la ruleta.";
    return;
  }

  spinResult.textContent = spinPrompt;

  const sliceRad = (Math.PI * 2) / total;
  ctx.save();
  ctx.translate(center, center);

  let currentAngle = -Math.PI / 2;
  for (let i = 0; i < total; i++) {
    const start = currentAngle;
    const end = currentAngle + sliceRad;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, radius, start, end);
    ctx.closePath();
    ctx.fillStyle = rouletteColors[i] || "#2d3748";
    ctx.fill();

    currentAngle = end;
  }

  ctx.strokeStyle = dividerColor;
  ctx.lineWidth = dividerWidth;
  ctx.lineCap = "butt";
  ctx.beginPath();
  for (let i = 0; i < total; i++) {
    const angle = sliceRad * i - Math.PI / 2;
    ctx.moveTo(0, 0);
    ctx.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
  }
  ctx.stroke();

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

  if (stepper) {
    stepper.querySelectorAll(".step").forEach((step) => {
      const active = step.dataset.step === pageName;
      step.classList.toggle("active", active);
    });
  }

  if (pageName === "turns") {
    spinResult.textContent = spinPrompt;
  }
}

function validatePlayers() {
  syncPlayersFromInputs();

  const players = state.players;
  const maxImpostors = Math.max(1, Math.floor(players.length / 2));
  const impostorCount = Math.max(1, Math.min(parseInt(impostorCountInput.value, 10) || 1, maxImpostors));
  impostorCountInput.value = impostorCount;
  state.impostorCount = impostorCount;

  if (players.length < 3) {
    alert("Necesitas al menos 3 jugadores.");
    return false;
  }
  if (players.length > 20) {
    alert("Máximo 20 jugadores.");
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

    const word = isImpostor
      ? state.mode === "label"
        ? "Impostor"
        : decoy
      : secret;

    return { name, role, word, isImpostor };
  });

  state.currentIndex = 0;
  return true;
}

function renderActiveCard() {
  const total = state.assignments.length;
  const assignment = state.assignments[state.currentIndex];
  if (!assignment) return;

  activeCard.classList.remove("impostor", "civil", "revealed");
  const revealRole = state.mode === "label";
  const roleClass = assignment.isImpostor ? "impostor" : "civil";
  activeCard.dataset.role = revealRole ? roleClass : "";
  activeCard.classList.toggle("role-hidden", !revealRole);
  activeRole.textContent = revealRole ? assignment.role : "Rol oculto";
  activeName.textContent = assignment.name;
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
    const value = Math.max(3, Math.min(20, parseInt(e.target.value, 10) || 3));
    e.target.value = value;
    adjustPlayerInputs(value);
  });

  impostorCountInput.addEventListener("change", (e) => {
    const value = parseInt(e.target.value, 10) || 1;
    impostorCountInput.value = value;
    updateImpostorLimits();
  });

  btnAddPlayer.addEventListener("click", () => {
    createPlayerInput("", `Jugador ${playerList.childElementCount + 1}`);
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
