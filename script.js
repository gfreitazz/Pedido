document.getElementById("sim").onclick = function() {
    window.location.href = "amor.html"; // Redireciona para a página "EU TE AMO"
};

document.getElementById("nao").onclick = function() {
    const button = document.getElementById("nao");
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Gera uma nova posição aleatória para o botão
    const randomX = Math.random() * (windowWidth - button.offsetWidth);
    const randomY = Math.random() * (windowHeight - button.offsetHeight);
    
    // Move o botão para a nova posição
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
};
