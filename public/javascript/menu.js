const body = document.querySelector("body");
const iconNavBookmark = document.getElementById("iconNavBookmark");
const logoBookmark = document.getElementById("logoBookmark");
const navLogoBookmark = document.getElementById("navLogoBookmark");
const accordionTitle = document.querySelectorAll('#accordionTitle');
const contendorEnlaces = document.getElementById("navEnlace");

accordionTitle.forEach((accordionTitle) => {
    accordionTitle.addEventListener('click', () => {
        const height = accordionTitle.nextElementSibling.scrollHeight;
        accordionTitle.classList.toggle('active-header');
        if (accordionTitle.classList.contains('active-header')) {
            accordionTitle.nextElementSibling.style.maxHeight = `${height}px`;
        } else {
            accordionTitle.nextElementSibling.style.maxHeight = `0rem`;
        }
    })
})

iconNavBookmark.addEventListener("click", () => {
    logoBookmark.classList.toggle("hidden")
    contendorEnlaces.classList.toggle("hidden");
    body.classList.toggle("overflow-hidden")
    if (navLogoBookmark.classList.contains('hidden')) {
        navLogoBookmark.classList.remove("hidden");
        iconNavBookmark.src = "./img/icon-close.svg";
        contendorEnlaces.style.background = "#252b46e6";
    } else {
        navLogoBookmark.classList.add("hidden")
        iconNavBookmark.src = "./img/icon-hamburger.svg";
        contendorEnlaces.style.background = "#fff";
    }
})