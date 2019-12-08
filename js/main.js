const data = require('./data');

const topNav = document.querySelector('.top-navigation');
const searchInput = document.querySelector('#mainSearchInput');
const navOverlay = document.querySelector('.nav-overlay');
const slider = document.querySelector('.main-carousel');
const searchToggleBtns = document.querySelectorAll('[toggle-search]');
const navToggleBtns = document.querySelectorAll('[toggle-nav]');


const toggleSearch = () => {
    topNav.classList.contains('alt-nav') ?
        searchInput.setAttribute('placeholder', 'Search books, genres, authors, etc.') :
        searchInput.setAttribute('placeholder', 'Search')

    topNav.classList.toggle('alt-nav');
}

const toggleNav = () => {
    document.body.classList.toggle('open-drawer');
}

const renderCarousel = () => {
    const fragment = document.createDocumentFragment();

    data.books.forEach(book => {
        const div = document.createElement('div'); 
        div.classList.add('carousel-cell');
        div.innerHTML = `
            <img src="${book.image}" alt="${book.name} Book Cover">
        `
        fragment.appendChild(div); 
    })
    
    slider.appendChild(fragment);
};


// Event Listeners
searchToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleSearch);
});

navToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleNav);
});

navOverlay.addEventListener('click', toggleNav);


//Function Calls
renderCarousel();


//Configurations
var flkty = new Flickity( '.main-carousel', {
    cellAlign: 'left',
    contain: true,
    draggable: true,
    wrapAround: true,
    arrowShape: { 
        x0: 10,
        x1: 60, y1: 50,
        x2: 60, y2: 40,
        x3: 60
    }
});