// function syncFunction() {
//     console.log("Task 1");
//     console.log("Task 2");
//     console.log("Task 3");
// }

// // Calling the synchronous function
// console.log("Before calling synchronous function"); 
// syncFunction();
// console.log("After calling synchronous function");



function asyncFunction() {
    console.log("Task 1");
    setTimeout(() => {
        console.log("Task 2 (Async)");
    }, 2000); // Simulating a delay of 2 seconds
    console.log("Task 3");
}

// Calling the asynchronous function
console.log("Before calling asynchronous function");
asyncFunction();
console.log("After calling asynchronous function");



function fetchWeatherData(callback) {
    // Simulating fetching weather data from a server
    setTimeout(function() {
        const weatherData = { temperature: 25, condition: "Sunny" };
        callback(weatherData); // Call the function provided with the weather data
    }, 2000);
}

function displayWeather(weather) {
    console.log(`The temperature is ${weather.temperature}°C and it's ${weather.condition}.`);
}

fetchWeatherData(displayWeather); // This will display the weather after 2 seconds