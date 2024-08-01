const images = [
    {
    preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
    },
    {
    preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
    },
    {
    preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
    },
    {
    preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
    },
    {
    preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
    },
    {
    preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
    },
    {
    preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
    },
    {
    preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
    },
    {
    preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
    },
];

const boxGallery = document.querySelector(".gallery");

const createGallery = (imagesInfo) => {
    return `
    <li class="gallery-item" data-preview="${imagesInfo.preview}">
    <a class="gallery-link" href="${imagesInfo.original}">
    <img
    class="gallery-image"
    src="${imagesInfo.preview}"
    data-source="${imagesInfo.original}"
    alt="${imagesInfo.description}"
    width="360" 
    height = "200"
    />
    </a>
    </li> `;
};

const galleryCards = images.map((imgEl) => createGallery(imgEl)).join("");

boxGallery.insertAdjacentHTML("afterbegin", galleryCards);

const galleryCardClick = (event) => {
    event.preventDefault();

    if (event.target === event.currentTarget) {
    return;
    }

    const galleryCard = event.target.closest(".gallery-item");

    const galleryCardInfo = images.find(
    (image) => image.preview === galleryCard.dataset.preview
    );

    const createModal = basicLightbox.create(`
    <img src="${galleryCardInfo.original}" width="800" height="600">
    `);

    createModal.show();
};

boxGallery.addEventListener("click", galleryCardClick);