const btnPromocao = document.getElementById("btn-promocao");

btnPromocao.addEventListener("click", () => {
  alert("Promoção especial disponível para reservas realizadas hoje!");
});


const btnSaibaMais = document.getElementById("btn-saiba-mais");
const mensagemDestino = document.getElementById("mensagem-destino");

btnSaibaMais.addEventListener("click", () => {
  mensagemDestino.textContent = "Pacote Paris: 7 dias com hospedagem 4 estrelas, café da manhã incluso e ingressos para a Torre Eiffel!";
});


const btnDestaque = document.getElementById("btn-destaque");
const cardParis = document.getElementById("card-paris");

btnDestaque.addEventListener("click", () => {
  cardParis.classList.toggle("destino-destaque");
});
