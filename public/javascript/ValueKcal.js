let ButtonAdd = document.querySelector('#Button-Add');
let FoodsSelected = document.querySelector(".Foods-Selected");
let Refrigerante = document.querySelector("#Refrigerante")
let Cheeseburguer = document.querySelector("#Cheeseburguer");
let Batata_Frita = document.querySelector("Batata-Frita")
let Arroz = document.querySelector("#Arroz")
let Bife = document.querySelector("#Bife")
let Feijao = document.querySelector("#Bife")
let Sorvete = document.querySelector("#Sorvete")
let Alface = document.querySelector("#Alface")
let Tomate = document.querySelector("#Tomate")
let Goiaba = document.querySelector("#Goiaba")
let Abacaxi = document.querySelector("#Abacaxi")
let Cenoura = document.querySelector("#Cenoura")
let Beterraba = document.querySelector("#Beterraba")
let Abacate = document.querySelector("#Abacate")
let Laranja = document.querySelector("#Laranja")
let Uva = document.querySelector("#Uva")
let Banana = document.querySelector("#Banana")
let Leite = document.querySelector("#Leite")
let Maionese = document.querySelector("#Maionese")
let Queijo = document.querySelector("#Queijo")
let Chocolate = document.querySelector("#Chocolate")
let Gelatina = document.querySelector("#Gelatina")
let LeiteCondensado = document.querySelector("#Leite-Condensado")
let Quantities = document.querySelector("#Quantities")
let Bolacha_Recheada = document.querySelector("#Bolacha_Recheada")
let Bolacha = document.querySelector("#Bolacha")
let Pao_de_hamburguer = document.querySelector("#Pao_de_hamburguer")
let Pao_frances = document.querySelector("#Pao_frances")
let ShowDatas = document.querySelector("#ShowDatas");
let Option_Quantities = document.querySelector(".Option_Quantities")
let ResultText = document.querySelector("#Result-Text");

let Foods_ValKcal = {
    "Refrigerante_de_cola": 150, "Cheeseburguer": 350,
    "Batata_Frita": 288, "Arroz": 192,
    "Feijao": 50, "Bife": 388,
    "Alface": 20, "Tomate": 32,
    "Cenoura": 24, "Beterraba": 32,
    "Laranja": 37, "Abacate": 177,
    "Abacaxi": 50, "Goiaba": 43,
    "Leite": 150, "Bolacha_Recheada": 41,
    "Bolacha": 32, "Pao_de_hamburguer": 41,
    "Pao_frances": 135, "Sorvete": 193
}

let Kcal = 0
let refri = '' 
let Refrigerante_C = ''

function RefrigeranteKcal(){
    //Kcal Deixa pra imprimir no final
    Kcal = Foods_ValKcal.Refrigerante_de_cola * Quantities.value
    //Imprime na tela de log
    Refrigerante_C = ' Refrigerante'
}
let burguer_C = ''

function Cheeseburguerkcal(){
    Kcal = Foods_ValKcal.Cheeseburguer * Quantities.value
    burguer_C = ' Cheeseburguer'
}

let Batata_C = ''

function Batata_FritaKcal(){
    Kcal = Foods_ValKcal.Batata_Frita * Quantities.value
    Batata_C = ' Batata Frita'
}

let Sorvete_C = ''

function SorveteKcal(){
    Kcal = Foods_ValKcal.Sorvete * Quantities.value
    Sorvete_C = ' Sorvete'
}

let Arroz_C = ''

function Arrozkcal(){
    Kcal = Foods_ValKcal.Arroz * Quantities.value
    Arroz_C = ' Arroz'
}

let Feijao_C = ''

function FeijaoKcal(){
    Kcal = Foods_ValKcal.Feijao * Quantities.value
    Feijao_C = ' Feijao'
}

let Alface_C = ''

function AlfaceKcal(){
    Kcal = Foods_ValKcal.Alface * Quantities.value
    Alface_C = ' Alface'
}

let Bife_C = ''

function Bifekcal(){
    Kcal = Foods_ValKcal.Bife * Quantities.value
    Bife_C = ' Bife'
}

let Tomate_C = ''

function TomateKcal(){
    Kcal = Foods_ValKcal.Tomate * Quantities.value
    Tomate_C = ' Tomate'
}

let Cenoura_C = ''

function CenouraKcal(){
    Kcal = Foods_ValKcal.Cenoura * Quantities.value
    Cenoura_C = ' Cenoura'
}

let Beterraba_C = ''

function Beterrabakcal(){
    Kcal = Foods_ValKcal.Beterraba * Quantities.value
    Beterraba_C = ' Beterraba'
}

let Laranja_C = ''

function LaranjaKcal(){
    Kcal = Foods_ValKcal.Laranja * Quantities.value
    Laranja_C = ' Laranja'
}

let Abacate_C = ''

function Abacatekcal(){
    Kcal = Foods_ValKcal.Abacate * Quantities.value
    Abacate_C = ' Abacate'
}

let Abacaxi_C = ''

function AbacaxiKcal(){
    Kcal = Foods_ValKcal.Abacaxi * Quantities.value
    Abacaxi_C = ' Abacaxi'
}

let Goiaba_C = ''

function GoiabaKcal(){
    Kcal = Foods_ValKcal.Goiaba * Quantities.value
    Goiaba_C = ' Goiaba'
}

let Leite_C = ''

function Leitekcal(){
    Kcal = Foods_ValKcal.Leite * Quantities.value
    Leite_C = ' Leite'
}

let Bolacha_Recheada_C = ''

function Bolacha_RecheadaKcal(){
    Kcal = Foods_ValKcal.Bolacha_Recheada * Quantities.value
    Bolacha_Recheada_C = ' Bolacha Recheada'
}

let Bolacha_C = ''

function BolachaKcal(){
    Kcal = Foods_ValKcal.Bolacha * Quantities.value
    Bolacha_C = ' Bolacha'
}

let Pao_de_hamburguer_C = ''

function Pao_de_hamburguerkcal(){
    Kcal = Foods_ValKcal.Pao_de_hamburguer * Quantities.value
    Pao_de_hamburguer_C = ' Pao_de_hamburguer'
}

let Pao_frances_C = ''

function Pao_francesKcal(){
    Kcal = Foods_ValKcal.Pao_frances * Quantities.value
    Pao_frances_C = ' Pao_frances'
}

ShowDatas.addEventListener('click', () => {
	var select = document.getElementById('multi-select-1');
	var value = select.options[select.selectedIndex].value;

    Option_Quantities.innerHTML = Quantities.value + ' ' + value + ' - ' + Kcal.toString() + 'kcal'
});