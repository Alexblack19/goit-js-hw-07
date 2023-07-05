import { galleryItems } from './gallery-items.js';
// Change code below this line
//*===========
//* Варіант 1
//*===========
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

listEl.addEventListener('click', onImgClick);

function onImgClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    const bigImg = `<img src="${event.target.dataset.source}"/>`;
    openModal(bigImg);
}

function openModal(bigImg) {
    const modal = basicLightbox.create(`${bigImg}`);
    modal.show();
    return modal;
}


// =================================
// instance - нужно переименовать
// ================================================
// const visibleModal = basicLightbox.visible();
//     console.log(visibleModal);
// if (visibleModal) {
//     document.addEventListener('keydown', event => {
//         if (event.code === 'Escape') {
//             console.log('YES');
//             closeModal();
//         }
//     });
// }

document.addEventListener('keydown', onKeydownEsc);

function onKeydownEsc(event) {
    if (event.code !== 'Escape') {
        return;
    }
    console.log('YES');
    closeModal();
}

function closeModal() {
    console.log('Hello');
    const modal = openModal()
    console.log(modal);
    modal.close();
    document.removeEventListener('keydown', onKeydownEsc);
}
