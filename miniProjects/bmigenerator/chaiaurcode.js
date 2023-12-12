const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height < 0 || height === '' || isNaN(height)) {
    result.innerHTML = `Entered height ${height} is invalid.`;
  } else if (weight < 0 || weight === '' || isNaN(weight)) {
    result.innerHTML = `Entered height ${weight} is invalid.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) result.innerHTML = `<span>${bmi}: You are under weight</span>`;
    else if ((bmi > 18.6) & (bmi < 24.9)) result.innerHTML = `<span>${bmi}: You are Normal</span>`;
    else result.innerHTML = `<span>${bmi}: You are Over weight.</span>`;
  }
});
