import IMask from 'imask';

const elements = document.querySelectorAll('input[data-type=masked]');

const maskOptions = {
  mask: Date,
};

[...elements].forEach((item) => IMask(item, maskOptions));
