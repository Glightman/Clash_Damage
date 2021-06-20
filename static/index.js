
/* const titulo = document.getElementById('titulo'); */
const botaoRei = document.getElementById('rei');
const botaoGolem = document.getElementById('golem');
const botaoArcher = document.getElementById('archer');
const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const botao3 = document.getElementById('botao3');
const voltar = document.getElementById('voltar');
const calcular = document.getElementById('calcular');
const nomeArma = document.getElementById('titulo_armas');

var img = document.querySelector("#imagem");


function abrirDiv(){
  document.getElementById('box_pop').style.display = 'block';
}

function fecharDiv(){
  document.getElementById('box_pop').style.display = 'none';
}

function destacarEspada(){
  document.getElementById('botao2').style.display = 'none'
  document.getElementById('botao3').style.display = 'none'
  document.getElementById('calcular').style.float = 'right'
  document.getElementById('calcular').style.marginLeft = '0px'
  document.getElementById('voltar').style.display = 'inline'
}
function destacarCanhao(){
  document.getElementById('botao1').style.display = 'none'
  document.getElementById('botao3').style.display = 'none'
  document.getElementById('calcular').style.float = 'right'
  document.getElementById('calcular').style.marginLeft = '0px'
  document.getElementById('voltar').style.display = 'inline'
}
function destacarBola(){
  document.getElementById('botao2').style.display = 'none'
  document.getElementById('botao1').style.display = 'none'
  document.getElementById('calcular').style.float = 'right'
  document.getElementById('calcular').style.marginLeft = '0px'
  document.getElementById('voltar').style.display = 'inline'
}
function voltarArmas(){
  document.getElementById('botao3').style.display = 'inline'
  document.getElementById('botao2').style.display = 'inline'
  document.getElementById('botao1').style.display = 'inline'
  document.getElementById('calcular').style.float = 'unset'
  document.getElementById('calcular').style.marginLeft = '180px'
  document.getElementById('voltar').style.display = 'none'
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

botao1.addEventListener('click', () => {
  nomeArma.innerHTML = 'Espada'
  destacarEspada()
})
botao2.addEventListener('click', () => {
  nomeArma.innerHTML = 'Canhão'
  destacarCanhao()
})
botao3.addEventListener('click', () => {
  nomeArma.innerHTML = 'Bola de Fogo'
  destacarBola()
})

voltar.addEventListener('click', () => {
  voltarArmas()
  nomeArma.innerHTML = 'Escolha uma arma para atacar'
})


