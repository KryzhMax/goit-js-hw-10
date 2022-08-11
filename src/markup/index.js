export const renderCountry = (data = []) => {
  return data
    .map(({ name, capital, population, flags, languages }) => {
      return `<p><img src="${flags.svg}" alt="flag" width="30"></p>
        <p><b>Country:</b> ${name.common}</p>
        <p><b>Population:</b> ${population}</p>
        <p><b>Capital:</b> ${capital}</p> 
        <p><b>Languages:</b> ${Object.values(languages)}</p>`;
    })
    .join('');
};

export const renderCountryList = (data = []) => {
  return data
    .map(({ name, flags }) => {
      return `<li><img src="${flags.svg}" alt="flag" width="30"><span>${name.common}</span> </li>`;
    })
    .join('');
};

