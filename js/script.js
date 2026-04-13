async function getWeather(event) {
    event.preventDefault();
    let city = document.getElementById('city');
    if (city.value === '') {
        alert('Please enter a city...');
        return;
    }

    // fetch data
    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=751d66e130befad396405dc13796a57c&units=metric`);
        let data = await res.json();

        // data display in ui
        let card = document.getElementById('weatherResult');
        if(data.cod == 404){
            card.innerHTML = `<h2 id="cityName" class="text-lg mb-md">${data.message}</h2>`
        }
        else{
            card.innerHTML = `
                <h2 id="cityName" class="text-xl mb-md">${data.name}</h2>
                <p id="temp" class="text-lg mb-sm">${data.main.temp}°C</p>
                <p id="condition" class="text-muted">${data.weather[0].description}</p>
            `;
        }
        card.classList.remove('hidden');
    } catch (err){
        console.log(err);
    }
}