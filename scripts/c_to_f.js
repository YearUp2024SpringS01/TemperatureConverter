"use strict";

const fahrenheitOutput = document.getElementById("fahrenheitOutput");
const calculateButton = document.getElementById("calculateButton");
const celsiusInput = document.getElementById("celsiusInput");

window.onload = init;

function init(){
    calculateButton.onclick = oncalculateButtonClicked;
}

function oncalculateButtonClicked(){
    // get my starting values
    let celsius =  Number(celsiusInput.value);


    // compute the unknowns
    let fahrenheit = (celsius * (9/5) + 32);
    

    //display the result
    fahrenheitOutput.value = fahrenheit;

}