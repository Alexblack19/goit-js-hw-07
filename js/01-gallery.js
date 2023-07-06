import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createImgGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
galleryEl.addEventListener('click', onImgClick);

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

function onImgClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    modalOpen(event);
}

function modalOpen(event) {
    const originalImg = `<img src="${event.target.dataset.source}"/>`;
    const modal = basicLightbox.create(`${originalImg}`);
    modal.show();
    modalClose(modal);
}

function modalClose(modal) {
    document.addEventListener('keydown', onEscKeydown);
    function onEscKeydown(event) {
        if (event.code !== 'Escape') {
            return;
        }
        modal.close();
        document.removeEventListener('keydown', onEscKeydown);
    }
}
