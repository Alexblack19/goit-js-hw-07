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

listEl.addEventListener('click', onClickOpenBigImg);

function onClickOpenBigImg(event) {
    event.preventDefault();
    if (event.target.className !== 'gallery__image') {
        return;
    }
    const bigImg = event.target.dataset.source;
    openModal(bigImg);
}

function openModal(bigImg) {
    const instance = basicLightbox.create(`
    ${bigImg}
`);
    instance.show();
}
