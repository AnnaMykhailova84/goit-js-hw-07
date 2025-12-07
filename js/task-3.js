const inputField = document.querySelector('input#name-input'),
  outputField = document.querySelector('span#name-output');

inputField.addEventListener('input', handlerInput);

function handlerInput(event) {
  const nameInput = event.target.value.trim();
  if (nameInput === '') {
    outputField.textContent = 'Anonymous';
    // console.log(outputField.textContent = 'Anonymous');
  } else {
    outputField.textContent = `${nameInput}`;
    // console.log(outputField.textContent = `${nameInput}`);
  }
}
