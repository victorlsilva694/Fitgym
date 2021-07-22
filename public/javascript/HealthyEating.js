let Card_1 = document.querySelector('.Card-1');
let BtnStart = document.querySelector('#Start-Trainning');
let ContentModal = document.querySelector('#Content-Modal');
let ModalText = document.querySelector('.font-size-18');
let NumbersModal = document.querySelector("#Numbers-Modal");
let TextCenter = document.querySelector('.text-center');
let HiddenName = document.querySelector('#HiddenName');
let HiddenSubTitle = document.querySelector('#HiddenSubTitle');
let References = document.querySelector('#References');
let Chronometer = document.querySelector(".Chronometer");
let SubTitleChronometer = document.querySelector('.SubTitle-Chronometer');
let TitleChronometer = document.querySelector('.Title-Chronometer')
let ChronometerTimer = document.querySelector('.Chronometer-Timer');
let InitStartTimer = document.querySelector('#InitStart-Timer');
let ImgExercise = document.querySelector('#Image-Pilates');
let Hidden = document.querySelector('#Hidden');
let Card_2 = document.querySelector('.Card-2');
let Minute = 0
let Text_1 = document.querySelector('#Text-1');
let Text_2 = document.querySelector('#Text-2');
let Text_3 = document.querySelector('#Text-3');
let Text_4 = document.querySelector('#Text-4');
let Text_5 = document.querySelector('#Text-5');
let Text_6 = document.querySelector('#Text-6');
let Text_7 = document.querySelector('#Text-7');
let Text_8 = document.querySelector('#Text-8');
let Text_9 = document.querySelector('#Text-9');
let Text_10 = document.querySelector('#Text-10');
let ButtonsStartTrainning = document.querySelector('.Buttons-StartTrainning')
let Card_3 = document.querySelector('.Card-3');
let Card_4 = document.querySelector('.Card-4');
let NameFood = document.querySelector('#NameFood');
let ImgModal = document.querySelector('#ImgModal');
let Ingredients = document.querySelector("#Ingredients");
let NameFood2 = document.querySelector('#NameFood2');
let ImgFood2 = document.querySelector("#Img-Food-2");

/******************************** Primeiro Modal ****************************************/

Card_1.addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/User/DashBoard/HealthyEating#modal-5';
    ImgExercise.src = '/images/breakfast.png';
    Text_1.innerHTML = "2 ovos; 1 xícara de chá de queijo minas meia cura ralado; ¼ de cebola picada; ½ tomate picado; ½ xícara de chá de espinafre; Azeite, sal e pimenta do reino a gosto.";
    Text_2.innerHTML = "Bata os 2 ovos, pode ser na batedeira ou não. Após ter batido bem, coloque-o na frigideira já untada com óleo, acrescente o sal, o presunto picado em quadradinhos e as duas fatias de queijo (não precisa picar o queijo). ";
    Text_3.innerHTML = "Coloque os temperos a gosto, espere ficar firme, e vire o omelete. Está pronto um omelete delicioso, bom apetite!"
    Text_4.innerHTML = ""
    Text_5.innerHTML = ""
    Text_6.innerHTML = "3 copos americanos (1/2 litro) de água, 3 colheres de sopa (30g) de café, Açúcar a gosto"
    Text_7.innerHTML = "Coloque o filtro de papel no coador e encaixe sobre uma jarra ou garrafa térmica."
    Text_8.innerHTML = "Coloque a água num fervedor e leve ao fogo médio para aquecer. Atenção: não deixe a água ferver, assim que começarem a subir as primeiras bolhinhas desligue o fogo – se a água estiver muito quente pode queimar o pó e deixar o café amargo em excesso."
    Text_9.innerHTML = "Regue um pouco da água quente sobre o filtro sem o café – é bem pouco mesmo, apenas para aquecer o filtro e o coador e eliminar qualquer aroma indesejado do papel. Despreze a água."
    Text_10.innerHTML = "Coloque o pó de café no filtro umedecido e regue apenas a quantidade suficiente de água quente para umedecer todo o pó. Deixe hidratar por alguns segundos e regue o restante da água, em movimento circular para coar todo o pó por igual. Deixe o cafécoar sem mexer. Sirva a seguir."
    References.innerHTML = "Café da manhã"
    ImgModal.src = "https://cdn.pixabay.com/photo/2015/05/20/16/11/kitchen-775746_960_720.jpg"
    ImgModal.style.width = "100%"
    ImgFood2.src = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"

});

/*BtnStart.addEventListener('click', () => {
    ModalText.style.display = 'none'; TextCenter.style.display = 'none';
    HiddenName.style.display = 'none'; HiddenSubTitle.style.display = 'none';
    HiddenTitle.style.display = 'none'; References.style.display = 'none';
    BtnStart.style.display = 'none';

    if (Chronometer.style.display !== 'block') {
        Chronometer.style.display = 'block';
    }
});

/*InitStartTimer.addEventListener('click', function StartTimer() {
    Minute += 1;
    if (Minute < 10) {
        ChronometerTimer.innerHTML = '00:0' + Minute;
    }
    else if (Minute > 10) {
        ChronometerTimer.innerHTML = '00:' + Minute;
    }
    if (Minute < 60) {
        setTimeout(StartTimer, 1000);
    } else {
        ChronometerTimer.innerHTML = '01:00';
    }
});*/

/******************************** Segundo Modal ****************************************/

Card_2.addEventListener('click', () => {
    ImgExercise.src = '/images/dish.png';
    window.location.href = 'http://localhost:3000/User/DashBoard/HealthyEating#modal-5';
    ModalText.style.display = 'block';
    HiddenSubTitle.innerHTML = 'Receita para um almoço saudável';
    HiddenTitle.innerHTML = 'Almoço';
    ImgModal.src = "https://images.unsplash.com/photo-1600180786608-28d06391d25c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
    NameFood.innerHTML = "A primeira receita da lista é o Filé Mignon ao Forno"
    Hidden.style.display = 'block';
    ImgFood2.src = "/images/Espaguete-ao-alho-e-oleo.jpg"
    References.innerHTML = 'Almoço';
    Ingredients.innerHTML = "Ingredientes necessários:"
    Text_1.innerHTML = "2 colheres (sopa) de alho triturado, 1 colher (chá) de sal, 1 colher (sopa) de mostarda em pó, 1 peça de filé Mignon sem gordura, Esfregue bem o sal, depois a mostarda, e, por último o alho na peça de filé.";
    Text_2.innerHTML = "Embrulhe a peça no papel alumínio e leve ao forno por cerca de 30 minutos, Após o tempo, retire do forno, abra o papel alumínio com auxilio de garfo e faca. Não há necessidade de removê-lo, apenas deixe a carne toda exposta.";
    Text_3.innerHTML = "Coloque novamente no forno por 10 minutos para dar uma dourada final, Fatie e sirva!"
    Text_4.innerHTML = ""
    Text_5.innerHTML = ""
    Text_6.innerHTML = "500 g de espaguete, 2 colheres (sopa) de sal, 5 dentes de alho grandes, 1 xícara (chá) de azeite, 1 pimenta dedo-de-moça inteira"
    Text_7.innerHTML = "Usando uma panela grande, coloque 5 litros de água e 2 colheres (sopa) de sal. Leve ao fogo alto e descasque os dentes de alho, cortando em lascas ou em fatias finas. Leve uma frigideira antiaderente ao fogo médio, acrescente o azeite e espere aquecer."
    Text_8.innerHTML = "Assim que começar a dourar, retire as lascas de alho com uma escumadeira para não queimar. Desligue o fogo e reserve o azeite para depois. Se preferir, despreze a pimenta."
    Text_9.innerHTML = "Assim que a água começar a ferver, coloque o macarrão e deixe cozinhar. Após isso despeje com cuidado o macarrão cozido em um escorredor de água. A seguir, transfira o macarrão para a panela (sem a água). Leve ao fogo alto(apenas para aquecer), junte o azeite reservado e misture. Caso necessário, coloque um um pouco mais de azeite."
    Text_10.innerHTML = "Agora por fim, junte o macarrão ao alho e sirva imediatamente com queijo parmesão ralado."
    NameFood2.innerHTML = "A segunda receita é o macarrão alho e óleo"
});

/******************************** Terceiro Modal ****************************************/

Card_3.addEventListener('click', () => {
    ImgExercise.src = '/images/coffee-cup.png';
    window.location.href = 'http://localhost:3000/User/DashBoard/HealthyEating#modal-5';
    ModalText.style.display = 'block';
    HiddenSubTitle.innerHTML = 'Receita um delicioso café da tarde';
    HiddenTitle.innerHTML = 'Café da tarde';
    ImgModal.src = "https://images.unsplash.com/photo-1621865091587-42f462729948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80"
    NameFood.innerHTML = "Para o café da tarde a receita escolhida foi o Café Macchiato"
    Hidden.style.display = 'block';
    ImgFood2.src = "/images/pao-com-ovo.jpeg";
    References.innerHTML = 'Café da tarde';
    Ingredients.innerHTML = "Ingredientes necessários:"
    Text_1.innerHTML = "Encha o copo com 2/3 de leite e leve ao micro-ondas para aquecer bem. Agora, Junte o leite condensado de uma vez só, para ele ir para a base.";
    Text_2.innerHTML = "Junte o expresso (deixe correr ao longo do copo, com cuidado, para não haver mistura), agora com o mixer, bata o leite, durante 1 minuto, até ficar em espuma densa.";
    Text_3.innerHTML = "Coloque um pouco sobre o café e sirva e uma xícara"
    Text_4.innerHTML = ""
    Text_5.innerHTML = ""
    Text_6.innerHTML = "5 ovos 1 colher (sopa) de manteiga ou margarina 3 colheres (sopa) de requeijão Pão caseiro em fatias Sal, pimenta do reino e cheiro verde a gosto"
    Text_7.innerHTML = "Em uma tigela, bata bem os ovos e tempere com sal e pimenta do reino; Coloque a manteiga em uma frigideira antiaderente e, quando estiver quente, adicione os ovos;"
    Text_8.innerHTML = "Mexa bem enquanto cozinha em fogo médio; Quando estiver na consistência desejada, desligue o fogo e adicione o requeijão;"
    Text_9.innerHTML = "Misture bem e coloque a quantidade desejada na fatia de pão, adicione cheiro verde por cima. Sirva!"
    Text_10.innerHTML = ""
    NameFood2.innerHTML = "A segunda receita é o delicioso pão com ovo mexido cremoso"
});

/******************************** Quarto Modal ****************************************/


Card_4.addEventListener('click', () => {
    ImgExercise.src = '/images/dish.png';
    window.location.href = 'http://localhost:3000/User/DashBoard/HealthyEating#modal-5';
    ModalText.style.display = 'block';
    HiddenSubTitle.innerHTML = 'Receitas para um ótimo jantar';
    HiddenTitle.innerHTML = 'Jantar';
    ImgModal.src = "https://cdn.pixabay.com/photo/2018/03/24/12/48/cake-3256540_960_720.jpg"
    NameFood.innerHTML = "A Receita para o jantar é a torta de liquidificador vegana"
    Hidden.style.display = 'block';
    ImgFood2.src = "https://cdn.pixabay.com/photo/2014/04/22/02/55/pasta-329522_960_720.jpg"
    References.innerHTML = 'Jantar';
    Ingredients.innerHTML = "Ingredientes necessários:"
    Text_1.innerHTML = "3 colheres de azeite. 2 dentes de alho. 1/2 cebola cortada ou ralada.2 cenouras médias cortadas em cubos pequenos. 4 tomates. 4 palmitos pupunha picados. 1 abobrinha ralada. 100 gramas de azeitona verde. 1/2 xícara de milho cozido. 1/2 colher de chá de sal. Para a massa vai ser necessário, 1/2 xícara de óleo vegetal de sua preferência. 2 xícaras de água. 1 colher de chá de sal. 2 xícaras de farinha de trigo. 1 colher de sopa de fermento em pó.orégano a gosto.";
    Text_2.innerHTML = "Em uma panela, aqueça o azeite e adicione a cebola e deixe refogar por 2 minutos. Em seguida adicione o alho, até dourar (cerca de 1 minuto). Adicione as cenouras e deixe refogar por 2 minutos.";
    Text_3.innerHTML = "Após, adicione o restante dos ingredientes (abobrinha, tomate, palmito, milho e azeitona) e deixe refogar com a tampa tampada por 3-4 minutos. Enquanto isso, prepare a massa e pre-aqueça o forno a 180 graus."
    Text_4.innerHTML = "Em um liquidificador coloque o óleo, a água a farinha e o sal. Bata tudo até se misturar bem. Adicione o fermento e misture delicadamente com as mãos."
    Text_5.innerHTML = "Coloque metade da massa em uma forma untada.Coloque todo o recheio por cima da massa e em seguida coloque o restante da massa por cima do recheio. Salpique orégano por cima. Leve ao forno por cerca de 40 minutos e sirva."
    Text_6.innerHTML = "Penne 1 pacote Molho de tomate 1 caixa Creme de Leite 1 lata Requeijão 100 gramas Cebola 1 unidade Alho 3 dentes Salsinha 1 colher (sopa) Sal 1 pitada"
    Text_7.innerHTML = "Coloque em uma panela de pressão 4 copos de água, deixe esquentar, coloque o macarrão, dê uma mexidinha pra ele não grudar, e coloque o molho pronto, a cebola e o alho."
    Text_8.innerHTML = "Tampe e deixe pegar pressão, (quando começar a fazer barulho), conte três minutos, tire a pressão, e ponha o creme de leite."
    Text_9.innerHTML = "Junte o requeijão, a salsinha e acerte o sal. Coloque em um refratário, se quiser um queijinho por cima, e está pronto um macarrão delicioso, que pode ser servido com uma carne, e saladinha básica."
    Text_10.innerHTML = ""
    NameFood2.innerHTML = "A outra receita é o Macarrão na Panela de Pressão"
});