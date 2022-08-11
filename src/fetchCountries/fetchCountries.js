const BASE_URL = 'https://restcountries.com/v3.1/name/';
const REQUEST_TYPE = '?fields=name,capital,population,flags,languages';

export const fetchCountries = name => {
  console.log(name);
  return fetch(BASE_URL + name + REQUEST_TYPE)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })

};
