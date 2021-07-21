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
let ButtonsStartTrainning = document.querySelector('.Buttons-StartTrainning')
let Card_3 = document.querySelector('.Card-3');
let Card_4 = document.querySelector('.Card-4');

/******************************** Primeiro Modal ****************************************/

Card_1.addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/User/DashBoard/HealthyEating#modal-5';
    ImgExercise.src  = '/images/breakfast.png';
    Text_1.innerHTML = "Os ingredientes são: Farinha de trigo 1 xícara (chá), Açúcar 4 colheres (sopa), Fermento químico em pó 3 colheres (chá), Ovo 2 unidades,Leite 1 xícara (chá), Manteiga 2 colheres (sopa), Sal 1 pitada, Manteiga a gosto.";
    Text_2.innerHTML = "Para iniciar a receita, Misture todos os ingredientes secos e em outro recipiente misture os líquidos mexendo bem.";
    Text_3.innerHTML = "Depois junte os dois , secos e líquidos sem bater , e nem mexer muito."
    Text_4.innerHTML = "Em seguida para finalizar unte a frigideira e com o auxilio de uma concha coloque porçoes e frite por aproximadamente um minuto de cada lado ou ate ficar douradinha em fogo médio."
    Text_5.innerHTML = "O tempo de preparo é de 30 minutos e a quantidade calórica são de 657,79kcal em 2 porções."
    Text_6.innerHTML = ""
    Text_7.innerHTML = ""
    Text_8.innerHTML = ""
    Text_9.innerHTML = ""
    References.innerHTML = "Café da manhã"

});

BtnStart.addEventListener('click', () => {
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

    ImgExercise.src = '/images/pilates.png';
    window.location.href = 'http://localhost:3000/User/DashBoard#modal-5';
    ModalText.style.display = 'block';
    HiddenSubTitle.innerHTML = 'Tipos de Flexões';
    HiddenTitle.innerHTML = 'Flexões';
    Hidden.style.display = 'block';
    References.innerHTML = 'Almoço';
    Text_1.innerHTML = "";
    Text_2.innerHTML = "";
    Text_3.innerHTML = ""
    Text_4.innerHTML = ""
    Text_5.innerHTML = ""
    Text_6.innerHTML = ""
    Text_7.innerHTML = ""
    Text_8.innerHTML = ""
    Text_9.innerHTML = ""

    if(Chronometer.style.display !== 'none'){
        Chronometer.style.display = 'none';
        ImgExercise.src = '/images/pilates.png';
    }
    ButtonsStartTrainning.style.display = 'block';
    BtnStart.style.display = 'block';
    TitleChronometer.innerHTML = "Cronômetro para Flexões";

});
/******************************** Terceiro Modal ****************************************/
Card_3.addEventListener('click', () => {

    ImgExercise.src = '/images/dancando.png';
    window.location.href = 'http://localhost:3000/User/DashBoard#modal-5';
    ModalText.style.display = 'block';
    HiddenSubTitle.innerHTML = 'Como fazer polichinelos?';
    HiddenTitle.innerHTML = 'Polichinelos';
    Hidden.style.display = 'block';
    References.style.display = 'block';
    Text_1.innerHTML = "";
    Text_2.innerHTML = "";
    Text_3.innerHTML = ""
    Text_4.innerHTML = ""
    Text_5.innerHTML = ""
    Text_6.innerHTML = ""
    Text_7.innerHTML = ""
    Text_8.innerHTML = ""
    Text_9.innerHTML = ""

    if(Chronometer.style.display !== 'none'){
        Chronometer.style.display = 'none';
        ImgExercise.src = '/images/dancando.png';
    }

    ButtonsStartTrainning.style.display = 'block';
    BtnStart.style.display = 'block';
    References.innerHTML = 'Café da tarde';
    TitleChronometer.innerHTML = "Cronômetro para Polichinelos";

});

/******************************** Quarto Modal ****************************************/

Card_4.addEventListener('click', () => {

    ImgExercise.src = '/images/prancha.png';
    window.location.href = 'http://localhost:3000/User/DashBoard#modal-5';
    ModalText.style.display = 'block';
    HiddenSubTitle.innerHTML = 'Como fazer a prancha abdominal?';
    HiddenTitle.innerHTML = 'Prancha abdominal';
    Hidden.style.display = 'block';
    References.style.display = 'block';
    Text_1.innerHTML = "";
    Text_2.innerHTML = "";
    Text_3.innerHTML = ""
    Text_4.innerHTML = ""
    Text_5.innerHTML = ""
    Text_6.innerHTML = ""
    Text_7.innerHTML = ""
    Text_8.innerHTML = ""
    Text_9.innerHTML = ""

    if(Chronometer.style.display !== 'none'){
        Chronometer.style.display = 'none';
        ImgExercise.src = '/images/prancha.png';
    }

    ButtonsStartTrainning.style.display = 'block';
    BtnStart.style.display = 'block';
    References.innerHTML = 'Jantar';
    TitleChronometer.innerHTML = "Prancha abdominal";

});