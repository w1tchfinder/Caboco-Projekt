function abrirQuadrado(id) {

    const quadrados = document.querySelectorAll(".quadrado");

    quadrados.forEach(function(quadrado) {
        quadrado.classList.remove('visivel')
    });

    const selecionado = document.getElementById(id);
    selecionado.classList.add('visivel');
}
abrirQuadrado('perfil');