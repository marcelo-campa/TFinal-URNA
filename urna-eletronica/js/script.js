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

const votos = []

var etapaAtual = 0
var etapas = {}
var numeroDigitado = ''
var votoEmBranco = false
var input
var netapas

input = candidatosRequest();
console.log(etapas)
netapas = ncargosRequest();
console.log(netapas)
politicos = {}

for (i in input){
  console.log(input[i]['cargo'])
  politicos[input[i]['cargo']]
}

comecarEtapa()
// ajax('etapas.json', 'GET', (response) => {
//   etapas = JSON.parse('[{"id":"1","cargo":"prefeito","numero_digitos":"2","nome":"Lindomar Pescador","partido":"PC do B","foto":"cp5.jpg","numero_voto":"65","nome_vice":"Malú","partido_vice":"PC do B","foto_vice":"v5.jpg"},{"id":"2","cargo":"vereador","numero_digitos":"5","nome":"Homero do Zé Filho","partido":"PSL","foto":"cv2.jpg","numero_voto":"55555","nome_vice":null,"partido_vice":null,"foto_vice":null},{"id":"3","cargo":"vereador","numero_digitos":"5","nome":"Dandor","partido":"PV","foto":"cv3.jpg","numero_voto":"43333","nome_vice":null,"partido_vice":null,"foto_vice":null},{"id":"4","cargo":"vereador","numero_digitos":"5","nome":"Filho","partido":"MDB","foto":"cv4.jpg","numero_voto":"15123","nome_vice":null,"partido_vice":null,"foto_vice":null},{"id":"5","cargo":"vereador","numero_digitos":"5","nome":"Joel Varão","partido":"PSDC","foto":"cv5.jpg","numero_voto":"27222","nome_vice":null,"partido_vice":null,"foto_vice":null},{"id":"6","cargo":"vereador","numero_digitos":"5","nome":"Professor Clebson Almeida","partido":"PSDB","foto":"cv6.jpg","numero_voto":"45000","nome_vice":null,"partido_vice":null,"foto_vice":null},{"id":"7","cargo":"prefeito","numero_digitos":"2","nome":"Chiquinho do Adbon","partido":"PDT","foto":"cp3.jpg","numero_voto":"12","nome_vice":"Arão","partido_vice":"PRP","foto_vice":"v3.jpg"},{"id":"8","cargo":"prefeito","numero_digitos":"2","nome":"Malrinete Gralhada","partido":"MDB","foto":"cp2.jpg","numero_voto":"15","nome_vice":"Biga","partido_vice":"MDB","foto_vice":"v2.jpg"},{"id":"9","cargo":"prefeito","numero_digitos":"2","nome":"Dr. Francisco","partido":"PSC","foto":"cp1.jpg","numero_voto":"45","nome_vice":"João Rodrigues","partido_vice":"PV","foto_vice":"v1.jpg"},{"id":"10","cargo":"prefeito","numero_digitos":"2","nome":"Zé Lopes","partido":"PPL","foto":"cp4.jpg","numero_voto":"54","nome_vice":"Francisca Ferreira Ramos","partido_vice":"PPL","foto_vice":"v4.jpg"},{"id":"11","cargo":"prefeito","numero_digitos":"2","nome":"Lindomar Pescador","partido":"PC do B","foto":"cp5.jpg","numero_voto":"65","nome_vice":"Malú","partido_vice":"PC do B","foto_vice":"v5.jpg"}]')
//   console.log(etapas)
//   comecarEtapa()
// })

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

  let etapa = etapas[etapaAtual]
  console.log('Etapa atual: ' + etapa['titulo'])

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

  for (let i = 0; i < etapa['numeros']; i++) {
    let pisca = i == 0 ? ' pisca' : ''
    numeros.innerHTML += `
      <div class="numero${pisca}"></div>
    `
  }

  rCargo.innerHTML = etapa['titulo']
}

/**
 * Procura o candidato pelo número digitado,
 * se encontrar, mostra os dados dele na tela.
 */
function atualizarInterface() {
  console.log('Número Digitado:', numeroDigitado)

  let etapa = etapas[etapaAtual]
  let candidato = null

  for (let num in etapa['candidatos']) {
    if (num == numeroDigitado) {
      candidato = etapa['candidatos'][num]
      break
    }
  }

  console.log('Candidato: ' + candidato)

  rVotoPara.style.display = 'inline'
  rDescricao.style.display = 'block'
  rNomeCandidato.style.display = 'block'
  rPartidoPolitico.style.display = 'block'

  if (candidato) {
    let vice = candidato['vice']

    rRodape.style.display = 'block'
    rNomeCandidato.querySelector('span').innerHTML = candidato['nome']
    rPartidoPolitico.querySelector('span').innerHTML = candidato['partido']

    rCandidato.style.display = 'block'
    rCandidato.querySelector('.imagem img').src = `img/${candidato['foto']}`
    rCandidato.querySelector('.cargo p').innerHTML = etapa['titulo']
    
    if (vice) {
      rNomeVice.style.display = 'block'
      rNomeVice.querySelector('span').innerHTML = vice['nome']
      rVice.style.display = 'block'
      rVice.querySelector('.imagem img').src = `img/${vice['foto']}`
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

  let etapa = etapas[etapaAtual]

  if (numeroDigitado.length == etapa['numeros']) {
    if (etapa['candidatos'][numeroDigitado]) {
      // Votou em candidato
      votos.push({
        'etapa': etapa['titulo'],
        'numero': numeroDigitado
      })
      console.log(`Votou em ${numeroDigitado}`)
    } else {
      // Votou nulo
      votos.push({
        'etapa': etapa['titulo'],
        'numero': null
      })
      console.log('Votou Nulo')
    }
  } else if (votoEmBranco) {
    // Votou em branco
      votos.push({
        'etapa': etapa['titulo'],
        'numero': ''
      })
      console.log('Votou em Branco')
  } else {
    // Voto não pode ser confirmado
    console.log('Voto não pode ser confirmado')
    return
  }

  if (etapas[etapaAtual + 1]) {
    etapaAtual++
  } else {
    document.querySelector('.tela').innerHTML = `
      <div class="fim">FIM</div>
    `
  }

  (new Audio('audio/se3.mp3')).play()
  comecarEtapa()
}