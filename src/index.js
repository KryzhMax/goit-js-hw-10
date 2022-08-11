import './css/styles.css';
import { fetchCountries } from './fetchCountries/fetchCountries';
import { refs } from './refs';
import debounce from 'lodash.debounce';
import { renderCountryList, renderCountry } from './markup';
import { updateMarkup } from './service';
import { onError, toNotify } from './notifications';

const { inputRef } = refs;
console.log(refs);
const DEBOUNCE_DELAY = 300;

const getCountry = country => {
  fetchCountries(country)
    .then(data => {
      const render = data;
      console.log(render);
      if (render.length === 1) {
        console.log(renderCountry(data));
        updateMarkup('', 'countryListRef');
        return updateMarkup(renderCountry(data), 'countryInfoRef');
      }
      if (render.length > 1 && render.length <= 10) {
        updateMarkup('', 'countryInfoRef');
        updateMarkup(renderCountryList(data), 'countryListRef');
      } else {
        toNotify();
      }
    })
    .catch(() => {
      onError();
      updateMarkup();
    });
};

const onInputChange = debounce(event => {
  event.preventDefault();
  let value = event.target.value.trim();
  console.log(value);
  if (!value) {
    updateMarkup('', 'countryInfoRef');
    updateMarkup('', 'countryListRef');
    return;
  }
  getCountry(value);
}, DEBOUNCE_DELAY);

inputRef.addEventListener('input', onInputChange);
