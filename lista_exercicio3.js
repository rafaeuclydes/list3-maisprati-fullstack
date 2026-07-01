/**Lista 3 de exercícios */
/* 1. Crie um objeto representando um produto com as propriedades: nome, preço,
categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
propriedades e seus valores. Em seguida, adicione uma nova propriedade
desconto ao objeto e exiba o preço final calculado. */
console.log("Produto - propriedades");

let produto = {
  nome: "Perca o Sono",
  preco: 24,
  categoria: "café",
  estoque: 150,
};

for (let props in produto) {
  console.log(`${props}: ${produto[props]}`);
}

produto.desconto = 0.05;
let precoFinal = produto.preco - produto.preco * produto.desconto;
console.log(`O valor final do ${produto.nome} é: R$ ${precoFinal.toFixed(2)}`);

/* 2. Crie dois objetos representando personagens de um jogo, cada um com as
propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
cada personagem lado a lado e determine qual deles tem maior poder total
(soma de vida + ataque + defesa). */
let personagem1 = {
  nome: "scorpion",
  vida: 154,
  ataque: 79,
  defesa: 71,
};

let personagem2 = {
  nome: "sub-zero",
  vida: 195,
  ataque: 76,
  defesa: 80,
};

for (let atributos in personagem1) {
  console.log(
    `${atributos}: ${personagem1[atributos]} VS ${personagem2[atributos]}`,
  );
}

let poderTotal1 = personagem1.vida + personagem1.ataque + personagem1.defesa;
let poderTotal2 = personagem2.vida + personagem2.ataque + personagem2.defesa;
if (poderTotal1 > poderTotal2) {
  console.log(`Poder total vencedor ${poderTotal1}: ${personagem1.nome} WINS`);
} else if (poderTotal1 < poderTotal2) {
  console.log(`Poder total vencedor ${poderTotal2}: ${personagem2.nome} WINS`);
} else {
  console.log("EMPATE!!!");
}

/** 3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de
experiência. Use for...in para listar todos os dados. Com base nos anos de
experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
anos = 10%, acima de 5 anos = 15%. */
let funcionario = {
  nome: "Rafael",
  cargo: "front end jr",
  salario: 3500,
  experiencia: 4,
};

for (let props in funcionario) {
  console.log(`${props}: ${funcionario[props]}`);
}

let bonusAnual = 0;
if (funcionario.experiencia <= 2) {
  bonusAnual = funcionario.salario * 0.05;
  console.log(`Bônus anual para até 2 anos de experiência: ${bonusAnual}`);
} else if (funcionario.experiencia == 3 || funcionario.experiencia < 5) {
  bonusAnual = funcionario.salario * 0.1;
  console.log(`Bônus anual de 3 a 5 anos de experiência: ${bonusAnual}`);
} else {
  bonusAnual = funcionario.salario * 0.15;
  console.log(`Bônus anual para mais de 5 anos de experiência: ${bonusAnual}`);
}

let salarioBonus = funcionario.salario + bonusAnual;
console.log(`Salário calculado com o bônus anual: ${salarioBonus}`);

/** 4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
listar o inventário completo. Permita que o usuário informe um item para usar:
reduza a quantidade em 1 ou exiba "item esgotado" se for zero. */
const PROMPT = require("prompt-sync")({ sigint: true });

let inventario = {
  espada: 5,
  escudo: 3,
  arco: 0,
  flecha: 10,
  cristal: 1,
};

for (let item in inventario) {
  console.log(`${item}: ${inventario[item]}`);
}

let solicitaItem = PROMPT("Escolha um item: ").toLowerCase();

if (inventario[solicitaItem] !== undefined) {
  if (inventario[solicitaItem] > 0) {
    inventario[solicitaItem]--;
    console.log(
      `Você usou ${solicitaItem}. Restam ${inventario[solicitaItem]}`,
    );
  } else {
    console.log("Item esgotado");
  }
} else {
  console.log("Esse item não existe no iventário");
}

/** 5. Crie um objeto representando o orçamento mensal de uma pessoa, com
categorias como alimentação, transporte, lazer e saúde, cada uma com valor
planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês. */
let orcamentoMensal = {
  alimentacao: { planejado: 1000, gasto: 1100 },
  transporte: { planejado: 300, gasto: 250 },
  lazer: { planejado: 500, gasto: 700 },
  saude: { planejado: 800, gasto: 600 },
};

let totalPlanejado = 0;
let totalGasto = 0;
for (let categoria in orcamentoMensal) {
  let planejado = orcamentoMensal[categoria].planejado;
  let gasto = orcamentoMensal[categoria].gasto;

  totalPlanejado += planejado;
  totalGasto += gasto;

  if (planejado < gasto) {
    console.log("Dentro do planejado");
  } else {
    console.log("Acima do orçamento");
  }

  console.log(
    `Categoria ${categoria}: Gasto - R$ ${gasto} | Planejado - R$ ${planejado}`,
  );
}

let saldo = totalPlanejado - totalGasto;
console.log(`Saldo do mês: R$ ${saldo}`);

/** 6. Crie um array de objetos representando músicas, cada uma com título, artista e
duração em segundos. Use for...of para exibir cada música no formato "Artista —
Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
mesmo formato. */
let musicas = [
  { musica: "café con ron", artista: "bad bunny", duracao: 228 },
  { musica: "dear god", artista: "avenged sevenfold", duracao: 393 },
  { musica: "alusina", artista: "melly", duracao: 194 },
  { musica: "cirandas", artista: "mariene de castro", duracao: 361 },
  { musica: "perfect life", artista: "damiano david", duracao: 211 },
  { musica: "p.i.t.t.y", artista: "nandatsunami", duracao: 140 },
];

for (let item of musicas) {
  let minutos = Math.floor(item.duracao / 60);
  let segundos = item.duracao % 60;

  let mm = String(minutos).padStart(2, 0);
  let ss = String(segundos).padStart(2, 0);

  let tempoFormatado = `${mm}:${ss}`;

  console.log(`${item.artista} - ${item.musica} (${tempoFormatado})`);
}

let tempoTotal = 0;

musicas.forEach((item) => {
  tempoTotal += item.duracao;
});

let tempoMm = Math.floor(tempoTotal / 60);
let tempoSs = tempoTotal % 60;
let tempoFinal = `${tempoMm}:${tempoSs}`;
console.log(`Tempo total de duração: ${tempoFinal}`);

/** 7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
forEach para calcular e exibir separadamente a média dos aprovados e a média
dos reprovados. */
let notasAlunos = [
  { nome: "Hanna", nota: 9 },
  { nome: "Rafa", nota: 7 },
  { nome: "Grampola", nota: 8 },
  { nome: "João", nota: 5 },
  { nome: "Mario", nota: 3 },
  { nome: "Maria", nota: 4 },
];

for (let alunos of notasAlunos) {
  if (alunos.nota >= 7) {
    console.log(
      `Aluno: ${alunos.nome} - Aprovado com nota ${alunos.nota}. Parabéns!`,
    );
  } else if (alunos.nota < 7 && alunos.nota >= 5) {
    console.log(
      `Aluno: ${alunos.nome} - Recuperação com a nota ${alunos.nota}`,
    );
  } else {
    console.log(`Aluno: ${alunos.nome} - Reprovado com a nota: ${alunos.nota}`);
  }
}

let mediaAprovados = 0;
let mediaReprovados = 0;
let qtddAprovados = 0;
let qtddReprovados = 0;

notasAlunos.forEach((notas) => {
  if (notas.nota >= 7) {
    mediaAprovados += notas.nota;
    qtddAprovados++;
  } else if (notas.nota < 5) {
    mediaReprovados += notas.nota;
    qtddReprovados++;
  }
});

let aprovados = mediaAprovados / qtddAprovados;
let reprovados = mediaReprovados / qtddReprovados;
console.log(`Média das notas dos alunos aprovados: ${aprovados}`);
console.log(`Média das notas dos alunos reprovados: ${reprovados}`);

/** 8. Crie um array de objetos representando produtos com nome, preço e quantidade.
Use forEach para calcular o valor total em estoque de cada produto (preço ×
quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
estoque. */
let estoqueBebidas = [
  { nome: "refrigerante", preco: 8, quantidade: 10 },
  { nome: "isotonico", preco: 4, quantidade: 20 },
  { nome: "leite", preco: 5, quantidade: 12 },
  { nome: "agua", preco: 2, quantidade: 50 },
  { nome: "suco", preco: 7, quantidade: 15 },
  { nome: "cerveja", preco: 6, quantidade: 12 },
  { nome: "vinho", preco: 50, quantidade: 3 },
  { nome: "cha", preco: 4.5, quantidade: 25 },
];

let somaEstoque = 0;
estoqueBebidas.forEach((item) => {
  let somaItem = item.preco * item.quantidade;

  console.log(`Item: ${item.nome} - valor: R$ ${somaItem}`);

  somaEstoque += somaItem;
});

console.log(`Valor total do estoque: R$ ${somaEstoque}`);

/** 9. Crie um array de objetos onde cada objeto representa um contato com nome,
telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
uma mensagem de "não encontrado". */
//const PROMPT = require("prompt-sync")({ sigint: true });
let contatos = [
  { nome: "madonna", telefone: 996236541, email: "madonna@gmail.com" },
  { nome: "beyonce", telefone: 998636745, email: "beyonce@gmail.com" },
  { nome: "britney", telefone: 984526130, email: "britney@gmail.com" },
  { nome: "lauryn", telefone: 989962311, email: "lauryn@gmail.com" },
  { nome: "rihanna", telefone: 997856238, email: "rihanna@gmail.com" },
];

contatos.forEach((dados) => {
  console.log(
    `Nome: ${dados.nome} \n Telefone: ${dados.telefone} \n E-mail: ${dados.email}`,
  );
});

let busca = PROMPT("Qual contato deseja encontrar? ").toLowerCase();
let encontrado = false;
for (let item of contatos) {
  if (item.nome === busca) {
    console.log(
      `Nome: ${item.nome} \n Telefone: ${item.telefone} \n E-mail: ${item.email}`,
    );
    encontrado = true;
    break;
  }
}
if (!encontrado) {
  console.log("Não encontrado");
}

/** 10. Implemente uma pilha usando um array para simular o histórico de um
navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
(peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
cada operação. */
class Pilha {
  constructor() {
    this.historico = [];
  }

  visitar(pagina) {
    this.historico.push(pagina);
  }

  voltar() {
    return this.historico.pop();
  }

  paginaAtual() {
    return console.log(
      `Página atual: ${this.historico[this.historico.length - 1]}`,
    );
  }
}

const pilha = new Pilha();
pilha.visitar("www.google.com");
pilha.paginaAtual();
pilha.visitar("www.youtube.com");
pilha.paginaAtual();
pilha.visitar("www.spotify.com");
pilha.paginaAtual();
pilha.visitar("www.linkedin.com");
pilha.paginaAtual();
//console.log("Usando o pop para voltar");
pilha.voltar();
pilha.paginaAtual();
pilha.voltar();
pilha.paginaAtual();

/** 11. Implemente uma fila usando um array para simular o atendimento de uma
clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
(dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
exibindo o estado da fila a cada operação. */
class Fila {
  constructor() {
    this.atendimento = [];
  }

  chegarPaciente(nome) {
    this.atendimento.push(nome);
  }

  chamarProximo() {
    return this.atendimento.shift();
  }

  exibirFila() {
    return this.atendimento;
  }
}

const fila = new Fila();
console.log("Fila de pacientes: ");

fila.chegarPaciente("Grampola");
console.log(fila.exibirFila());
fila.chegarPaciente("Amora");
console.log(fila.exibirFila());
fila.chegarPaciente("Paçoca");
console.log(fila.exibirFila());
fila.chegarPaciente("Pumba");
console.log(fila.exibirFila());
fila.chegarPaciente("Lud");
console.log(fila.exibirFila());

console.log(`Em atendimento: ${fila.chamarProximo()}`);
console.log(fila.exibirFila());
console.log(`Em atendimento: ${fila.chamarProximo()}`);
console.log(fila.exibirFila());
console.log(`Em atendimento: ${fila.chamarProximo()}`);
console.log(fila.exibirFila());

//Fazendo com array (revisaão aula)
let fila = [];

function chegarPaciente(nome) {
  fila.push(nome);
  console.log(`Paciente "${nome}" chegou e entrou na fila`);

  exibirFila();
}

function chamarProximo() {
  if (fila.length === 0) {
    console.log(`A fila esta vazia. Não há pacientes para atender`);

    return;
  }

  let atendido = fila.shift();
  console.log(`Atendemos o paciente "${atendido}"`);

  exibirFila();
}

function exibirFila() {
  if (fila.length === 0) {
    console.log(`A fila esta vazia`);
    return;
  }

  console.log(`Fila atual: ${fila.join(", ")}\n`);
}

console.log("=== Chegada dos paciente === \n");

chegarPaciente("Amora");
chegarPaciente("Grampola");
chegarPaciente("Pumba");
chegarPaciente("Paçoca");
chegarPaciente("Chispita");

console.log("=== Início dos Atendi,entos === \n");

chamarProximo();
chamarProximo();
chamarProximo();

/** 12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
exiba a lista antes e depois. */
class No {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

class Fila {
  constructor() {
    this.cabeca = null;
  }

  adicionarTarefa(tarefa) {
    const novoNo = new No(tarefa);

    if (this.cabeca === null) {
      this.cabeca = novoNo;
      return;
    }

    let atual = this.cabeca;

    while (atual.proximo !== null) {
      atual = atual.proximo;
    }

    atual.proximo = novoNo;
  }

  exibirTarefa() {
    console.log("Lista de tarefas:");

    let atual = this.cabeca;
    while (atual !== null) {
      console.log(atual.valor);
      atual = atual.proximo;
    }
  }

  removeTarefa(tarefa) {
    if (this.cabeca === null) {
      return;
    }

    if (this.cabeca.valor === tarefa) {
      this.cabeca = this.cabeca.proximo;
      return;
    }

    let atual = this.cabeca;
    let anterior = null;

    while (atual !== null && atual.valor !== tarefa) {
      anterior = atual;
      atual = atual.proximo;
    }

    if (atual == null) {
      return;
    }

    anterior.proximo = atual.proximo;
  }
}

let tarefas = new Fila();

tarefas.adicionarTarefa("Estudar listas");
tarefas.adicionarTarefa("Ir para academia");
tarefas.adicionarTarefa("Assistir palestra");
tarefas.adicionarTarefa("Finalizar lista de exercícios");

console.log("Antes da remoção");
tarefas.exibirTarefa();

tarefas.removeTarefa("Assistir palestra");

console.log("Depois da remoção");
tarefas.exibirTarefa();

//Fazendo com funções como feito e corrigino na aula
// Obs - Esse exercício eu não tinha entendido nada e não sabia fazer, aí a AI me ajudou mas agira estou seguindo a aula p/ entender.
let inicio = null;

function adicionar(tarefa) {
  let novoNo = { valor: tarefa, proximo: null };

  if (inicio === null) {
    inicio = novoNo;
  } else {
    let atual = inicio;

    while (atual.proximo !== null) {
      atual = atual.proximo;
    }

    atual.proximo = novoNo;
  }

  console.log(`Tarefa "${tarefa}" adicionada`);
}

function remover(tarefa) {
  if (inicio === null) {
    console.log(`Lista vazia. Não foi possível remover.`);
    return;
  }

  if (inicio.valor === tarefa) {
    inicio = inicio.proximo;
    console.log(`Tarefa "${tarefa}" removida.`);
    return;
  }

  let anterior = inicio;
  let atual = inicio.proximo;

  while (atual !== null) {
    if (atual.valor === tarefa) {
      anterior.proximo = atual.proximo;
      console.log(`Tarefa "${tarefa}" removida.`);
      return;
    }

    anterior = atual;
    atual = atual.proximo;
  }

  console.log(`Tarefa "${tarefa}" não encontrada.`);
}

function exibir() {
  if (inicio === null) console.log("Lista vazia.");
  return;

  let atual = inicio;
  let saida = "";

  while (atual !== null) {
    saida += atual.valor;

    if (atual.proximo !== null) {
      saida += " -> ";
    }

    atual = atual.proximo;
  }

  console.log(`Lista: ${saida} -> null \n`);
}

console.log("=== Adicionando tarefas ===");
adicionar("Estudar aula");
adicionar("Academia");
adicionar("Varrer a casa");
adicionar("Assistir aula");
adicionar("Tomar café");

exibir();

console.log("=== Removendo uma tarefa ===");
remover("Academia");
exibir();

remover("Dormir");
exibir();
