let btn = document.querySelector(".btn");
let button_1 = document.querySelector("#Btn1")
let button_2 = document.querySelector("#Btn2")
let button_3 = document.querySelector("#Btn3")
let button_4 = document.querySelector("#Btn4")
let button_5 = document.querySelector("#Btn5")
let button_6 = document.querySelector("#Btn6")
let button_7 = document.querySelector("#Btn7")
let button_8 = document.querySelector("#Btn8")
let button_9 = document.querySelector("#Btn9")
let button_10 = document.querySelector("#Btn10")
let button_11 = document.querySelector("#Btn11")
let button_12 = document.querySelector("#Btn12")
let button_13 = document.querySelector("#Btn13")
let button_14 = document.querySelector("#Btn14")
let button_15 = document.querySelector("#Btn15")
let button_16 = document.querySelector("#Btn16")
let button_17 = document.querySelector("#Btn17")
let button_18 = document.querySelector("#Btn18")
let button_19 = document.querySelector("#Btn19")
let ShowResult = document.querySelector("#Show-Result");

const Foods = {

    "Refrigerante_de_cola": 150, "Cheeseburguer": 350,
    "Batata_Frita": 288, "Arroz": 192,
    "Feijao": 50, "Bife": 388,
    "Alface": 20, "Tomate": 32,
    "Cenoura": 24, "Beterraba": 32,
    "Laranja": 37, "Abacate": 177,
    "Abacaxi": 50, "Goiaba": 43,
    "Leite": 150, "Bolacha_Recheada": 41,
    "Bolacha": 32, "Pao_de_hamburguer": 41,
    "Pao_frances": 135

}

let {

    Refrigerante_de_cola, Batata_Frita,
    Cheeseburguer, Arroz, Feijao, Bife,
    Alface, Tomate, Cenoura, Beterraba,
    Laranja, Abacate, Abacaxi, Goiaba,
    Leite, Bolacha_Recheada, Bolacha, Pao_de_hamburguer,
    Pao_frances, TotalKcal, i

} = 0

button_1.addEventListener('click', () => {
    Refrigerante = Foods.Refrigerante_de_cola;
});

button_2.addEventListener('click', () => {
    Cheeseburguer = Foods.Cheeseburguer;
})

button_3.addEventListener('click', () => {
    Batata_Frita = Foods.Batata_Frita;
})

button_4.addEventListener('click', () => {
    Arroz = Foods.Arroz;
    TotalKcal = Arroz;
})

button_5.addEventListener('click', () => {
    Feijao = Foods.Feijao
    TotalKcal = Feijao;
})

button_6.addEventListener('click', () => {
    Bife = Foods.Bife;
    TotalKcal = Bife;
})

button_7.addEventListener('click', () => {
    Alface = Foods.Alface;
    TotalKcal = Alface;
})

button_8.addEventListener('click', () => {
    Tomate = Foods.Tomate;
    TotalKcal = Tomate;
})

button_9.addEventListener('click', () => {
    Cenoura = Foods.Cenoura;
    TotalKcal = Cenoura;
})

button_10.addEventListener('click', () => {
    Beterraba = Foods.Beterraba;
    TotalKcal = Beterraba;
})

button_11.addEventListener('click', () => {
    Laranja = Foods.Laranja;
    TotalKcal = Beterraba;
})

button_12.addEventListener('click', () => {
    Abacate = Foods.Abacate;
    TotalKcal = Beterraba;
})

button_13.addEventListener('click', () => {
    Abacaxi = Foods.Abacaxi;
})

button_14.addEventListener('click', () => {
    Goiaba = Foods.Goiaba;
})

button_15.addEventListener('click', () => {
    Leite = Foods.Leite;
})

button_16.addEventListener('click', () => {
    Bolacha = Foods.Bolacha;
})

button_16.addEventListener('click', () => {
    Bolacha = Foods.Bolacha;
})

button_16.addEventListener('click', () => {
    Bolacha = Foods.Bolacha;
})

button_17.addEventListener('click', () => {
    Bolacha_Recheada = Foods.Bolacha_Recheada;
})

button_18.addEventListener('click', () => {
    Pao_de_hamburguer = Foods.Pao_de_hamburguer;
})

button_19.addEventListener('click', () => {
    Pao_frances = Foods.Pao_frances;
});
