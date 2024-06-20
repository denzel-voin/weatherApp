import { WeatherReq } from './api';

const displayHeader = document.querySelector('.weather__display-header');
const displayDegrees = document.querySelector('.weather__display-degrees');
const displayDescription = document.querySelector('.weather__display-description');
const detailCondition = document.querySelector('.weather__detail-condition');
const maxTemp = document.querySelector('.max-temp');
const minTemp = document.querySelector('.min-temp');
const humidity = document.querySelector('.humidity');
const cloudy = document.querySelector('.cloudy');
const wind = document.querySelector('.wind');

const render = (data :WeatherReq) => {
	const weatherDetailsElement = document.querySelector('.weather__details');
	weatherDetailsElement.classList.remove('animate');
	setTimeout(() => {
		weatherDetailsElement.classList.add('animate');
	}, 10);
	displayHeader.textContent = data.name;
	displayDegrees.textContent = `${Math.round(data.temp)}°`;
	displayDescription.textContent = `${data.localTime}`;
	detailCondition.textContent = data.text;
	maxTemp.textContent = `${Math.round(data.maxTemp)}°`;
	minTemp.textContent = `${Math.round(data.minTemp)}°`;
	humidity.textContent = `${data.humidity}%`;
	cloudy.textContent = `${data.cloud}%`;
	wind.textContent = `${Math.round(data.wind)}км/ч`;
}

export {render}
