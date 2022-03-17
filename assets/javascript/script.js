let igor = {
  nome: 'Igor',
  vitorias: 4,
  empates: 1,
  derrota: 2,
  pontos: 0
}
let maicon = {
  nome: 'Maicon',
  vitorias: 2,
  empates: 1,
  derrota: 2,
  pontos: 0
}

igor.pontos = calculaPontos(igor);

function calculaPontos(jogador) {
  let pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos;
}
calculaPontos(igor);


function adicionarDerrota() {}

function adicionarEmpate() {}

function adicionarVitoria() {}