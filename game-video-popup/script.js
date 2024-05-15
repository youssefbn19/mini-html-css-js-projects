const playTrailer = document.querySelector('.container button');
const popupTrailer = document.querySelector('.popup-container');
const closeTrailer = document.querySelector('.popup-container button');
const video = document.querySelector('.popup-container video');
playTrailer.addEventListener('click', () => {
    video.load();
    popupTrailer.classList.add("active");
});

closeTrailer.addEventListener('click', () => {
    video.pause();
    popupTrailer.classList.remove("active");
});
