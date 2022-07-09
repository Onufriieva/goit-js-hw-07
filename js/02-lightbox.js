import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


// Сделай такую же галерею как в первом задании, но используя библиотеку SimpleLightbox, 
// которая возьмет на себя обработку кликов по изображениям, открытие и закрытие модального окна,
//  а также пролистывание изображений при помощи клавиатуры. Посмотри демо видео
//   работы галереи с подключенной библиотекой.


// Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. 
// Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt.
//  Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.


const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemMarkup(galleryItems);
const link = document.querySelector('.gallery__item');
console.log(link)

function createGalleryItemMarkup(cards) {
    return cards.map(({ description, original, preview }) => {
    return `
    <li class="gallery__item">
    <a class="gallery__item" 
    href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}"/>
  </a>
   </li>`
    }).join(' ');
} 

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

let lightbox = new SimpleLightbox('.gallery__item', { 
    captionPosition: 'bottom',
    // captionSelector: 'img',
    captionsData: 'alt',
    // animationSpeed:	250,
    // fadeSpeed:	250,
    // docClose: true,
    // nav: true,
 });

 console.log(lightbox)