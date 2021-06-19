
/* const titulo = document.getElementById('titulo'); */
const botaoRei = document.getElementById('rei');
const botaoGolem = document.getElementById('golem');
const botaoArcher = document.getElementById('archer');

var img = document.querySelector("#imagem");


function abrirDiv(){
  document.getElementById('box_pop').style.display = 'block';
}

function fecharDiv(){
  document.getElementById('box_pop').style.display = 'none';
}

botaoRei.addEventListener('click', () => {
  img.setAttribute('src', '../static/rei_barbaro.png');
  abrirDiv()
})

botaoGolem .addEventListener('click', () => {
  img.setAttribute('src', '../static/Golem.png');
  abrirDiv()
})

botaoArcher.addEventListener('click', () => {
  img.setAttribute('src', '../static/Archer.png');
  abrirDiv()
})


