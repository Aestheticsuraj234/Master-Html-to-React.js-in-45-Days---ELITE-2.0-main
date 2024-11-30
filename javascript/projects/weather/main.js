const form = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const weatherContainer = document.getElementById("weather-container");

async function getWeatherDataByCity(city) {
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": "300499526dmshc44a845ccf0661bp1597d4jsn4c37baefe350",
            "x-rapidapi-host": "open-weather13.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch weather data.");
    }
}

function renderError(message) {
    weatherContainer.innerHTML = `
        <div class="bg-red-700 p-4 rounded-lg text-center text-white">
            ${message}
        </div>`;
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function renderWeatherCard(data) {
    weatherContainer.innerHTML = `
        <div class="bg-white rounded-xl shadow-lg p-6">
            <div class="text-center mb-6">
                <h2 class="text-3xl font-bold text-gray-800">${data.name}</h2>
                <div class="flex justify-center items-center mt-4">
                    <img
                        src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
                        alt="${data.weather[0].description}"
                        class="w-20 h-20"
                    />
                    <span class="text-5xl font-bold text-gray-800">
                        ${Math.round(fahrenheitToCelsius(data.main.temp))}°C
                    </span>
                </div>
                <p class="text-xl text-gray-600 capitalize mt-2">${data.weather[0].description}</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                    <p class="text-sm text-gray-600">Feels Like</p>
                    <p class="font-semibold">${Math.round(fahrenheitToCelsius(data.main.feels_like))}°C</p>
                </div>
                <div class="flex items-center gap-2 bg-green-50 p-3 rounded-lg">
                    <p class="text-sm text-gray-600">Humidity</p>
                    <p class="font-semibold">${data.main.humidity}%</p>
                </div>
                <div class="flex items-center gap-2 bg-purple-50 p-3 rounded-lg">
                    <p class="text-sm text-gray-600">Wind Speed</p>
                    <p class="font-semibold">${data.wind.speed} m/s</p>
                </div>
                <div class="flex items-center gap-2 bg-orange-50 p-3 rounded-lg">
                    <p class="text-sm text-gray-600">Pressure</p>
                    <p class="font-semibold">${data.main.pressure} hPa</p>
                </div>
            </div>
        </div>`;
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();
    if (!city) return;

    try {
        weatherContainer.innerHTML = `<div class="text-white text-center">Loading Weather Data...</div>`;
        const data = await getWeatherDataByCity(city);
        renderWeatherCard(data);
    } catch (error) {
        renderError("City not found. Please try again.");
    }
});
