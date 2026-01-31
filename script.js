* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  height: 100vh;
  overflow: hidden;
}

/* 💗 Hearts background layer (BEHIND the card) */
#heartsLayer {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

/* each heart */
.bg-heart {
  position: absolute;
  bottom: -30px;
  opacity: 0.9;
  animation: floatUp 6s linear forwards;
}

@keyframes floatUp {
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}

/* App wrapper */
#app {
  position: relative;
  z-index: 2; /* ABOVE hearts */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* Background theme */
.theme-black {
  background: black;
  color: white;
}

/* Pages */
.page {
  display: none;
  width: 100%;
  max-width: 540px;
}

.page.active {
  display: block;
}

/* Card (kept above hearts) */
.card {
  position: relative;
  z-index: 10;
  border-radius: 22px;
  padding: 28px;
  text-align: center;
  box-shadow: 0px 0px 50px rgba(255, 105, 180, 0.25);
}

/* ✅ Vibrant card design (your request) */
.card-vibrant {
  background: linear-gradient(135deg, rgba(255, 105, 180, 0.85), rgba(255, 0, 128, 0.55));
  border: 2px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(8px);
}

/* Titles */
.title {
  font-size: 2rem;
  margin-bottom: 15px;
  color: white;
}

#question {
  font-size: 2rem;
  margin-bottom: 25px;
  color: white;
}

/* Message */
.message {
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 15px 0 20px;
  color: white;
}

/* Buttons */
.btn {
  font-size: 1.1rem;
  padding: 12px 22px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.15s ease;
}

.btn:hover {
  transform: scale(1.05);
}

.yes {
  background: white;
  color: #ff2f7d;
  font-weight: bold;
}

.no {
  background: #222;
  color: white;
  position: absolute;
  left: 160px;
  top: 0;
}

.next {
  background: #ff2f7d;
  color: white;
  font-weight: bold;
}

.gift {
  background: #ff006a;
  color: white;
  font-weight: bold;
}

/* Button area (NO button stays inside) */
.btn-area {
  position: relative;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
}

/* Gift box */
.hidden {
  display: none;
}

.gift-box {
  margin-top: 20px;
}

.gift-emoji {
  font-size: 90px;
  margin: 10px 0;
}

/* Love letter */
.letter-card {
  max-height: 75vh;
  overflow-y: auto;
}

.letter-text {
  text-align: left;
  font-size: 1.05rem;
  line-height: 1.6;
  margin-top: 12px;
  color: white;
}

/* Final Buttons */
.final-buttons {
  margin-top: 20px;
  text-align: center;
}

.forever-text {
  margin-bottom: 12px;
  font-size: 1.1rem;
  color: #ffe3f1;
}
