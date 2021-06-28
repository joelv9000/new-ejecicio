

    let nameInput= document.querySelector("#nameInput");

    let button = document.querySelector("#button");

    button.addEventListener("click",event =>{

        let nameHeader = document.querySelector("#kelvin");
        nameHeader.textContent= kelvin(parseInt(nameInput.value));

        let faren= document.querySelector("#farenheit");
        faren.textContent=farenheit(parseInt(nameInput.value));
    })



function kelvin(celsius){
    return celsius +273.15;
}

function farenheit(celsius){
    return (celsius*(9/5)+32);
}