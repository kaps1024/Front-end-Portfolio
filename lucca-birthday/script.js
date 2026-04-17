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


function estourarBalao() {
    const container = document.getElementById('container-balao');
    const historiaSection = document.getElementById('historia');
    
    container.style.opacity = '0';
    container.style.pointerEvents = 'none';
    

    const cores = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

    for (let i = 0; i < 100; i++) {
        const confete = document.createElement('div');
        confete.classList.add('confete');
        
        confete.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
        confete.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%';
        
        confete.style.left = '50%';
        confete.style.top = '150px';

        const x = (Math.random() - 0.5) * 800 + 'px'; 
        const y = (Math.random() - 0.5) * 800 + 'px';
        
        confete.style.setProperty('--x', x);
        confete.style.setProperty('--y', y);

        confete.style.animation = `confeteExplodindo ${Math.random() * 1 + 0.8}s ease-out forwards`;

        historiaSection.appendChild(confete);

        setTimeout(() => confete.remove(), 2000);
    }
}

function criarFitinha() {
    const fita = document.createElement('div');
    fita.classList.add('fitinha');

    const cores = [
        '#2979ff',
        '#ff1744',
        '#ffd600',
        '#00e676',
        '#9c27b0',
        '#9db1ce'
    ];
    
    const corEscolhida = cores[Math.floor(Math.random() * cores.length)];
    fita.style.backgroundColor = corEscolhida;

    const ladoEsquerdo = Math.random() * 20; 
    const ladoDireito = 80 + (Math.random() * 20); 
    fita.style.left = (Math.random() > 0.5 ? ladoEsquerdo : ladoDireito) + 'vw';

    fita.style.width = '8px';
    fita.style.height = Math.random() * 30 + 15 + 'px';
    fita.style.animationDuration = Math.random() * 2 + 3 + 's';
    
    fita.style.boxShadow = `0 0 10px ${corEscolhida}`;

    document.body.appendChild(fita);

    setTimeout(() => fita.remove(), 5000);
}

setInterval(criarFitinha, 150);