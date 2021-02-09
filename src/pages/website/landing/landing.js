import $ from 'jquery';

const startInputs = document.querySelectorAll('input.datepicker-here');

let arrivalDates;

const findGuestsCount = (x) => {
  // дальше 20ти делать не стала
  console.log(x);
  if (x === 1) {
    return `${x} гость`;
  }
  if (x === 2 || x === 3 || x === 4) {
    return `${x} гостя`;
  }
  return `${x} гостей`;
};

startInputs.forEach((startInput) => {
  const arrow1 = startInput.nextSibling;
  arrow1.addEventListener('click', () => {
    const myDatepicker = $(startInput).datepicker().data('datepicker');
    myDatepicker.show();
  });

  const [departure] = startInput.closest('.bookingData__dates').querySelectorAll('.departure');
  const [endInput] = departure.querySelectorAll('.input');
  const [arrow2] = departure.querySelectorAll('.input-expansion');
  console.log(arrow2);
  // const arrow2 = endInput.nextSibling;
  arrow2.addEventListener('click', () => {
    const myDatepicker = $(startInput).datepicker().data('datepicker');
    myDatepicker.show();
  });

  $(startInput).datepicker({
    onSelect(formattedDate) {
      arrivalDates = formattedDate;
      console.log(arrivalDates);
      $(startInput).val(formattedDate.split('-')[0]);
      $(endInput).val(formattedDate.split('-')[1]);
    },
  });

  const form = startInput.closest('.search');
  const [guestsBlock] = form.querySelectorAll('.bookingData__guests');
  const [guestsInput] = guestsBlock.querySelectorAll('.input');
  const [showGuestsArrow] = guestsBlock.querySelectorAll('.input-expansion');
  showGuestsArrow.addEventListener('click', () => {
    const [guestsDropdown] = form.querySelectorAll('.guests-dropdown');
    guestsDropdown.classList.toggle('guests-dropdown--hidden');
    guestsDropdown.classList.toggle('guests-dropdown--shown');
    guestsInput.classList.toggle('input--hovered');
    guestsInput.classList.toggle('input--regular');
    guestsInput.classList.toggle('input--half-border-radius');
    guestsInput.classList.toggle('input--full-border-radius');

    const [clearBtn, applyBtn] = guestsDropdown.querySelectorAll('.dropdown-btn');
    const guestsCounts = guestsDropdown.querySelectorAll('.dropdown-item__count');
    clearBtn.addEventListener('click', () => {
      guestsCounts.forEach((node) => {
        // eslint-disable-next-line no-param-reassign
        node.innerText = 0;
      });
      guestsInput.value = 'Сколько гостей';
    });
    applyBtn.addEventListener('click', () => {
      let sum = 0;
      guestsCounts.forEach((node) => {
        // eslint-disable-next-line no-param-reassign
        console.log(node.innerText);
        sum += Number(node.innerText);
      });
      if (sum !== 0) {
        guestsInput.value = findGuestsCount(sum);
      } else {
        guestsInput.value = 'Сколько гостей';
      }
    });
  });
});
