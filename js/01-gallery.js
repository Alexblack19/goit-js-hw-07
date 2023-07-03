import { galleryItems } from './gallery-items.js';
// Change code below this line

const listEl = document.querySelector('.gallery');
const galleryMarkup = createImgGalleryMarkup(galleryItems);
listEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createImgGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `<li class="gallery__item">
                        <a class="gallery__link" href="${original}">
                            <img
                                class="gallery__image"
                                src="${preview}"
                                data-source="${original}"
                                alt="${description}"
                            />
                        </a>
                    </li>`;
        })
        .join('');
}

listEl.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    if (event.target.className !== 'gallery__image') {
        return;
    }
    openModal(event.target);
}

function openModal(image) {
    console.log(image);
}
