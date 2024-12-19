// Rotating Headline
const words = ['Elegance', 'Minimalism', 'Comfort'];
let wordIndex = 0;
const dynamicWord = document.getElementById('dynamic-word');

function changeWord() {
    wordIndex = (wordIndex + 1) % words.length;
    dynamicWord.textContent = words[wordIndex];
}

setInterval(changeWord, 3000); // Change word every 3 seconds

// USP Carousel
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function showItem(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

function nextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
}

function prevItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
}

// Initial display
showItem(currentIndex);

// Auto-rotate carousel every 5 seconds
setInterval(nextItem, 5000);

// Event listeners for navigation buttons
prevButton.addEventListener('click', prevItem);
nextButton.addEventListener('click', nextItem);
