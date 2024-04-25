// Declarando as variáveis

let p1 = prompt("Digite seu NOME: ");
let p2 = prompt("Digite seu PODER: ");
let p3 = prompt("Digite o nome de um vilão: ");
let p4 = prompt("Digite um lugar: ");
let msg = document.getElementById("msg");

msg.innerHTML = `Olá ${p1}, o seu poder é ${p2} e você vai enfrentar o ${p3} no/em ${p4}`