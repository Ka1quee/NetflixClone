window.addEventListener('scroll', function() {
    var header = document.querySelector('.cabecalho');
    if (window.scrollY > 0) {
        header.classList.add('cabecalho-com-fundo');
    } else {
        header.classList.remove('cabecalho-com-fundo');
    }
});