<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/tela.css">
  <link rel="shortcut icon" href="#">
  <script type = "text/javascript" src="js/script.js" defer></script>
</head>
<body>
<h1>Urna Eletrônica</h1>
  <div class="urna-area">
    <div class="urna">
      <div class="tela">
        <div class="principal">
          <div class="esquerda">
            <div class="rotulo r1">
              <span>Seu voto para</span>
            </div>
            <div class="rotulo r2">
              <span>Cargo</span>
            </div>
            <div class="rotulo r3">
              <div class="numero pisca"></div>
              <div class="numero"></div>
            </div>
            <div class="rotulo r4">
              <div class="mensagem"></div>
              <p class="nome-candidato">Nome: <span>Fulano de Tal</span></p>
              <p class="partido-politico">Partido: <span>XXXX</span></p>
              <p class="nome-vice">Vice-Prefeito: <span>Ciclano de Tal</span></p>
            </div>
          </div>
          <div class="direita">
            <div class="candidato">
              <div class="imagem">
                <img src="" alt="Candidato">
              </div>
              <div class="cargo">
                <p>Prefeito</p>
              </div>
            </div>
            <div class="candidato menor">
              <div class="imagem">
                <img src="" alt="Vice">
              </div>
              <div class="cargo">
                <p>Vice-Prefeito</p>
              </div>
            </div>
          </div>
        </div>
        <div class="rodape">
          <p>
            Aperte a tecla<br>
            CONFIRMA para CONFIRMAR este voto<br>
            CORRIGE para REINICIAR este voto.
          </p>
        </div>
      </div>

      <div class="lateral">
        <div class="logoarea">
          <img src="img/brasao.png" alt="Brasão da República">
          <h2>Justiça Eleitoral</h2>
        </div>

        <div class="teclado">
          <div class="teclado--linha">
            <div class="teclado--botao">1</div>
            <div class="teclado--botao">2</div>
            <div class="teclado--botao">3</div>
          </div>
          <div class="teclado--linha">
            <div class="teclado--botao">4</div>
            <div class="teclado--botao">5</div>
            <div class="teclado--botao">6</div>
          </div>
          <div class="teclado--linha">
            <div class="teclado--botao">7</div>
            <div class="teclado--botao">8</div>
            <div class="teclado--botao">9</div>
          </div>
          <div class="teclado--linha">
            <div class="teclado--botao">0</div>
          </div>
          <div class="teclado--linha">
            <div class="teclado--botao especial branco">Branco</div>
            <div class="teclado--botao especial laranja">Corrige</div>
            <div class="teclado--botao especial verde">Confirma</div>
          </div>
        </div>
        <input type="button" value="Ver resultados parciais" style="float: right; margin-right: 40px; margin-top:15px; margin-left:40px"; onclick="retrieveEleitos()">
      </div>
    </div>
  </div>
  <H3 id = "Resultados" style = "margin-left:10px" ><h3>
</body>
</html>