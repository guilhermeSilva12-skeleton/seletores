const btnLogin = document.getElementById("btn-login");

const divAzul = document.getElementById("azul");
const caixaVermelha = document.getElementsByClassName('caixa')

btnLogin.addEventListener("click", () => {
    divAzul.style.backgroundColor = 'blue'
})
const btnCaixa = document.getElementById("btn-caixa");


btnCaixa.addEventListener("click", () => {
    caixaVermelha[1].style.backgroundColor = 'red'

})
