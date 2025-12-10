Belissimo -  просто, швидко.

Проєкт: Belissimo — вебсайт і бекенд для доставки їжі та управління її виготовленням (кухня + логістика).

Мова: українська
Мета: швидке і зручне замовлення страв, інтегроване управління кухнею (рецепти, черга приготування, інгредієнти) та логістика доставки (кур’єри, трекінг, ETA).

Особливості:

1.Сучасний дизайн

2.Форма замовлення їжі з відправкою даних у Telegram
3. Історія замовлень
4. Фільтрація послуг за категоріями
5. Модальні вікна для форм
6. Кросбраузерна сумісність  
Ключові функції:
•	Користувацький інтерфейс: перелік страв, фільтри, кастомні опції, оформлення замовлення.

•	Особистий кабінет: історія замовлень, повторні замовлення, збережені адреси,
система рівнів користувача(чим більший рівень, тим більші знижки)

•	Оплати: інтеграція з платіжними шлюзами (наприклад, LiqPay/Stripe/Portmone)

•	Повідомлення: SMS/Push/Email статуси замовлень

•	Аналітика: замовлення за період, найпопулярніші страви.

Архітектура

•	Frontend: 

/html

/js

/css

•	Backend

•	Інтеграції: мапи (Google Maps / OpenStreetMap)

Налаштування відправки заявок через Telegram

•	Створіть бота в Telegram за допомогою @BotFather

•	Отримайте токен бота

•	Створіть групу в Telegram і додайте до неї створеного бота

•	Надайте боту права адміністратора для можливості читати повідомлення

•	Дізнайтесь ID групи (можна через бот @getidsbot або надіславши повідомлення в групу і переглянувши його через API)

•	Відкрийте файл js/script.js і вставте отримані дані:

•	const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN'; // Вставте сюди токен вашого бота

o	const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID'; // Вставте сюди ID групи

Авторські права

© Belissimo, всі права захищені.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

Belissimo - simple, fast.

Project: Belissimo - website and backend for food delivery and production management (kitchen + logistics).

Language: Ukrainian
Goal: fast and convenient ordering of dishes, integrated kitchen management (recipes, cooking queue, ingredients) and delivery logistics (couriers, tracking, ETA).

Features:

1. Modern design
2. Food order form with sending data to Telegram
3. Order history

4. Filtering services by category
5. Modal windows for forms
8. Cross-browser compatibility

Key features:

• User interface: list of dishes, filters, custom options, order placement.

• Personal account: order history, repeat orders, saved addresses,
user level system (the higher the level, the bigger the discounts)

• Payments: integration with payment gateways (e.g. LiqPay/Stripe/Portmone)

• Notifications: SMS/Push/Email order status

• Analytics: orders for the period, most popular dishes.

Architecture

• Frontend:

/html

/js

/css

• Backend

• Integrations: maps (Google Maps / OpenStreetMap)

Setting up sending requests via Telegram

• Create a bot in Telegram using @BotFather

• Get the bot token

• Create a group in Telegram and add the created bot to it

• Grant the bot administrator rights to be able to read messages

• Find out the group ID (you can use the @getidsbot bot or by sending a message to the group and viewing it via the API)

• Open the js/script.js file and paste the received data:

• const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN'; // Insert your bot token here

o const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID'; // Insert the group ID here

Copyright

© Belissimo, all rights reserved.

