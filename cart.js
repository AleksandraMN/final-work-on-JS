/* 12 урок:
Дан макет сайта https://www.figma.com/file/mnLY69cYE5cqWM5w6n5hXx/Seo-%26-Digital-Marketing-Landing-Page?node-id=4203%3A2&t=q4NMnXTnwyyTSGA6-0

На предыдущем уроке вы сформировали данные из раздела "Товары".

При клике на кнопку add to cart у товара под блоком с акциями появляется раздел Cart items.

В разделе Cart items появляются товары, добавленные в корзину,

При клике на крестик, товар удаляется из из раздела корзины, если удалить все товары, раздел полностью пропадает. */

let cart = {
   '0': {
      "title": "ELLERY X M'O CAPSULE",
      "count": 0,
      "price": 52,
      "currency": "USD",
      "color": "Blue",
      "size": "M",
      "img": "img/Rectangle15.jpg",
   },
   '1': {
      "title": "ELLERY X M'O CAPSULE",
      "count": 0,
      "price": 52,
      "currency": "USD",
      "color": "Black",
      "size": "S",
      "img": "img/15.1.jpg",
   },
   '2': {
      "title": "ELLERY X M'O CAPSULE",
      "count": 0,
      "price": 52,
      "currency": "USD",
      "color": "Blue",
      "size": "XXl",
      "img": "img/Rectangle15(2).jpg",
   },
   '3': {
      "title": "ELLERY X M'O CAPSULE",
      "count": 0,
      "price": 52,
      "currency": "USD",
      "color": "Yellow",
      "size": "XL",
      "img": "img/Rectangle15(3).jpg",
   },
   '4': {
      "title": "ELLERY X M'O CAPSULE",
      "count": 0,
      "price": 52,
      "currency": "USD",
      "color": "Blue",
      "size": "M",
      "img": "img/Rectangle15(4).jpg",
   },
   '5': {
      "title": "ELLERY X MO CAPSULE",
      "count": 0,
      "price": 52,
      "currency": "USD",
      "color": "Green",
      "size": "L",
      "img": "img/Rectangle15(5).jpg",
   }
};
const sectionEl = document.querySelector('.section');
