const [filterComfort] = document.querySelectorAll('.filter__comfort');
const [filterComfortArrow] = filterComfort.querySelectorAll('.input-expansion');

filterComfortArrow.addEventListener('click', () => {
  const [filterComfortDropdown] = filterComfort.querySelectorAll('.comfort-dropdown');
  const [filterComfortInput] = filterComfort.querySelectorAll('.input');
  filterComfortDropdown.classList.toggle('comfort-dropdown--hidden');
  filterComfortDropdown.classList.toggle('comfort-dropdown--shown');
  filterComfortInput.classList.toggle('input--hovered');
  filterComfortInput.classList.toggle('input--regular');
});

const [filterAdditionalComfortHidden] = document.querySelectorAll('.filter__additional-comfort');
const [filterAdditionalComfortHiddenArrow] = filterAdditionalComfortHidden.querySelectorAll('.material-icons');

const [filterAdditionalComfortShown] = document.querySelectorAll('.comfort-checkbox');
const [filterAdditionalComfortShownArrow] = filterAdditionalComfortShown.querySelectorAll('.material-icons');

const changeCheckboxVisibility = () => {
  filterAdditionalComfortHidden.classList.toggle('filter__additional-comfort--hidden');
  filterAdditionalComfortHidden.classList.toggle('filter__additional-comfort--shown');
  filterAdditionalComfortShown.classList.toggle('comfort-checkbox--hidden');
  filterAdditionalComfortShown.classList.toggle('comfort-checkbox--shown');
};

filterAdditionalComfortHiddenArrow.addEventListener('click', () => {
  changeCheckboxVisibility();
});

filterAdditionalComfortShownArrow.addEventListener('click', () => {
  changeCheckboxVisibility();
});
