// Gentle fade-in as cards enter the viewport 🌸
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(12px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => io.observe(card));

  // Sparkle hover on social icons
  document.querySelectorAll(".social").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.transform = "translateY(-3px) rotate(-4deg)";
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
});
