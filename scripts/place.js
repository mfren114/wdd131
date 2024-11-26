const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

alert(document.lastModified);
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

const temperature = 10;
const windSpeed = 14;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        let windChillResult = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)
        return windChillResult.toFixed(2);
    } else {
        let windChillResult = "N/A";
        return windChillResult;
    }

}

const windChillResult = calculateWindChill(temperature, windSpeed)
document.getElementById("windChillResult").innerText = `${windChillResult}`;

