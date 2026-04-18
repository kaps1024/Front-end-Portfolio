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
    p.style.animationDuration = Math.random() * 3 + 4 + 's';
    p.style.position = 'fixed';
    p.style.top = '-20px';
    
    p.style.color = corEscolhida;
    p.style.textShadow = `0 0 10px ${corEscolhida}`; 
    
    document.body.appendChild(p);
    
    setTimeout(() => {
        p.remove();
    }, 7000);
}

setInterval(criarParticula, 200);


