import { Notify } from 'notiflix/build/notiflix-notify-aio';
console.log(Notify.info);
export const toNotify = event => {
  Notify.info('Too many matches found. Please enter a more specific name.');
};

export const onError = event => {
  Notify.failure('Oops, there is no country with that name');
};
