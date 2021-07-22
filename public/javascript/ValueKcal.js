let ButtonAdd = document.querySelector('#Button-Add');
let FoodsSelected = document.querySelector(".Foods-Selected")


let Foods_ValKcal = {
    "Refrigerante_de_cola": 150, "Cheeseburguer": 350,
    "Batata_Frita": 288, "Arroz": 192,
    "Feijao": 50, "Bife": 388,
    "Alface": 20, "Tomate": 32,
    "Cenoura": 24, "Beterraba": 32,
    "Laranja": 37, "Abacate": 177,
    "Abacaxi": 50, "Goiaba": 43,
    "Leite": 150, "Bolacha_Recheada": 41,
    "Bolacha": 32, "Pao_de_hamburguer": 41, "Pao_frances": 135
}



ButtonAdd.addEventListener('click', () => {

    var Foods = document.getElementById('multi-select-1');
	var SpecifiedFood = Foods.options[Foods.selectedIndex].value;
    console.log(SpecifiedFood)

    var quantity = document.getElementById('select-1');
	var SpecifiedQuantity = quantity.options[quantity.selectedIndex].value;
    console.log(SpecifiedQuantity)

    
    

});