# goit-js-hw-07
==================
Критерії приймання
==================
    Створено репозиторій goit-js-hw-07.
    Домашня робота містить два посилання: на вихідні файли і робочу сторінку на GitHub Pages.
    В консолі відсутні помилки і попередження під час відкриття живої сторінки завдання.
    Імена змінних і функцій - зрозумілі та описові.
    Код відформатований за допомогою Prettier.
===============
Стартові файли
===============
Завантажуй стартові файли з базовою розміткою, готовими стилями та підключеними файлами скриптів для кожного завдання. Скопіюй їх собі у проект.

Файл gallery-items.js містить масив galleryItems, який містить об'єкти з інформацією про зображення: маленьке (прев`ю), оригінальне (велике) і опис. Ми вже підключили його до кожного з JS-файлів проекту.

===============================
Завдання 1 - галерея зображень
===============================

Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.

Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

  1  Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
  2  Реалізація делегування на ul.gallery і отримання url великого зображення.
  3  Підключення скрипту і стилів бібліотеки модального вікна basicLightbox (https://basiclightbox.electerious.com/). Використовуй CDN сервіс jsdelivr (https://www.jsdelivr.com/package/npm/basiclightbox?path=dist) і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
  4  Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією (https://github.com/electerious/basicLightbox#readme) і прикладами (https://basiclightbox.electerious.com/).
  5  Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox (https://basiclightbox.electerious.com/).
==========================
Розмітка елемента галереї
==========================
Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>

Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.
Закриття з клавіатури
Увага
==================================================================================================
Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.
==================================================================================================
Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотека basicLightbox (https://basiclightbox.electerious.com/) містить метод для програмного закриття модального вікна.
=======================================
Завдання 2 - бібліотека SimpleLightbox
=======================================

Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox (https://simplelightbox.com/), яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.

Необхідно трохи змінити розмітку картки галереї, використовуй цей шаблон.

<li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" alt="Image description" />
   </a>
</li>
===================================================================================================
Виконуй це завдання у файлах 02-lightbox.html і 02-lightbox.js. Розбий його на декілька підзавдань:
===================================================================================================
  1  Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
  2  Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs (https://cdnjs.com/libraries/simplelightbox). Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
  3  Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery. Для цього ознайомся з документацією SimpleLightbox (https://simplelightbox.com/) - насамперед секції «Usage» і «Markup».
  4  Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

========================================
========================================
Від ментора Vladyslav Apelhants в Slack 
========================================
Помилки, що часто зустрічаються в 7 д/з.
Отже, тим з вас, хто ще в процесі виконання роботи, або зробив сабміт і в очікуванні перевірки д/з ментора (можна внести правки, зробивши додатковий коміт), слід звернути увагу на наступні моменти:
Для виконання ДЗ вже є готова та робоча структура. Ми нічого в ній не міняємо.
У ТЗ все розписано покроково.
Ознайомиться з документаціями бібліотек, особливістю та необхідними параметрами для їх роботи.
Модальне вікно зі збільшеним зображенням повинне відкриватися виключно при натисканні на саме зображення (робіть перевірку на те, куди припав клік користувача, всередині функції, що відповідає за відкриття модального вікна).
Якщо ви реалізуєте додатковий функціонал у частині закриття модального вікна після натискання на клавішу ESC достатньо після перевірки на те, що була натиснута саме потрібна клавіша, викликати загальну функцію із закриття модалки. Але зверніть увагу – слухач на закриття модального вікна потрібно почистити. Простіше кажучи: модалка відкрилася – повісили слухач на закриття клавішею ESC, закриваємо модалку – чистимо слухач. Пам'ять браузера скаже вам за це дякую.
Обов'язково використовуйте об'єкт налаштувань який описаний в документації бібліотеки https://github.com/electerious/basicLightbox#options
GitHubGitHub
GitHub - electerious/basicLightbox: The lightest lightbox ever made.
=====================================================================


