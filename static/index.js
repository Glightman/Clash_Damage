
const titulo = document.getElementById('titulo');
const botaoRei = document.getElementById('rei');
const botaoGolem = document.getElementById('golem');
const botaoArcher = document.getElementById('archer');

var img = document.querySelector("#imagem");


function abrirDiv(){
  document.getElementById('box_pop').style.display = 'block';
 /*  setTimeout(2000)
  document.getElementById('box_pop').style.opacity = 0.5;
  setTimeout(2000)
  document.getElementById('box_pop').style.opacity = 1; */
}

function fecharDiv(){
  document.getElementById('box_pop').style.display = 'none';
/*   document.getElementById('box_pop').style.opacity = 0; */
}

botaoRei.addEventListener('click', () => {
  titulo.innerHTML = 'Rei Bárbaro';
  img.setAttribute('src', '../static/rei_barbaro.png');
  abrirDiv()
})

botaoGolem .addEventListener('click', () => {
  titulo.innerHTML = 'Golem';
  img.setAttribute('src', '../static/Golem.png');
  abrirDiv()
})

botaoArcher.addEventListener('click', () => {
  titulo.innerHTML = 'Archer';
  img.setAttribute('src', '../static/Archer.png');
  abrirDiv()
})


