let jogadorPontos = 0;
let computadorPontos = 0;

while (jogadorPontos < 3 && computadorPontos < 3) {
  let jogadaJogador = parseInt(prompt("Escolha sua jogada:\n1 = Tesoura\n2 = Papel\n3 = Pedra"));

  if (isNaN(jogadaJogador) || jogadaJogador < 1 || jogadaJogador > 3) {
    alert("Jogada inválida. Escolha um número de 1 a 3 para continuar sua jogada.");
  }

  let jogadaComputador = Math.floor(Math.random() * 3) + 1;
  let resultado;

  let escolhaJogador;
  let escolhaComputador;

  switch (jogadaJogador) {
    case 1:
      escolhaJogador = "Tesoura";
      break;
    case 2:
      escolhaJogador = "Papel";
      break;
    case 3:
      escolhaJogador = "Pedra";
      break;
  }

  switch (jogadaComputador) {
    case 1:
      escolhaComputador = "Tesoura";
      break;
    case 2:
      escolhaComputador = "Papel";
      break;
    case 3:
      escolhaComputador = "Pedra";
      break;
  }

  if (jogadaJogador == jogadaComputador) {
    resultado = "Empate!";
  } else if (
    (jogadaJogador == 1 && jogadaComputador == 2) ||
    (jogadaJogador == 2 && jogadaComputador == 3) ||
    (jogadaJogador == 3 && jogadaComputador == 1)
  ) {
    resultado = "Você venceu essa rodada!";
    jogadorPontos++;
  } else {
    resultado = "Você perdeu essa rodada!";
    computadorPontos++;
  }

  alert("Você escolheu: " + escolhaJogador + "\nO adversário escolheu: " + escolhaComputador + "\n\n" + resultado + "\n\nPlacar:\nJogador: " + jogadorPontos + "\nAdversário: " + computadorPontos);
}

if (jogadorPontos == 3) {
  alert("Parabéns! Você venceu o jogo!");
} else {
  alert("Não foi dessa vez, Tente novamente!");
}
