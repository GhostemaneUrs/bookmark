const body = document.querySelector('body');
const iconNavBookmark = document.getElementById('iconNavBookmark');
const logoBookmark = document.getElementById('logoBookmark');
const navLogoBookmark = document.getElementById('navLogoBookmark');
const accordionTitle = document.querySelectorAll('#accordionTitle');
const contenedorEnlaces = document.getElementById('navEnlace');

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

iconNavBookmark.addEventListener('click', () => {
    logoBookmark.classList.toggle('hidden')
    contenedorEnlaces.classList.toggle('hidden');
    body.classList.toggle('overflow-hidden')
    if (navLogoBookmark.classList.contains('hidden')) {
        navLogoBookmark.classList.remove('hidden');
        iconNavBookmark.src = './img/icon-close.svg';
        contenedorEnlaces.style.background = '#252b46e6';
    } else {
        navLogoBookmark.classList.add('hidden')
        iconNavBookmark.src = './img/icon-hamburger.svg';
        contenedorEnlaces.style.background = '#fff';
    }
})

const closeMenu = () => {
    if (!navLogoBookmark.classList.contains('hidden')) {
        logoBookmark.classList.toggle('hidden')
        contenedorEnlaces.classList.toggle('hidden');
        body.classList.toggle('overflow-hidden')
        navLogoBookmark.classList.add('hidden')
        iconNavBookmark.src = './img/icon-hamburger.svg';
        contenedorEnlaces.style.background = '#fff';
    }
}

const validateEmail = (email) => {
    const expresionRegular = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValid = expresionRegular.test(email)
    let emailSend = document.querySelector('#sendEmail').value
    console.log(emailSend)
    if (emailValid === true) {
        limpiarInput()
        Swal.fire({
            icon: 'success',
            title: 'Your email has been sent, we will contact you',
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
        limpiarInput()
    }
}

const limpiarInput = () => {
    const emailSendContent = document.getElementById('emailUser').value = '';
}
