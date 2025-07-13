const startBtn = document.getElementById('startBtn');
const cardsSection = document.getElementById('cards');
const introSection = document.getElementById('intro');
const modal = document.getElementById('modal');
const voucherText = document.getElementById('voucherText');
const closeModal = document.getElementById('closeModal');

const vouchers = {
  1: "🍔 Vale pedido de comida (à sua escolha) - até 13/06/2026",
  2: "🎬 Dia Do Sim❤️",
  3: "🥐 Vale café da manhã na cama, feito com amor",
  4: "🌅 Uma noite só nossos sonhos",
  5: "💆‍♀️ sessão de fotos profissional",
  6: "🍔 Vale passeio romântico surpresa - até 13/06/2026",
  7: "🎬 Vale cinema a dois com pipoca ❤️",
  8: "🥐 Realizar 1 sonho seu",
  9: "🌅 Noite sem celulares",
  10: "💆‍♀️ Jantar as cegas tematico",
  11: "💆‍♀️ Mapa do tesouro"
};

// Simples trava por mês usando localStorage
const openedKey = 'voucherOpenedMonth';

startBtn.addEventListener('click', () => {
  introSection.classList.add('hidden');
  cardsSection.classList.remove('hidden');
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const month = new Date().getMonth();
    const lastOpened = localStorage.getItem(openedKey);

    if (lastOpened && parseInt(lastOpened) === month) {
      alert("Você já abriu o voucher deste mês! ❤️ Espere o próximo mês para abrir outro. 🗓️");
      return;
    }

    localStorage.setItem(openedKey, month);
    const id = card.getAttribute('data-id');
    voucherText.textContent = vouchers[id];

    modal.classList.remove('hidden');
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});
