import { refs } from '../refs';

export const updateMarkup = (markup = '', elem) => {
  refs[elem].innerHTML = markup;
};
