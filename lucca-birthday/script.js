AOS.init({
    duration: 1000,
    once: true
});

function criarParticula() {
    const p = document.createElement('div');
    p.classList.add('particula');
    
    p.innerHTML = '<i class="fa-solid fa-star"></i>'; 
    
    const cores = ['#ffffff', '#9db1ce', '#b9cbe7', '#7a97c2']; 
    const corEscolhida = cores[Math.floor(Math.random() * cores.length)];

    p.style.left = Math.random() * 100 + 'vw';
    p.style.fontSize = Math.random() * 10 + 10 + 'px';
    
    const isMobile = window.innerWidth <= 768;
    p.style.animationDuration = isMobile ? (Math.random() * 5 + 8) + 's' : (Math.random() * 3 + 4) + 's';
    
    p.style.position = 'fixed';
    p.style.top = '-20px';
    
    p.style.color = corEscolhida;
    p.style.textShadow = `0 0 10px ${corEscolhida}`; 
    
    document.body.appendChild(p);
    
    setTimeout(() => {
        p.remove();
    }, 15000);
}

const intervalo = window.innerWidth <= 768 ? 1000 : 300;
setInterval(criarParticula, intervalo);


