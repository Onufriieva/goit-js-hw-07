import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', onGalleryImgClick);

const galleryMarkup = createGalleryItemMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

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

