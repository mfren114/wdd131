const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

alert(document.lastModified);
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

const temperature = 10;
const windSpeed = 14;

function calculateWindChill(temperature, windSpeed) {
    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)
}

function updateWindChill() {
    const windChillCalculation = calculateWindChill(temperature, windSpeed);
    const windChillElement = document.getElementById("windChillResult");

    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.innerText = `${windChillCalculation.toFixed(2)}°C`;
    } else {
        windChillCalculation.innerText = 'N/A';
    }

    document.addEventListener(DOMContentLoaded, updateWindChill);
}