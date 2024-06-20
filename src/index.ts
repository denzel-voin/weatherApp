import './sass/styles.sass'
import './components/api'
import './components/render'
import { getWeatherInfo, WeatherReq } from './components/api';
import { render } from './components/render';

const form = document.querySelector('.header__form');

getWeatherInfo()
	.then(result => {
		const data :WeatherReq = new WeatherReq(result);
		render(data)
	})
	.catch(error => console.error(error))

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const inputElement = document.querySelector('#header__form-input') as HTMLInputElement;
	if (inputElement) {
		const inputValue: string = inputElement.value;
		getWeatherInfo(inputValue)
			.then(result => {
				const data :WeatherReq = new WeatherReq(result);
				inputElement.value = '';
				render(data);
			})
			.catch(error => console.error(error))
	} else {
		console.error('Input element not found');
	}
})
