import { galleryItems } from './gallery-items.js';
// Change code below this line
//*===========
//* Варіант 1
//*===========
// const listEl = document.querySelector('.gallery');
// const galleryMarkup = createImgGalleryMarkup(galleryItems);
// listEl.insertAdjacentHTML('beforeend', galleryMarkup);

// function createImgGalleryMarkup(galleryImjArr) {
//     return galleryImjArr
//         .map(({ original, preview, description }) => {
//             return `<li class="gallery__item">
//                         <a class="gallery__link" href="${original}">
//                             <img
//                                 class="gallery__image"
//                                 src="${preview}"
//                                 data-source="${original}"
//                                 alt="${description}"
//                             />
//                         </a>
//                     </li>`;
//         })
//         .join('');
// }

// listEl.addEventListener('click', onClick);

// function onClick(event) {
//     event.preventDefault();
//     if (!event.target.classList.contains('gallery__image')) {
//         return;
//     }

//     const bigImg = `<img src="${event.target.dataset.source}"/>`;
//     openModal(bigImg);
// }

// function openModal(bigImg) {
//     const instance = basicLightbox.create(`${bigImg}`);
//     instance.show();
// }
//================================================
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

// document.addEventListener('keydown', onKeydownEsc);

// function onKeydownEsc(event) {
//     if (event.code !== 'Escape') {
//         return;
//     }
//     console.log('YES');
//     closeModal();
// }

// function closeModal() {
//     console.log('Hello');
//     instance.close();
//     document.removeEventListener('keydown', onClickClose);
// }

//*===========
//* Варіант 2
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

listEl.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    
    openModal(event.target);
}

function openModal(bigImg) {
    const newSrc = bigImg.dataset.source;
    bigImg.setAttribute('src', newSrc);
    const bigImg2 = bigImg.outerHTML;
    const instance = basicLightbox.create(`${bigImg2}`);
    instance.show();
}

//=====================================
//=====================================
//=====================================
const pEl = document.createElement('p');
pEl.textContent = 'Qwertrtyuyeyiuy';
pEl.classList = 'text';
console.log('Елемент', pEl);
const text = pEl.outerHTML;
console.log('Строка', text);
listEl.insertAdjacentHTML('beforeend', text); // text це string
// listEl.insertAdjacentElement('beforeend', pEl); // pEl це елемент
listEl.append(pEl); // pEl це елемент
// в консолі <p>Qwertrtyuyeyiuy</p> це не строка
// Як перетворити pEl в string не прописуючі через шаблоний рядок
