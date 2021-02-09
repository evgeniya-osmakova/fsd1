import $ from 'jquery';

require('air-datepicker');

$('.datepicker-here').datepicker({
  clearButton: true,
  todayButton: true,
  prevHtml: '<span class="material-icons datepicker--arrow">arrow_back</span>',
  nextHtml: '<span class="material-icons datepicker--arrow">arrow_forward</span>',
  range: true,
  navTitles: {
    days: 'MM yyyy',
  },
  autoClose: true,
  minDate: new Date(),
  multipleDatesSeparator: ' - ',
});

const datepickers = document.querySelectorAll('.datepicker');

datepickers.forEach((datepicker) => {
  const [todayBtn] = datepicker.querySelectorAll('[data-action="today"]');
  todayBtn.textContent = 'Применить';
  todayBtn.addEventListener('click', (event) => {
    event.preventDefault();
    datepicker.classList.remove('active');
  });
});
