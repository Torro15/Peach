import './styles/main.scss';

// Скрипт для Слайдера
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

// Инициализация Swiper
const swiper = new Swiper('.mySwiper', {
  // Параметры Swiper

  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      // Генерируем div для каждой полосы пагинации
      return '<span class="' + className + ' custom-bullet"></span>';
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  },
});


// Скрипт для меню с городами
document.addEventListener('DOMContentLoaded', () => {
  const dropdownButton = document.getElementById('menu-icon');
  const desktopMenu = document.querySelector('.office__town');
  const mobileMenu = document.querySelector('.office__town-mobile');
  const overlay = document.querySelector('.overlay');

  dropdownButton.addEventListener('click', () => {
    // Проверяем размер экрана
    if (window.innerWidth >= 768) {
      // Десктопное меню
      if (desktopMenu.classList.contains('hidden')) {
        desktopMenu.classList.remove('hidden');
        desktopMenu.classList.add('visible');
        overlay.classList.add('visible'); // Показываем затемнение
      } else {
        desktopMenu.classList.remove('visible');
        desktopMenu.classList.add('hidden');
        overlay.classList.remove('visible'); // Скрываем затемнение
      }

    } else {
      // Мобильное меню
      if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('visible');
        overlay.classList.add('visible'); // Показываем затемнение
      } else {
        mobileMenu.classList.remove('visible');
        mobileMenu.classList.add('hidden');
        overlay.classList.remove('visible'); // Скрываем затемнение
      }
    }

    dropdownButton.classList.toggle('rotated');

    overlay.addEventListener('click', () => {

      dropdownButton.classList.remove('rotated');
    });
  });
});


// Скрипт для карт
document.addEventListener('DOMContentLoaded', () => {
  const cityItems = document.querySelectorAll('.city-item');
  const cityMaps = document.querySelectorAll('.office__img');

  cityItems.forEach((item) => {
    item.addEventListener('click', () => {
      const city = item.getAttribute('data-city');
      const map = document.getElementById(`${city}-map`);

      // Убираем активный класс у всех городов
      cityItems.forEach((el) => el.classList.remove('active'));

      // Добавляем активный класс на кликнутый город
      item.classList.add('active');

      // Скрываем все карты
      cityMaps.forEach((mapEl) => mapEl.classList.remove('visible'));
      cityMaps.forEach((mapEl) => mapEl.classList.add('hidden'));

      // Показываем карту выбранного города
      map.classList.remove('hidden');
      map.classList.add('visible');
    });
  });
});


// Скрипт для блоков с направлениями
const blocks = document.querySelectorAll('.expandableBlock');
blocks.forEach(block => {
  const toggleButton = block.querySelector('.icon-menu');
  const additionalText = block.querySelector('.additionalText');

  toggleButton.addEventListener('click', function () {
    // Если блок развернут, свернуть его
    if (block.style.height === '240px') {
      block.style.height = '60px';
      toggleButton.style.transform = 'rotate(0deg)';
      additionalText.style.display = 'none';
    } else {
      // Развернуть блок
      block.style.height = '240px';
      toggleButton.style.transform = 'rotate(180deg)';
      additionalText.style.display = 'block';
    }
  });
});


// Скрипт для списков мобильного меню
function toggleList(header) {
  const content = header.nextElementSibling; // Получаем следующий элемент (список)
  const button = header.querySelector('.button-mobile'); // Получаем кнопку

  // Переключаем активный класс для заглавной строки
  header.classList.toggle('active');

  // Переключаем активный класс для кнопки
  button.classList.toggle('rotated');

  // Переключаем видимость списка
  if (content.classList.contains('visible')) {
      content.classList.remove('visible'); // Скрыть список
  } else {
      content.classList.add('visible'); // Показать список
  }
}

document.querySelectorAll('.office__town-main').forEach(header => {
  header.addEventListener('click', () => toggleList(header));
}); 
