const button1 = document.querySelector('#button1 > button');
const letra_botao = document.querySelector('#button1 >button > a')
const fundo = document.getElementById('imagem_fundo');
const palavra = document.getElementById('palavra');
const man = document.getElementById('man')

function trocarPagina(pagina) {
     fundo.style.opacity = 0;

    setTimeout(() =>{
  if (pagina === "pagina1") {
    fundo.src = "/assets/imagem1.jpg";
    button1.style.borderColor = "#CE1123";
    letra_botao.style.color = "#CE1123";
    palavra.textContent = 'Ficar?';
    man.style.webkitTextStroke = "2px #000000ff";
    man.style.color = '#f0f8ff09'

  } 
  else if (pagina === "pagina2") {
    fundo.src = "/assets/pagina2.jpg";
    button1.style.borderColor = "#000000ff";
    letra_botao.style.color = "#000000ff";
    palavra.textContent = 'Lutar?';
    man.style.webkitTextStroke = "2px #000000ff";
    man.style.color = '#f0f8ff09'
  } 
  else if (pagina === "pagina3") {
    fundo.src = "/assets/pagina3.jpg";
    button1.style.borderColor = "#f0f8ffbb";
    letra_botao.style.color = "#f0f8ffe0";
    palavra.textContent = 'Sonhar?';
    man.style.webkitTextStroke = "2px #000000ff";
    man.style.color = '#ce11243b'
  }

    fundo.style.opacity = 1;
}, 300);
}