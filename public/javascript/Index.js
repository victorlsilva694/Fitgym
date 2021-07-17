let Card_One = document.querySelector('.Card-One');
let Card_Two = document.querySelector('.Card-Two');
let Card_Three = document.querySelector('.Card-Three');
let Card_Four = document.querySelector('.Card-Four');
let Purchase_One = document.querySelector('#Purchase-1');
let Purchase_Two = document.querySelector('#Purchase-2');
let Purchase_Three = document.querySelector('#Purchase-3');
let Purchase_Four = document.querySelector('#Purchase-4');
let Login = document.querySelector('#Login');


Card_One.addEventListener('click', () => {
    if(Card_One.style.border !== '1px solid indigo' && Purchase_One.style.background !== 'rgb(44, 44, 44)'){
        Card_One.style.border = '1px solid rgb(44, 44, 44)';
        Purchase_One.style.background = 'rgb(44, 44, 44)';
        Purchase_One.style.color = 'rgb(210,210,210)';
    }
    else{
        Card_One.style.border = 'none';
        Purchase_One.style.background = 'transparent';
        Purchase_One.style.color = 'rgb(39, 39, 39)';
    }
});

Card_Two.addEventListener('click', () => {
    if(Card_Two.style.border !== '1px solid indigo' && Purchase_Two.style.background !== 'rgb(44, 44, 44)'){
        Card_Two.style.border = '1px solid rgb(44, 44, 44)';
        Purchase_Two.style.background = 'rgb(44, 44, 44)';
        Purchase_Two.style.color = 'rgb(210,210,210)';
    }
    else{
        Card_Two.style.border = 'none';
        Purchase_Two.style.background = 'transparent';
        Purchase_Two.style.color = 'rgb(39, 39, 39)';
    }
});

Card_Three.addEventListener('click', () => {
    if(Card_Three.style.border !== '1px solid indigo' && Purchase_Three.style.background !== 'rgb(44, 44, 44)'){
        Card_Three.style.border = '1px solid rgb(44, 44, 44)';
        Purchase_Three.style.background = 'rgb(44, 44, 44)';
        Purchase_Three.style.color = 'rgb(210,210,210)';
    }
    else{
        Card_Three.style.border = 'none';
        Purchase_Three.style.background = 'transparent';
        Purchase_Three.style.color = 'rgb(39, 39, 39)';
    }
});

Card_Four.addEventListener('click', () => {
    if(Card_Four.style.border !== '1px solid indigo' && Purchase_Four.style.background !== 'rgb(44, 44, 44)'){
        Card_Four.style.border = '1px solid rgb(44, 44, 44)';
        Purchase_Four.style.background = 'rgb(44, 44, 44)';
        Purchase_Four.style.color = 'rgb(210,210,210)';
    }
    else{
        Card_Four.style.border = 'none';
        Purchase_Four.style.background = 'transparent';
        Purchase_Four.style.color = 'rgb(39, 39, 39)';
    }
});

Login.addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/login'
})