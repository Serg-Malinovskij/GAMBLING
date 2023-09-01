"use strict"

// ================================================================================
// menu-burger
const iconBurger = document.querySelector('.menu__icon');  // получаем в константу иконку меню-бургер
const headerMenu = document.querySelector('.header__menu');  // получаем в константу весь блок с меню
const menuItem = document.querySelectorAll('.menu__item');  // получаем в константу все пункты меню

iconBurger.addEventListener('click', function (e) {
  iconBurger.classList.toggle('menu-open');
  headerMenu.classList.toggle('_open');
  document.body.classList.toggle('_lock');
}
);

//  проходим циклом forEach по пунктам меню и назначаемм каждому по клику обработчик, который срабатывает 
// при открытом мобильном меню. Обработчик закрывает мобильное меню и возвращает иконку бургера-меню в начальное "закрытое" положение
// забираем у body класс ._lock(запрещает прокрутку)
menuItem.forEach(function (item) {
  item.addEventListener('click', function (e) {
    if (headerMenu.closest('._open')) {
      headerMenu.classList.remove('_open');
      iconBurger.classList.remove('menu-open');
      document.body.classList.remove('_lock');
     }
  })
})

