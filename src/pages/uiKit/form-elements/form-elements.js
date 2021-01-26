import IMask from 'imask';

const elements = document.querySelectorAll('input[data-type=masked]');

console.log(elements);

const maskOptions = {
  mask: Date,
};

[...elements].forEach((item) => IMask(item, maskOptions));
