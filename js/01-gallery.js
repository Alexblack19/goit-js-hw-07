import { galleryItems } from './gallery-items.js';
// Change code below this line

const listEl = document.querySelector('.gallery');
const galleryMarkup = createImgGalleryMarkup(galleryItems);
listEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createImgGalleryMarkup(galleryImjArr) {
    return galleryImjArr
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
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    

    const bigImg = `<img
                        class="gallery__image"
                        src="${event.target.dataset.source}"
                        alt="${event.target.attributes.alt.textContent}"
                    />`;
    openModal(bigImg);    
}

function openModal(bigImg) {    
    const openModalBigImg = basicLightbox.create(`${bigImg}`);
    openModalBigImg.show();
}
