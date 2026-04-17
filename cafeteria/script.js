if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      grabCursor: true,
    });
}

const links = document.querySelectorAll('nav a');
const currentPath = window.location.pathname.split("/").pop();
const cameFromAnotherPage = document.referrer.includes(window.location.hostname);

links.forEach(link => {
    const href = link.getAttribute('href');
    
    if (cameFromAnotherPage) {
        if (href && currentPath === href) {
            link.classList.add('selected');
        } else if ((currentPath === "" || currentPath === "index.html") && href === "index.html") {
            link.classList.add('selected');
        }
    }

    link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('selected'));
        this.classList.add('selected');
    });
});

document.getElementById('year').textContent = new Date().getFullYear();

const menuBotao = document.querySelector('#mobile-menu');
const menuLista = document.querySelector('.nav-menu');

menuBotao.addEventListener('click', () => {
    menuLista.classList.toggle('active');
});
