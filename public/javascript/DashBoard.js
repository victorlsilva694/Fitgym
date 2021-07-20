let Card_1 = document.querySelector('.Card-1');
let BtnStart = document.querySelector('#Start-Trainning');
let ContentModal = document.querySelector('#Content-Modal');
let ModalText = document.querySelector('.font-size-18');
let NumbersModal = document.querySelector("#Numbers-Modal");
let TextCenter = document.querySelector('.text-center');
let HiddenName = document.querySelector('#HiddenName')
let HiddenSubTitle = document.querySelector('#HiddenSubTitle');
let References = document.querySelector('#References');
let Chronometer = document.querySelector(".Chronometer");
let SubTitleChronometer = document.querySelector('.SubTitle-Chronometer');
let ChronometerTimer = document.querySelector('.Chronometer-Timer');
let InitStartTimer = document.querySelector('#InitStart-Timer');

Card_1.addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/User/DashBoard#modal-5'
});

let Minute = 0

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

    Minute += 1

    if (Minute < 10) {
        ChronometerTimer.innerHTML = '00:0' + Minute
    }
    else if (Minute > 10) {
        ChronometerTimer.innerHTML = '00:' + Minute
    }

    if (Minute < 60) {
        setTimeout(StartTimer, 1000)
    } else {
        ChronometerTimer.innerHTML = '01:00'
    }

})
