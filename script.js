const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
})

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();

})
function convertToCelsius(){
    let inputvalue = degree.value;

    if(tempType.value === "fahrenheit") {
        const fahrenheitToCelsius = (inputvalue - 32) * (5/9);
        celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg; 
        c`;

    }
    else if(tempType.value === "kelvin"){
        const kelvinToCelsius = inputvalue - 273.15;
        celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;
        c`;

    }
}