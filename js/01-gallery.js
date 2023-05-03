import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galleryMarkUp = document.querySelector('.gallery');

const galleryEl = galleryItems
    .map(({ preview, description, original }) => 
    `<li class="gallery__item" style="box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)">
        <a class="gallery__link" href="${original}" style="box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            style="box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)"
            />
        </a>
    </li>`).join('');

galleryMarkUp.insertAdjacentHTML('beforeend', galleryEl)

galleryMarkUp.addEventListener('click', onImgClick)

function onImgClick(evt) 
{
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') 
    {
        return;
    }

    const modal = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height="600">`,

        {   onShow: () => window.addEventListener('keydown', onEscKeyPress),
            onClose: () => window.removeEventListener('keydown', onEscKeyPress),
        }
    );
    
    modal.show();

    function onEscKeyPress(evt) 
    {   
        if (evt.code === "Escape") 
        {
            modal.close();
        }
    }
}



