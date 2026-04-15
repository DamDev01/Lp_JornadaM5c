const header = document.querySelector("[data-header]");
const choiceForm = document.getElementById("choiceForm");
const choiceResult = document.getElementById("choiceResult");
const faqItems = document.querySelectorAll(".faq-item");

const paths = {
  ready: {
    title: "Entrar na Jornada M5C",
    text: "Você pode ir direto para a oferta e começar pelo primeiro passo guiado.",
    href: "#oferta",
    cta: "Ver como entrar"
  },
  processing: {
    title: "Acessar as 3 etapas gratuitas",
    text: "Comece pelas aulas de clareza, Banco de Energia e plano seguro antes de decidir.",
    href: "#etapas",
    cta: "Ver etapas gratuitas"
  },
  support: {
    title: "Entrar no grupo de apoio",
    text: "Use o grupo como caminho de segurança, pertencimento e acompanhamento inicial.",
    href: "#grupo",
    cta: "Ver grupo"
  }
};

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function updateChoice(value) {
  const path = paths[value] || paths.ready;

  choiceResult.innerHTML = `
    <span>Seu caminho sugerido</span>
    <strong>${path.title}</strong>
    <p>${path.text}</p>
    <a class="btn btn-primary" href="${path.href}">${path.cta}</a>
  `;
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

choiceForm.addEventListener("change", (event) => {
  if (event.target.name === "state") {
    updateChoice(event.target.value);
  }
});

faqItems.forEach((item) => {
  const button = item.querySelector("button");

  button.addEventListener("click", () => {
    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});
