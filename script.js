// ---------- Helpers ----------
const $ = (id) => document.getElementById(id);

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  $(pageId).classList.add("active");
}

// ---------- Elements ----------
const yesBtn = $("yesBtn");
const noBtn = $("noBtn");
const btnArea = $("btnArea");

const page2Title = $("page2Title");
const message = $("message");
const nextBtn = $("nextBtn");

const giftBtn = $("giftBtn");
const giftBox = $("giftBox");
const openLetterBtn = $("openLetterBtn");

const letterText = $("letterText");
const foreverYes = $("foreverYes");
const foreverNo = $("foreverNo");
const finalButtons = $("finalButtons");

const heartsLayer = $("heartsLayer");

// ---------- Pages content ----------
let pageIndex = 0;

const lovePages = [
  "I love you so much 💖<br>You mean the world to me 🥺✨",
  "You make me feel safe, happy, and loved 💕<br>Thank you for being you 😘",
  "No matter what happens, I’ll always choose you 💗<br>You’re my favorite person 🫶",
  "Happy Valentine’s Day my love 💝<br>I love you forever ♾️💗<br>My Gorgeous Man 😘✨"
];

const loveLetter = `
To My Babe Rajat 💖,<br><br>

I don’t even know where to start because there are so many things I want to say, and none of them feel big enough to explain how much you mean to me 🥺✨ But I’ll try, because you deserve to know 💌.<br><br>

You’ve become one of the most beautiful parts of my life 💕. In the way you make me smile without trying 😊, in the way you make me feel safe even when everything else feels messy 🫶, and in the way you always manage to bring light into my darkest days ✨. Loving you feels like home 🏡💗 — warm, comforting, and real.<br><br>

I love the little things about you the most 🥰. The way you talk 🗣️, the way you laugh 😄, the way you look at me like I’m someone worth loving 💘. You make me feel special in a way I never thought I could feel 💞, and I’m so grateful for you 😘.<br><br>

Thank you for being patient with me 🫶, for caring about me 💗, for choosing me even on the days I don’t feel like I deserve it 🥺. Thank you for being the kind of person who makes love feel gentle, not scary 💕.<br><br>

I want you to know that I’m proud of you 🥹💖. For everything you’ve done, everything you’re doing, and everything you’re becoming 🌟. I believe in you more than words can say 💪💗, and I’ll always be here cheering you on 🎉.<br><br>

No matter what happens, I want you in my life 💞. I want to make memories with you 📸, laugh with you 😂, grow with you 🌱, and love you in every season 🍂🌸. You are not just someone I love… you are someone I want a future with 💍💖.<br><br>

I love you more than you’ll ever fully understand 💘, and I’ll keep loving you — today 💗, tomorrow 💕, and always ♾️✨.<br><br>

Forever yours 💖😘
`;

// ---------- NO button dodge (stays inside area) ----------
function dodgeNoButton(btn = noBtn) {
  const padding = 10;

  const areaRect = btnArea.getBoundingClientRect();
  const btnRect = btn.getBoundingClientRect();

  const maxX = areaRect.width - btnRect.width - padding;
  const maxY = areaRect.height - btnRect.height - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  btn.style.left = Math.max(padding, x) + "px";
  btn.style.top = Math.max(padding, y) + "px";
}

noBtn.addEventListener("mouseenter", () => dodgeNoButton(noBtn));
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dodgeNoButton(noBtn);
});

// ---------- YES (page 1 -> page 2) ----------
yesBtn.addEventListener("click", () => {
  showPage("page2");
  page2Title.innerHTML = "To My Babe Rajat 💖💖💖";

  pageIndex = 0;
  message.innerHTML = lovePages[pageIndex];
  nextBtn.textContent = "Next 💌";
});

// ---------- NEXT (page 2 -> page 3) ----------
nextBtn.addEventListener("click", () => {
  pageIndex++;

  if (pageIndex < lovePages.length) {
    message.innerHTML = lovePages[pageIndex];

    if (pageIndex === lovePages.length - 1) {
      nextBtn.textContent = "Finish 💘";
    }
  } else {
    showPage("page3");
  }
});

// ---------- Gift ----------
giftBtn.addEventListener("click", () => {
  giftBtn.classList.add("hidden");
  giftBox.classList.remove("hidden");
});

// ---------- Open Letter ----------
openLetterBtn.addEventListener("click", () => {
  showPage("page4");
  letterText.innerHTML = loveLetter;
});

// ---------- Forever YES ----------
foreverYes.addEventListener("click", () => {
  finalButtons.classList.add("hidden");
  showPage("page5");
});

// ---------- Forever NO dodges too ----------
foreverNo.addEventListener("mouseenter", () => dodgeNoButton(foreverNo));
foreverNo.addEventListener("click", (e) => {
  e.preventDefault();
  dodgeNoButton(foreverNo);
});

// ---------- Floating Hearts (UNDER card) ----------
function createBgHeart() {
  const heart = document.createElement("div");
  heart.className = "bg-heart";

  const hearts = ["💗", "💖", "💕", "💘"];
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 22 + 18 + "px";

  heartsLayer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(createBgHeart, 140);
