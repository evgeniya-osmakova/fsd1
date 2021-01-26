const plusCount = document.querySelectorAll('[data-type=plus]');
const minusCount = document.querySelectorAll('[data-type=minus]');
const showHideIcon = document.querySelectorAll('[data-type=dropdown]');

[...plusCount].forEach((elem) => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    const counter = elem.parentElement.querySelector('.dropdown-item__text');
    const counterValue = counter.innerText;
    console.log(counterValue);
    counter.innerHTML = String(Number(counterValue) + 1);
    if (Number(counterValue) === 0) {
      const modifier = elem.previousElementSibling.previousElementSibling.querySelector('.dropdown-item__modifier');
      modifier.classList.remove('dropdown-item__modifier--inactive');
      modifier.classList.add('dropdown-item__modifier--active');
    }
  });
});

[...minusCount].forEach((elem) => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    const counter = elem.parentElement.querySelector('.dropdown-item__text');
    const counterValue = counter.innerText;
    console.log(counterValue);
    if (Number(counterValue) > 0) {
      counter.innerHTML = String(Number(counterValue) - 1);
    }
    if (Number(counterValue) === 1) {
      const modifier = elem.querySelector('.dropdown-item__modifier');
      modifier.classList.remove('dropdown-item__modifier--active');
      modifier.classList.add('dropdown-item__modifier--inactive');
    }
  });
});
