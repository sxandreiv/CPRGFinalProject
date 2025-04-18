//greeting
function getCancunGreeting() {
    const options = {
      timeZone: 'America/Cancun',
      hour: 'numeric',
      hour12: false,
    };
    const formatter = new Intl.DateTimeFormat([], options);
    const hour = parseInt(formatter.format(new Date()));
  
    let greeting;
    if (hour < 12) {
      greeting = 'Good Morning, and Welcome to Shangri-La';
    } else if (hour < 18) {
      greeting = 'Good Afternoon, and Welcome to Shangri-La';
    } else {
      greeting = 'Good Evening, and welcome to Shangri-La';
    }
  
    document.getElementById('greeting').textContent = greeting;
  }

  getCancunGreeting();
  
//activate the page nav
  const links = document.querySelectorAll('#menu a');
  const page = window.location.pathname.split('/').pop();

  links.forEach(link => {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  });

//weather
  const apiKey = 'f209b5f4dbe5b1d9d1bbd8ea874d1399';
  const city = 'Cancun';
  const country = 'MX';
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;
  
  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      return response.json();
    })
    .then((data) => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
  
      const weatherText = `Currently: ${temperature}°C • ${description} • Humidity: ${humidity}%  Wind: ${windSpeed} m/s.`;

      document.getElementById('weather-data').textContent = weatherText;
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
      document.getElementById('weather-data').textContent = 'Unable to fetch weather.';
    });
  
  