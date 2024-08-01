let paragrafo = document.getElementsByName('nomeQualquer')
    paragrafo[0].innerText = 'test'
    paragrafo[1].innerText = 'test2'

let paragrafo2 = document.getElementsByClassName('minhaClass');
paragrafo2[0].innerText = 'escrevendo no html'

let h1 = document.querySelector('h1');

let paragrafo3 = document.querySelector('#paragrafo');
let texto = document.querySelector('.texto');

h1.innerText = 'Bom dia'
paragrafo3.innerText = 'test3'
texto.innerText = 'Deu certo'

let paragrafos = document.querySelectorAll('.minhaClasse')
paragrafos[0].innerText = 'h1'
paragrafos[1].innerText = 'p'

