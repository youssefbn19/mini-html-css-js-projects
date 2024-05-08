const progress = document.querySelector(".scroll-container .progress");
const docElement = document.documentElement;
window.addEventListener("scroll", () => {
    progress.style.width = `${(docElement.scrollTop / (docElement.scrollHeight - docElement.clientHeight)) * 100}%`;;
});