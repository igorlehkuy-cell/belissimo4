document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const sidebar = document.getElementById("sidebar");

    if (burger && sidebar) {
        burger.addEventListener("click", () => {
            sidebar.classList.toggle("active");
        });
    }

    const promos = [
        "🎁 Отримай каву безкоштовно при замовленні понад 200 грн!",
        "🔥 Знижка -15% на піцу до кінця дня!",
        "🍔 Додай другий бургер лише за 10 грн!",
        "🍻 Знижка -50% на пиво до кінця місяця, пий на здоров'я"
    ];

    setTimeout(() => {
        const randomPromo = promos[Math.floor(Math.random() * promos.length)];
        showPromoToast(randomPromo);
    }, 4000);
});

function showPromoToast(message) {
    const toast = document.createElement("div");
    toast.className = "promo-toast";
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 100);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 500);
    }, 5000);
}
// Конфігурація Telegram бота
const TELEGRAM_BOT_TOKEN = '8526944637:AAG2dPYQEh_9cHO-z3rIscF7LbtbsMnCeW4'; // Ваш токен
const TELEGRAM_CHAT_ID = '-1002928586770'; // ID вашої групи


const style = document.createElement("style");
style.textContent = `
.promo-toast {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #ff7b00;
  color: white;
  padding: 15px 25px;
  border-radius: 30px;
  font-weight: 600;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.4s ease;
  z-index: 2000;
}
.promo-toast.show {
  opacity: 1;
  transform: translateY(0);
}`;
document.head.appendChild(style);
