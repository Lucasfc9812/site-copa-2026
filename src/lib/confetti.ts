import confetti from "canvas-confetti";

export function fireConfetti() {
  const colors = ["#FFD700", "#22c55e", "#facc15", "#16a34a"];
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.7 },
    colors,
  });
  setTimeout(() => {
    confetti({ particleCount: 60, angle: 60, spread: 55, origin: { x: 0 }, colors });
    confetti({ particleCount: 60, angle: 120, spread: 55, origin: { x: 1 }, colors });
  }, 250);
}
