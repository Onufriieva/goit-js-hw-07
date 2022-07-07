import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Создай галерею с возможностью клика по её элементам и просмотра полноразмерного 
// изображения в модальном окне. Посмотри демо видео работы галереи.

// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
//  <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
//  </div> 
// Реализация делегирования на div.gallery и получение url большого изображения.

// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй
//  CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.

// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.


// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую
//  разметку модального окна с изображением из примеров библиотеки basicLightbox.

// Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь
//  будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.

// Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание клавиатуры было только
//  пока открыто модальное окно. 
// У библиотеки basicLightbox есть метод для программного закрытия модального окна.



const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', onGalleryImgClick);

const galleryMarkup = createGalleryItemMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// const image = document.querySelector("img");
// console.log(image.dataset.source);


console.log(createGalleryItemMarkup(galleryItems))


function createGalleryItemMarkup(cards) {
    return cards.map(({ description, original, preview }) => {
    return `
    <div class="gallery__item">
    <a 
     class="gallery__link" 
     href="${original}">
      <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt= "${description}"
      />
    </a>
   </div>`
    }).join(' ');
} 


function onGalleryImgClick(event){
event.preventDefault();
const isGalleryImg = event.target.classList.contains('gallery__image');
if(!isGalleryImg){

return;
};


const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
instance.show(() => window.addEventListener('keydown', onKeyPress));



function onKeyPress(event) {
    const escKey = 'Escape';

    if (event.code === escKey) {
        instance.close(() => window.removeEventListener('keydown', onKeyPress));
        console.log(event.code);
        return;
    }
    return;
};
};
