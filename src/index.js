import './styles/main.scss';


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

// // Скрипт для меню с городами
// document.addEventListener('DOMContentLoaded', () => {
//   var menuIcon = document.getElementById('menu-icon');
//   var dropdownMenu = document.getElementById('dropdown-menu');
//   const overlay = document.querySelector('.overlay');

//   menuIcon.addEventListener('click', () => {
//     // Переключаем видимость меню и фона
//     if (dropdownMenu.classList.contains('hidden')) {
//       dropdownMenu.classList.remove('hidden');
//       dropdownMenu.classList.add('visible');
//       overlay.classList.add('visible'); // Показываем затемнение
//     } else {
//       dropdownMenu.classList.remove('visible');
//       dropdownMenu.classList.add('hidden');
//       overlay.classList.remove('visible'); // Скрываем затемнение
//     }

//     // Переключаем класс для поворота иконки
//     menuIcon.classList.toggle('rotated');
//   });

//   // Закрытие меню при клике вне области
//   overlay.addEventListener('click', () => {
//     dropdownMenu.classList.remove('visible');
//     dropdownMenu.classList.add('hidden');
//     overlay.classList.remove('visible');
//     menuIcon.classList.remove('rotated');
//   });
// });
document.addEventListener('DOMContentLoaded', () => {
const dropdownButton = document.getElementById('menu-icon');
const desktopMenu = document.querySelector('.office__town');
const mobileMenu = document.querySelector('.office__town-mobile');
const overlay = document.querySelector('.overlay');

dropdownButton.addEventListener('click', () => {
    // Проверяем размер экрана
    if (window.innerWidth >= 768) {
        // Десктопное меню
        desktopMenu.classList.remove('hidden');
        desktopMenu.classList.add('visible');
        overlay.classList.add('visible');

    } else {
        // Мобильное меню
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('visible');
        overlay.classList.add('visible');    
    }

    dropdownButton.classList.toggle('rotated'); 

    overlay.addEventListener('click', () => {
      desktopMenu.classList.remove('visible');
      desktopMenu.classList.add('hidden');
      mobileMenu.classList.remove('visible');
      mobileMenu.classList.add('hidden');
      overlay.classList.remove('visible');
      dropdownButton.classList.remove('rotated');
      });

    
   });

   

  })
  



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

// document.addEventListener('DOMContentLoaded', () => {
//   const menuIconMobile = document.getElementsByClassName('menu-icon-dropdown');
//   const dropdownMenuMobile = document.getElementById('menu-dropdown');
  

//   menuIconMobile.addEventListener('click', () => {
//     // Переключаем видимость меню и фона
//     if (dropdownMenuMobile.classList.contains('hidden')) {
//       dropdownMenuMobile.classList.remove('hidden');
//       dropdownMenuMobile.classList.add('visible');
      
//     } else {
//       dropdownMenuMobile.classList.remove('visible');
//       dropdownMenuMobile.classList.add('hidden');
      
//     }

//     // Переключаем класс для поворота иконки
//     menuIconMobile.classList.toggle('rotated');
//   });

//   // Закрытие меню при клике вне области
//   overlay.addEventListener('click', () => {
//     dropdownMenuMobile.classList.remove('visible');
//     dropdownMenuMobile.classList.add('hidden');
//     menuIconMobile.classList.remove('rotated');
//   });
// });