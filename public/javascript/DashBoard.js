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
    window.location.href = 'http://localhost:3000/User/DashBoard#modal-5';
    ImgExercise.src  = '/images/fitness.png';
    Text_1.innerHTML = "Para realizar o primeiro tipo de abdominal, você precisar deitar com as costas ao chão, pernas totalmente esticadas e os braços lado a lado. Com os músculos do abdômen, tente fazer força para elevar o tronco corporal enquanto dobra o joelho esquerdo junto ao cotovelo direito, levando assim quase ao encontro de um ao outro, como o movimento que fazemos não pode parar. Deite-se novamente e faça outra vez o procedimento.";
    Text_2.innerHTML = "Já para fazer o segundo tipo, comece também com as costas ao chão, pernas esticadas e braços esticadas acima da cabeça. Faça força com os músculos do corpo enquanto levanta o tronco corporal. Com os braços ainda esticados leve a sua frente, até ficarem paralelos às suas pernas. Faça o movimento devagar e com calma, mantendo sempre a postura ideal e as pernas ao chão. Depois, volte à posição inicial e repita o processo outra vez.";
    Text_3.innerHTML = "Agora no terceiro tipo, você também vai precisar deitar-se com braços ao lado do corpo com as pernas esticadas para cima e unidas. Desça com cuidado uma das pernas, mantendo sempre a outra levantada. Em seguida levante a perna enquanto abaixa a outra ao mesmo tempo e vá assim alternando conforme o cronômetro."
    Text_4.innerHTML = ""
    Text_5.innerHTML = ""
    Text_6.innerHTML = ""
    Text_7.innerHTML = ""
    Text_8.innerHTML = ""
    Text_9.innerHTML = ""
    References.innerHTML = "Abdominais"

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

InitStartTimer.addEventListener('click', function StartTimer() {
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
});

/******************************** Segundo Modal ****************************************/

Card_2.addEventListener('click', () => {

    ImgExercise.src = '/images/pilates.png';
    window.location.href = 'http://localhost:3000/User/DashBoard#modal-5';
    ModalText.style.display = 'block';
    HiddenSubTitle.innerHTML = 'Tipos de Flexões';
    HiddenTitle.innerHTML = 'Flexões';
    Hidden.style.display = 'block';
    References.innerHTML = 'Flexões';
    Text_1.innerHTML = "A flexão tradicional, é atualmente a mais conhecida e praticada. Para conseguir concluir esse exercicios, coloque as mãos no chão em uma distância um pouco maior que a dos ombros, com a mão aberta e os dedos apontados para frente apoie-se na ponta dos pés. Flexione o cotovelo e vá descendo todo o corpo, até quase tocar o peito no chão.";
    Text_2.innerHTML = "Agora já com os joelhos ao chão, apoie as mãos um pouco além da distância dos ombros e mantenha-se alinhado enquanto vai descendo o corpo. Agora vá levando o peito na direção do chão e dobrando o braço em ângulo de 90°.";
    Text_3.innerHTML = "Nesse tipo de flexão você deve fazer uma flexão comum e após concluir a extensão dos cotovelos, realize um movimento unindo as mãos (semelhante a bater uma palma no ar) e repita isso dentro do prazo estimulado no cronômetro.";
    Text_4.innerHTML = "Agora voltando a mesma posição da flexão tradicional, você deve manter a palma da mão o mais próxima possível do peitoral e, mas ainda alinhada com punho, cotovelo e ombros. Dobre os cotovelos para aproximar o peito do chão e em seguida estenda-os.";
    Text_5.innerHTML = "No ultimo tipo de flexão a posição inicial é parecida com a flexão de braço tradicional. Porém, em cada descida, permaneça com um pé apoiado no chão e eleve o outro em direção ao cotovelo.";
    Text_6.innerHTML = '';
    Text_7.innerHTML = '';
    Text_8.innerHTML = '';
    Text_9.innerHTML = '';

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
    Text_1.innerHTML = "Para começar o primeiro exercício, é necessário que você esteja em uma superfície plana e antiderrapante. Fique atento aos movimentos dos braços e das pernas. Eles devem acontecer de forma sincronizada.";
    Text_2.innerHTML = "Agora você deve manter os pés unidos e os braços junto ao corpo, dando o primeiro impulso abrindo as pernas para as laterais e elevando os braços para cima, assim fechando-os por cima da cabeça.";
    Text_3.innerHTML = "Para finalizar aumente a velocidade ao longo de todo exercício para que se possa aquecer os músculos do corpo. Caso você fique perdido entre os saltos e aberturas, pare descanse e recomece.";
    Text_4.innerHTML = "";
    Text_5.innerHTML = "";
    Text_6.innerHTML = "";
    Text_7.innerHTML = "";
    Text_8.innerHTML = "";
    Text_9.innerHTML = "";

    if(Chronometer.style.display !== 'none'){
        Chronometer.style.display = 'none';
        ImgExercise.src = '/images/dancando.png';
    }

    ButtonsStartTrainning.style.display = 'block';
    BtnStart.style.display = 'block';
    References.innerHTML = 'Polichinelos';
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
    Text_1.innerHTML = "Para que você consiga fazer o exercício da prancha abdominal frontal, é necessário ficar de bruços sempre apoiando os cotovelos e antebraços ao chão e alinhados ao ombro;";
    Text_2.innerHTML = "Em seguida do passo anterior, coloque as pontas dos seus pés ao chão, em alinhamento com os cotovelos;";
    Text_3.innerHTML = "Permaneça nessa posição por aproximadamente 30 segundos, respire descanse e repita o processo outra vez;";
    Text_4.innerHTML = "É possivel repetir esse exercício em 2 ciclos de 30 segundos cada um.";
    Text_5.innerHTML = "";
    Text_6.innerHTML = "";
    Text_7.innerHTML = "";
    Text_8.innerHTML = "";
    Text_9.innerHTML = "";

    if(Chronometer.style.display !== 'none'){
        Chronometer.style.display = 'none';
        ImgExercise.src = '/images/prancha.png';
    }

    ButtonsStartTrainning.style.display = 'block';
    BtnStart.style.display = 'block';
    References.innerHTML = "Prancha abdominal";
    TitleChronometer.innerHTML = "Prancha abdominal";

});