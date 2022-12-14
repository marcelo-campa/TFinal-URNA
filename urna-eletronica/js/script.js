const rVotoPara = document.querySelector('.esquerda .rotulo.r1 span')
const rCargo = document.querySelector('.esquerda .rotulo.r2 span')
const numeros = document.querySelector('.esquerda .rotulo.r3')
const rDescricao = document.querySelector('.esquerda .rotulo.r4')
const rMensagem = document.querySelector('.esquerda .rotulo.r4 .mensagem')
const rNomeCandidato = document.querySelector('.esquerda .rotulo.r4 .nome-candidato')
const rPartidoPolitico = document.querySelector('.esquerda .rotulo.r4 .partido-politico')
const rNomeVice = document.querySelector('.esquerda .rotulo.r4 .nome-vice')
const rRodape = document.querySelector('.tela .rodape')

const rCandidato = document.querySelector('.direita .candidato')
const rVice = document.querySelector('.direita .candidato.menor')

var votos = []
var etapaAtual = 0
var etapas = {}
var numeroDigitado = ''
var votoEmBranco = false
var input
/**
 * Variável para guardar objeto de candidatos
 */
politicos = {}
/**
 * Arrays para guardar os cargos possíveis e o tamanho de seus números
 */
arraycargos = []
arraytamcargo = []


/**
 * Funcao que envia ao banco o candidato no qual a quantidade de votos deverá ser incrementada
 * @param {id} key
 */
function incrementaVotoCandidato(id) {
  let url = 'js\\insert.php';
  let request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-Type','application/json;charset=UTF-8');
  console.log('incrementando o id do candidato' + id);
  request.send(JSON.stringify({id:id}));
}


/**
 * Request que solicita ao backend os resultados da eleicao
 * Apos concluida chama a função que imprime na tela os resultados
 */
function retrieveEleitos(){
  let url = 'js\\getElected.php';
  let request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.setRequestHeader('Content-Type','application/json;charset=UTF-8');
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status == "200") {
        botaoResult(JSON.parse(request.responseText));
    }
  };
  request.send();
}


/**
 * Funcao responsavel por imprimir na tela os resultados da eleicao
 * @param {jsonResult} key
 * recebe um json com os resultados da eleicao
 */
function botaoResult(jsonResult){
  var resultado = '<BR>';
  var candidato;
  console.log(jsonResult)
  if(jsonResult.length > arraycargos.length){
    resultado+= "Houve empate <BR>"
  }
  for(index in jsonResult){
    candidato = jsonResult[index];
    console.log(candidato);
    resultado += candidato['cargo'].toUpperCase() + ": " + candidato['nome'] + ", do partido " + candidato['partido'];
    resultado += candidato['nome_vice'] == null ? '' : ', de vice: ' + candidato['nome_vice'] + ' do partido ' + candidato['vice_partido'];
    resultado += ' foi eleito com total de '+ candidato['total'] +' votos;<BR><BR>';
  }
  document.getElementById("Resultados").innerHTML = resultado;
}

/**
 * Requisição que solicita ao backend a lista de todos os candidatos
 * E após completa chama as funções que iniciam a urna
 */
function retrieveCandidatos(){
  let url = 'js\\getCandidatos.php';
  let request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.setRequestHeader('Content-Type','application/json;charset=UTF-8');
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status == "200") {
      getCandidatos(request.responseText);
    }
  };
  request.send();
}

//Popula o array de candidatos e começa as etapas da urna
function getCandidatos(response){
  input =  JSON.parse(response);
  populaArrayCargos(input);
  comecarEtapa()
}

//Seleciona cargos possíveis
function populaArrayCargos(allCandidatos){
  for (i in allCandidatos){
    if (!arraycargos.includes(allCandidatos[i]['cargo'])){
      arraycargos.push(allCandidatos[i]['cargo'])
      arraytamcargo.push(allCandidatos[i]['numero_digitos'])
    }
  }
}

//Inicia a request que retorna os candidatos e inicia a urna
retrieveCandidatos();


window.onload = () => {
  let btns = document.querySelectorAll('.teclado--botao')
  for (let btn of btns) {
    btn.onclick = () => {
      clicar(btn.innerHTML)
    }
  }

  document.querySelector('.teclado--botao.branco').onclick = () => branco()
  document.querySelector('.teclado--botao.laranja').onclick = () => corrigir()
  document.querySelector('.teclado--botao.verde').onclick = () => confirmar()
}

/**
 * Inicia a etapa atual.
 */
function comecarEtapa() {

  let etapa = etapaAtual
  console.log('Etapa atual: ' + arraycargos[etapaAtual])

  numeroDigitado = ''
  votoEmBranco = false

  numeros.style.display = 'flex'
  numeros.innerHTML = ''
  rVotoPara.style.display = 'none'
  rCandidato.style.display = 'none'
  rVice.style.display = 'none'
  rDescricao.style.display = 'none'
  rMensagem.style.display = 'none'
  rNomeCandidato.style.display = 'none'
  rPartidoPolitico.style.display = 'none'
  rNomeVice.style.display = 'none'
  rRodape.style.display = 'none'

  var piscateto 
  for (i in input){
    if (arraycargos[etapaAtual] == input[i]['cargo']){
      piscateto = input[i]['numero_digitos']
    }
  }
  console.log(piscateto)
  for (let i = 0; i < piscateto; i++) {
    let pisca = i == 0 ? ' pisca' : ''
    numeros.innerHTML += `
      <div class="numero${pisca}"></div>
    `
  }
  rCargo.innerHTML = arraycargos[etapaAtual]
}

/**
 * Procura o candidato pelo número digitado,
 * se encontrar, mostra os dados dele na tela.
 */
function atualizarInterface() {
  console.log('Número Digitado:', numeroDigitado)
  let candidato = null

  // for (let num in etapa['candidatos']) {
  //   if (num == numeroDigitado) {
  //     candidato = etapa['candidatos'][num]
  //     break
  //   }
  // }
  for (i in input){
    if (numeroDigitado == input[i]['numero_voto']){
      candidato = input[i]
      break
    }
  }

  console.log('Candidato: ' + candidato)

  rVotoPara.style.display = 'inline'
  rDescricao.style.display = 'block'
  rNomeCandidato.style.display = 'block'
  rPartidoPolitico.style.display = 'block'

  if (candidato) {
    let vice = candidato['nome_vice']

    rRodape.style.display = 'block'
    rNomeCandidato.querySelector('span').innerHTML = candidato['nome']
    rPartidoPolitico.querySelector('span').innerHTML = candidato['partido']

    rCandidato.style.display = 'block'
    rCandidato.querySelector('.imagem img').src = `img/${candidato['foto']}`
    rCandidato.querySelector('.cargo p').innerHTML = candidato['cargo']
    
    if (vice) {
      rNomeVice.style.display = 'block'
      rNomeVice.querySelector('span').innerHTML = candidato['nome_vice']
      rVice.style.display = 'block'
      rVice.querySelector('.imagem img').src = `img/${candidato['foto_vice']}`
    } else {
      rNomeVice.style.display = 'none'
    }

    return
  }

  if (votoEmBranco) return

  // Anular o voto
  rNomeCandidato.style.display = 'none'
  rPartidoPolitico.style.display = 'none'
  rNomeVice.style.display = 'none'

  rMensagem.style.display = 'block'
  rMensagem.classList.add('pisca')
  rMensagem.innerHTML = 'VOTO NULO'
}

/**
 * Verifica se pode usar o teclado e atualiza o número.
 */
function clicar(value) {
  console.log(value)

  let elNum = document.querySelector('.esquerda .rotulo.r3 .numero.pisca')
  if (elNum && ! votoEmBranco) {
    numeroDigitado += (value)
    elNum.innerHTML = value
    elNum.classList.remove('pisca')

    let proximoNumero = elNum.nextElementSibling
    if (proximoNumero) {
      proximoNumero.classList.add('pisca')
    } else {
      atualizarInterface()
    }

    (new Audio('audio/se1.mp3')).play()
  }
}

/**
 * Verifica se há número digitado, se não,
 * vota em branco.
 */
function branco() {
  console.log('branco')
  console.log(numeroDigitado)
  // Verifica se há algum número digitado,
  // se sim, não vota
  if (! numeroDigitado) {
    votoEmBranco = true

    numeros.style.display = 'none'
    rVotoPara.style.display = 'inline'
    rDescricao.style.display = 'block'
    rMensagem.style.display = 'block'
    rMensagem.innerHTML = 'VOTO EM BRANCO';

    (new Audio('audio/se1.mp3')).play()
  }

}

/**
 * Reinicia a etapa atual.
 */
function corrigir() {
  console.log('corrigir');
  (new Audio('audio/se2.mp3')).play()
  comecarEtapa()
}

/**
 * Confirma o numero selecionado.
 */
function confirmar() {
  console.log('confirmar')
  if (arraytamcargo[etapaAtual] != numeroDigitado.length && !votoEmBranco){
    console.log('oi')
    return
  }
  let candidato 
  for (i in input){
    if (numeroDigitado== ''){
      break
    } 
    if (numeroDigitado == input[i]['numero_voto'] && arraycargos[etapaAtual] == input[i]['cargo']){
      candidato = input[i]
      break
    }
  }
  if (candidato != undefined && numeroDigitado.length != candidato['numero_voto'].length){
    return
  }
  if (votoEmBranco) {
    // Votou em branco
      votos.push({
        'etapa': arraycargos[etapaAtual],
        'numero': ''
      })
      console.log('Votou em Branco')
  }
  else if (candidato == undefined || numeroDigitado.length == candidato['numero_voto'].length) {
    if (candidato != undefined && numeroDigitado == candidato['numero_voto']) {
      // Votou em candidato
      votos.push({
        'etapa': arraycargos[etapaAtual],
        'numero': numeroDigitado
      })
      console.log(candidato['id'])
      incrementaVotoCandidato(candidato['id'])
      console.log(`Votou em ${numeroDigitado}`)
      //
    } else {
      // Votou nulo
      votos.push({
        'etapa': arraycargos[etapaAtual],
        'numero': null
      })
      console.log('Votou Nulo')
    }
  } else {
    // Voto não pode ser confirmado
    console.log('Voto não pode ser confirmado')
    return
  }

  if (arraycargos[etapaAtual + 1]) {
    etapaAtual++
  } else {
    console.log(votos)
    //query insert votos

    document.querySelector('.tela').innerHTML = `
      <div class="fim">FIM</div>
    `
  }

  (new Audio('audio/se3.mp3')).play()
  comecarEtapa()
}