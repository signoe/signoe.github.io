const submitForm = document.querySelector('#conversionTemperature');
const inputTemperature = document.querySelector('#input');
const resultTemperature = document.querySelector('#result');
const kalkulasi = document.querySelector('#kalkulasi');
const reverse = document.querySelector('#reverse');

submitForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const labels = inputTemperature.labels;
    showResult(labels, inputTemperature.value);
})

reverse.addEventListener('click', function() {
    let temp;
    const labelInput = inputTemperature.labels;
    const labelResult = resultTemperature.labels;
    
    temp = labelInput[0].textContent;
    labelInput[0].textContent = labelResult[0].textContent;
    labelResult[0].textContent = temp;

    const labels = inputTemperature.labels;
    showResult(labels, inputTemperature.value);
});

const showResult = (labels, inputTemperature) => {
    if (inputTemperature !== '' && labels[0].textContent === "Celsius (°C):") {
        const result = celsiusToFahrenheit(inputTemperature);
        
        resultTemperature.value = Math.round(result * 10) / 10;
        kalkulasi.value = `${inputTemperature}°C * (9/5) + 32 = ${resultTemperature.value}°F`;
    } else if (inputTemperature !== '' && labels[0].textContent === "Fahrenheit (°F):") {
        const result = fahrenheitToCelsius(inputTemperature);

        resultTemperature.value = Math.round(result * 10) / 10;
        kalkulasi.value = `(${inputTemperature}°F - 32) * (5/9) = ${resultTemperature.value}°C`;
    } else {
        resultTemperature.value = '';
        kalkulasi.value = '';
    }
}

const celsiusToFahrenheit = (temperature) => (temperature * (9/5)) + 32;
const fahrenheitToCelsius = (temperature) => (temperature - 32) * (5/9);