let Mass = document.querySelector("#Mass");
let HeightBody = document.querySelector("#HeightBody");
let Result = document.querySelector("#Result");
let HTMLResult = document.querySelector('.Resultado');
let HTMLTxt_Result = document.querySelector(".Txt-Resultado");
let Classification = document.querySelector('.Classification')

Result.addEventListener('click', () => {
    
    let Calc_Result = Mass.value / (HeightBody.value * HeightBody.value);

    if(HTMLResult.style.display !== 'block'){
        HTMLResult.style.display = 'block';
        if(Calc_Result < 18.5){
            HTMLTxt_Result.innerHTML = parseFloat(Calc_Result.toFixed(2));
            Classification.innerHTML = "Magreza";
        }
        else if(Calc_Result > 18.5 && Calc_Result < 24.9){
            HTMLTxt_Result.innerHTML = parseFloat(Calc_Result.toFixed(2));
            Classification.innerHTML = "Normal";
        }
        else if(Calc_Result > 25.0 && Calc_Result < 29.9){
            HTMLTxt_Result.innerHTML = parseFloat(Calc_Result.toFixed(2));
            Classification.innerHTML = "Sobrepeso";
        }
        else if(Calc_Result > 30.0 && Calc_Result < 39.0){
            HTMLTxt_Result.innerHTML = parseFloat(Calc_Result.toFixed(2));
            Classification.innerHTML = "Obesidade";
        }       
        else if(Calc_Result > 40.0){
            HTMLTxt_Result.innerHTML = parseFloat(Calc_Result.toFixed(2));
            Classification.innerHTML = "Obesidade Grave";
        }
    }
});

