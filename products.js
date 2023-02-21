/*
Дан макет сайта https://www.figma.com/file/mnLY69cYE5cqWM5w6n5hXx/Seo-%26-Digital-Marketing-Landing-Page?node-id=190%3A1194&t=q4NMnXTnwyyTSGA6-0

В блоке Featured Items небходимо реализовать шаблон товаров.

Для этого необходимо создать json формат данных по всем товарам.

Из этого файла сформировать блок Featured Items.

Всю вёрстку остальных частей реализовывать не нужно, если у вас она была сделана на html/css можно использовать, заново создавать не требуется.
*/

const dataProducts = `[
   {
   "article": "0",
   "title": "ELLERY X M'O CAPSULE",
   "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
   "price": "$52.00",
   "img": "img/Rectangle15.jpg",
   "img2": "img/Hover.png"
   },
   {
   "article": "1",
   "title": "ELLERY X M'O CAPSULE",
   "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
   "price": "$52.00",
   "img": "img/15.1.jpg",
   "img2": "img/Hover.png"
   },
   {
   "article": "2",
   "title": "ELLERY X M'O CAPSULE",
   "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
   "price": "$52.00",
   "img": "img/Rectangle15(2).jpg",
   "img2": "img/Hover.png"
   },
   {
   "article": "3",
   "title": "ELLERY X M'O CAPSULE",
   "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
   "price": "$52.00",
   "img": "img/Rectangle15(3).jpg",
   "img2": "img/Hover.png"
   },
   {
   "article": "4",
   "title": "ELLERY X M'O CAPSULE",
   "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
   "price": "$52.00",
   "img": "img/Rectangle15(4).jpg",
   "img2": "img/Hover.png"
   },
   {
   "article": "5",
   "title": "ELLERY X M'O CAPSULE",
   "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
   "price": "$52.00",
   "img": "img/Rectangle15(5).jpg",
   "img2": "img/Hover.png"
   }
]`;

const cartSpanEl = document.querySelector('.nav__link_cart-span');
let countCart = 0; // счетчик корзины

const itemsFistBlock = document.querySelector('.items__first');

const data = JSON.parse(dataProducts);

data.forEach(element => {
// a - items__link
const itemsLinkEl =  document.createElement('a');
itemsLinkEl.href = '#';
itemsLinkEl.classList.add('items__link');

itemsFistBlock.append(itemsLinkEl);
//div - items__figure
const itemsFigureBlock = document.createElement('div');
itemsFigureBlock.classList.add('items__figure');
itemsLinkEl.append(itemsFigureBlock);
// div - items__pic
const itemsPicBlock = document.createElement('div');
itemsPicBlock.classList.add('items__pic');
itemsFigureBlock.append(itemsPicBlock);
//img - items__img
const itemsImgEl = document.createElement('img');
itemsImgEl.classList.add('items__img');
itemsImgEl.src = element.img;
itemsImgEl.alt = 'Photo1';
itemsPicBlock.append(itemsImgEl);
//img - items__img_hover
const itemsImgHoverEl = document.createElement('img');
itemsImgHoverEl.classList.add('items__img_hover');
itemsImgHoverEl.dataset.id = element.article;
itemsImgHoverEl.src = element.img2;
itemsImgHoverEl.alt = 'Photo2';
itemsPicBlock.append(itemsImgHoverEl);
//div - items__dsc
const itemsDscBlock = document.createElement('div');
itemsDscBlock.classList.add('items__dsc');
itemsFigureBlock.append(itemsDscBlock);
//  div - items__figcaption
const itemsFigcaptionBlock = document.createElement('div');
itemsFigcaptionBlock.classList.add('items__figcaption');
itemsDscBlock.append(itemsFigcaptionBlock);
//h6 - items-link__header
const h6El = document.createElement('h6');
h6El.classList.add('items-link__header');
h6El.textContent = element.title;
itemsFigcaptionBlock.append(h6El);
//p - items-link__text
const pEl = document.createElement('p');
pEl.classList.add('items-link__text');
pEl.textContent = element.description;
itemsFigcaptionBlock.append(pEl);
//p - items-link__cost
const pElem = document.createElement('p');
pElem.classList.add('items-link__cost');
pElem.textContent = element.price;
itemsFigcaptionBlock.append(pElem);

      //уменьшение количества товара
      const minusFunction = id => {
         cart[id]['count']--;
         renderCart();
         if (cart[id]['count']-1 == 0) {
            deleteFunction(id);
            return true;
         }
      }

      // удаление товара
      const deleteFunction = id => {
         //delete 
         cart[id]['count'];
         renderCart();
      }

      // вывод корзины на страницу
      itemsLinkEl.addEventListener('click', function (e) {
         e.preventDefault();
         console.log(e.target.classList);
         if(e.target.classList.contains('items__img_hover')) {
            sumFunction(e.target.dataset.id);
            countCart = countCart + 1;
            console.log(countCart);
            cartSpanEl.textContent = countCart;
         }
         if (e.target.classList.contains('items__img_hover')) {
            minusFunction(e.target.dataset.id);
            console.log(countCart);
         }
      });
});

const renderCart = () => {
   console.log(cart);
}

// увеличение количества товара
const sumFunction = id => {
   cart[id]['count']++;
   for(id in cart) {
      if (cart[id]['count'] > 0) {
         const blockEl = document.createElement('div');
         blockEl.classList.add('content-temp');
   
         const blockPicEl = document.createElement('div');
         blockPicEl.classList.add('content-temp__pic');
         blockEl.append(blockPicEl);
         
         const imgEl = document.createElement('img');
         imgEl.classList.add('img-temp');
         imgEl.src = cart[id]['img'];
         imgEl.alt = 'photo';
         blockPicEl.append(imgEl);
   
         const blockContentEl = document.createElement('div');
         blockContentEl.classList.add('content-temp__item');
         blockEl.append(blockContentEl);
         
         const h2Elem = document.createElement('h2');
         h2Elem.classList.add('content-temp__name');
         h2Elem.textContent = cart[id]['title'];
         blockContentEl.append(h2Elem);
   
         const pElem = document.createElement('p');
         pElem.classList.add('content-temp__price');
         pElem.textContent = 'Price: ';
         blockContentEl.append(pElem);
         
         const spanElem = document.createElement('span');
         spanElem.classList.add('content-temp__price_color');
         spanElem.textContent = '$ ' + cart[id]['price']; 
         pElem.append(spanElem);
   
         const p2Elem = document.createElement('p');
         p2Elem.classList.add('content-temp__color');
         p2Elem.textContent = 'Color:  ' + cart[id]['color'];
         blockContentEl.append(p2Elem);
   
         const p3Elem = document.createElement('p');
         p3Elem.classList.add('content-temp__size');
         p3Elem.textContent = 'Size: ' + cart[id]['size'];
         blockContentEl.append(p3Elem);
   
         const p4Elem = document.createElement('p');
         p4Elem.classList.add('content-temp__quantity');
         p4Elem.textContent = 'Quantity: ' ;
         blockContentEl.append(p4Elem);
   
         const inputElem = document.createElement('input');
         inputElem.classList.add('input-temp');
         inputElem.textContent = -(cart[id]['count']);
         inputElem.type = 'number';
         inputElem.value = (cart[id]['count']);
         //inputElem.min = 0;
         p4Elem.append(inputElem);
         
         const blockPicXtEl = document.createElement('div');
         blockPicXtEl.classList.add('content-temp__pic_x');
         blockEl.append(blockPicXtEl);
         
         const imgXEl = document.createElement('img');
         imgXEl.classList.add('img_x-temp');
         imgXEl.src = 'img/Vector.png';
         imgXEl.alt = 'x';
         blockPicXtEl.append(imgXEl);
   
         sectionEl.append(blockEl);
                  
         imgXEl.addEventListener('click', function (e) {
            blockEl.remove();
            countCart = countCart - 1;
           cartSpanEl.textContent = countCart;
         });
         };
      };
      renderCart();
   };












