function sortear() {
  let quantidadeEscrita = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);
//como essas variáveis são obrigatoriamentes números, usa parseINT para gerar número inteiro
if(de >= ate) {
    alert('O mínimo deve ser menor que o máximo!')
    return;
}
if(quantidadeEscrita > (ate - de + 1)){
    alert('Informamos que a quantidade de números sorteados excede o intervalo dos números. Tente novamente com outros valores!');
    return;
}
  let listaSorteados = [];
  //let qtdNumerosSorteados = 0;
  let numeroSorteado;
  while(listaSorteados.length < quantidadeEscrita) {
       numeroSorteado = gerarNumeroRandom(de, ate);
       //verificar se o número sorteado irá se repetir
       if(!listaSorteados.includes(numeroSorteado)){
        listaSorteados.push(numeroSorteado);
        //.includes para verificar se minha lista sorteou um número repetido. com isso, utilizo o .push em seguida para adicionar os novos números sorteados,
        //que são diferentes dos anteriores, à lista.
       }
       //qtdNumerosSorteados++ (n preciso mais contabilizar assim pois a condicional da while e o if já fizeram isso)
  }

  let mensagemResultado = document.getElementById('resultado');
  //sem .value pois agora eu irei colocar a info no site(texto) e n pegarei a info que o usuário colocou
  mensagemResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaSorteados}  </label>`;
  //.textContent quando for p inserir ou modificar um texto simples no HTML
  alterarStatusBotaoReiniciar();
}

function gerarNumeroRandom(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotaoReiniciar() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if(botaoReiniciar.classList.contains('container__botao-desabilitado')) {
       botaoReiniciar.classList.remove('container__botao-desabilitado');
       botaoReiniciar.classList.add('container__botao');
    }else {
       botaoReiniciar.classList.remove('container__botao');
       botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}
function reiniciar() {
document.getElementById('quantidade').value = '';
document.getElementById('de').value = '';
document.getElementById('ate').value = '';
document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
alterarStatusBotaoReiniciar();
}