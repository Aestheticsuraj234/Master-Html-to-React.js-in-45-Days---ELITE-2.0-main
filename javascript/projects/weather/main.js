
const form = document.getElementById("search-form");
const cityInput = document.getElementById('city-input');
const weatherContainer = document.getElementById("weather-container")



async function getWeatherDataByCity(city){
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '300499526dmshc44a845ccf0661bp1597d4jsn4c37baefe350',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	return result.main;
} catch (error) {
	console.error(error);
}
}


function renderError(message){
    weatherContainer.innerHTML = `<div class="bg-red-700 p-4 rounded-lg text-center">
        ${message}
    </div>`
}

function renderWeatherCard(data , city){
    weatherContainer.innerHTML = 
    <div class="bg-white rounded-xl shadow-lg p-6">
        <div  class="text-center mb-6">
            <h2 class="text-3xl font-bold text-gray-800">
                ${city}
            </h2>
        </div>
    </div>
}

form.addEventListener("submit" , async(event)=>{
    event.preventDefault();
    const city = cityInput.value.trim()
    if(!city) return;

    try {
        weatherContainer.innerHTML = `<div class="text-white text-center ">Loading Weather Data...</div>`
        const data = await getWeatherDataByCity(city)
        renderWeatherCard(data , city)
    } catch (error) {
        renderError("City not found , Please Try Again")
    }
    finally{

    }

})



// id
// : 
// 7279746
// main
// : 
// feels_like
// : 
// 59.81
// grnd_level
// : 
// 991
// humidity
// : 
// 20
// pressure
// : 
// 1017
// sea_level
// : 
// 1017
// temp
// : 
// 62.89
// temp_max
// : 
// 62.89
// temp_min
// : 
// 62.89