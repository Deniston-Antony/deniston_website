(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const filters = document.querySelectorAll("[data-quote-filter]");
  const quotes = document.querySelectorAll(".quote-card");

  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      const lang = button.getAttribute("data-quote-filter");
      filters.forEach(function (item) {
        item.setAttribute("aria-pressed", String(item === button));
      });
      quotes.forEach(function (card) {
        const match = lang === "all" || card.getAttribute("data-lang") === lang;
        card.classList.toggle("hidden", !match);
      });
    });
  });
})();
