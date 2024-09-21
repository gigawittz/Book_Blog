const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg'
];

let currentIndex = 0;
const carouselContainer = document.querySelector('.carousel-container');

// Add duplicates for infinite effect
images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    carouselContainer.appendChild(imgElement);
});

function updateImage() {
    const translateX = -currentIndex * (100 / (images.length + images.length)); // Adjust for total images including duplicates
    carouselContainer.style.transform = `translateX(${translateX}%)`; // Slide the images
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});

// Initially set the images in the container
images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    carouselContainer.appendChild(imgElement);
});
