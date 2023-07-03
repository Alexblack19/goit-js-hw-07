import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listEl = document.querySelector(".gallery");
console.log(listEl);

const markup = galleryItems.map((img) => {
  `<li class="gallery__item">
        <a class="gallery__link" href="${img.original}">
            <img
                class="gallery__image"
                src="small-image.jpg"
                data-source="${img.original}"
                alt="${img.description}"
            />
        </a>
    </li>`;
});

console.log(markup);

console.log(galleryItems);
