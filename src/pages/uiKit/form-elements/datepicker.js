let form = document.querySelector('.datepicker-here');
console.log(form);
let arriveDate = null, departureDate = null;

$(form).datepicker({
  minDate: new Date(),
  clearButton: true,
  todayButton: true,
  submitButton: true,
  autoClose: true,
  inline: true,
  range: true,
  onSelect: function(fd){
    arriveDate = fd;
  }
});

