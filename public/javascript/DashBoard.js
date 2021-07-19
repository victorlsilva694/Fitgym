let Card_1 = document.querySelector('.Card-1');
let BtnStart = document.querySelector('#Start-Trainning');
let ContentModal = document.querySelector('#Content-Modal');
let NumbersModal = document.querySelector("#Numbers-Modal");

Card_1.addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/User/DashBoard#modal-1'
});

let Minute = 1

    BtnStart.addEventListener('click', function TimeModal() {
        ContentModal.style.display = 'none'
        NumbersModal.style.display = 'block'

        NumbersModal.innerHTML = Minute
        Minute = setTimeout(TimeModal, 1000)

        if(Minute < 60) {
            NumbersModal.innerHTML = Minute
        }
        else{
            NumbersModal.innerHTML = '0'
        }

    });