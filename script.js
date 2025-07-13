const startBtn = document.getElementById('startBtn');
const cardsSection = document.getElementById('cards');
const introSection = document.getElementById('intro');
const modal = document.getElementById('modal');
const voucherText = document.getElementById('voucherText');
const closeModal = document.getElementById('closeModal');

const vouchers = {
  1: "🍔 Vale pedido de comida (à sua escolha) - até 13/06/2026",
  2: "🎬 Troca De Roupa",
  3: "🥐 Vale vivara",
  4: "🌅 Uma noite só nossa",
  5: "💆‍♀️ Viagem Surpresa",
  6: "🍔 Vale passeio romântico surpresa - até 13/06/2026",
  7: "🎬 Vale Fran ",
  8: "🥐 Realizar 1 sonho seu",
  9: "🌅 Noite sem celulares",
  10: "💆‍♀️ Jantar as cegas (escolha de tema na roleta)",
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
