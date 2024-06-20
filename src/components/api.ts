const apiKey :string = '636d223848964bdaae6193620241506';

interface Location {
	name: string;
	localtime: string;
}

interface Condition {
	text: string;
}

interface Current {
	temp_c: number;
	condition: Condition;
	wind_kph: number;
	humidity: number;
	cloud: number;
}

interface Day {
	maxtemp_c: number;
	mintemp_c: number;
}

interface ForecastDay {
	date: string;
	date_epoch: number;
	day: Day;
}

interface Forecast {
	forecastday: ForecastDay[];
}

interface WeatherResponse {
	location: Location;
	current: Current;
	forecast: Forecast
}

class WeatherReq {
	name: string;
	localTime: string;
	temp: number;
	text: string;
	wind: number;
	humidity: number;
	cloud: number;
	maxTemp: number;
	minTemp: number;

	constructor(response: WeatherResponse) {
		this.name = response.location.name;
		this.localTime = response.location.localtime;
		this.temp = response.current.temp_c;
		this.text = response.current.condition.text;
		this.wind = response.current.wind_kph;
		this.humidity = response.current.humidity;
		this.cloud = response.current.cloud;
		this.maxTemp = response.forecast?.forecastday[0].day.maxtemp_c ?? 0;
		this.minTemp = response.forecast?.forecastday[0].day.mintemp_c ?? 0;
	}
}

const config = {
	baseUrl: 'http://api.weatherapi.com/v1',
	headers: {
		authorization: '636d223848964bdaae6193620241506',
		'Content-Type': 'application/json'
	}
}

const checkResponse = (res :Response) => {
	if(res.ok) {
		return res.json();
	} else {
		return Promise.reject(`Ошибка: ${res.status}`);
	}
}

const getWeatherInfo = (value :string = 'Москва') => {
	return fetch(`${config.baseUrl}/forecast.json?key=${apiKey}&q=${value}&lang=ru`, {
		method: 'GET',
		headers: config.headers
	})
		.then(res => checkResponse(res));
}

export {WeatherReq, getWeatherInfo}
