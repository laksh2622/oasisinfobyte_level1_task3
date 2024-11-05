function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const inputUnit = document.getElementById("inputUnit").value;

    if (isNaN(inputTemp)) {
        alert("Please enter a valid number!");
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (inputUnit === "Celsius") {
        celsius = inputTemp;
        fahrenheit = (inputTemp * 9 / 5) + 32;
        kelvin = inputTemp + 273.15;
    } else if (inputUnit === "Fahrenheit") {
        celsius = (inputTemp - 32) * 5 / 9;
        fahrenheit = inputTemp;
        kelvin = celsius + 273.15;
    } else if (inputUnit === "Kelvin") {
        celsius = inputTemp - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = inputTemp;
    }

    document.getElementById("resultCelsius").textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById("resultFahrenheit").textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById("resultKelvin").textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
}
