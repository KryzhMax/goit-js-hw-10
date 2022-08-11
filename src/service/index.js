import { refs } from '../refs';

export const updateMarkup = (markup = '', elem) => {
  refs[elem].innerHTML = markup;
};

export const clearMarkup = () => {
  console.log(refs.countryInfoRef, refs.countryListRef, refs);

  refs.countryInfoRef.innerHTML = '';
  refs.countryListRef.innerHTML = '';
};
