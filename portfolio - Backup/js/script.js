/*========= tornar menu hamburguer em X =========*/
const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if(menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

/*========= Toggle Read More em Serviços =========*/
document.querySelectorAll('.services-box .btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const serviceBox = this.closest('.services-box');
        
        // Se outro bloco estiver aberto, fecha ele
        document.querySelectorAll('.services-box.active').forEach(openBox => {
            if (openBox !== serviceBox) {
                openBox.classList.remove('active');
            }
        });
        
        // Alterna a classe 'active' para mostrar/esconder o texto extra
        serviceBox.classList.toggle('active');
    });
});

/*========= Fechar menu hamburguer ao clicar fora dele =========*/
window.addEventListener('click', (event) => {
    const navResponsive = document.querySelector('.nav-responsive');
    const menuHamburguer = document.querySelector('.menu-hamburguer');

    // Se o clique for fora do menu hambúrguer e do nav, feche o menu
    if (!navResponsive.contains(event.target) && !menuHamburguer.contains(event.target)) {
        navResponsive.style.display = 'none';
        menuHamburguer.classList.remove('change');
    }
});
