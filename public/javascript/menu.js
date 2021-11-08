const menu = document.querySelector('#menu');
const accordion = document.querySelector('#accordion');
const accordionTitle = document.querySelectorAll('#accordionTitle');

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

/* accordion.addEventListener('click', () => {
    menu.classList.toggle('hidden')
}) */