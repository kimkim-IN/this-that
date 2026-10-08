const formulario = document.getElementById("form-orcamento");
const campoNome = document.getElementById("nome");
const campoDestino = document.getElementById("destino");
const campoQuantidade = document.getElementById("quantidade");
const resultado = document.getElementById("resultado");

const precos = {
  paris: 5900,
  florianopolis: 1200,
  foz: 1500,
};

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = campoNome.value.trim();
  const destino = campoDestino.value;
  const quantidade = Number(campoQuantidade.value);

  if (!nome || !precos[destino] || !Number.isInteger(quantidade) || quantidade < 1) {
    resultado.textContent = "Preencha seu nome, escolha um destino e informe ao menos um viajante.";
    resultado.setAttribute("role", "alert");
    return;
  }

  const total = precos[destino] * quantidade;
  const nomeDestino = campoDestino.selectedOptions[0].textContent.trim();
  const valorFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  resultado.textContent = `Olá, ${nome}! A estimativa para ${quantidade} viajante(s) com destino a ${nomeDestino} é ${valorFormatado}.`;
  resultado.setAttribute("role", "status");
});
