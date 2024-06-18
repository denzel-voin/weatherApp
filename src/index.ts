import './sass/styles.sass'
import './components/api'
import './components/render'
import { request, apiKey, WeatherReq } from './components/api';
import { displayDegrees, displayDescription, displayHeader } from './components/render';

const form = document.querySelector('.header__form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const inputElement = document.querySelector('#header__form-input') as HTMLInputElement;
	if (inputElement) {
		const inputValue: string = inputElement.value;
		fetch(`${request}${apiKey}&q=${inputValue}&lang=ru`)
			.then(respone => respone.json())
			.then(result => {
				const data :WeatherReq = new WeatherReq(result);
				console.log(data);
				displayHeader.textContent = data.name;
				displayDegrees.textContent = `${Math.round(data.temp)}°`;
				displayDescription.textContent = `${data.localTime}`
			})
			.catch(error => console.error(error))
	} else {
		console.error('Input element not found');
	}
})
