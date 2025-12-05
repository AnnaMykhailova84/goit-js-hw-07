console.log('hi');

// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

const block = document.querySelector('.block');
console.log(block);

const newTechnologies = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'TypeScript',
  'Node.js',
];
const markup = newTechnologies
  .map(technology => `<li class="list-item new">${technology}</li>`)
  .join('');

block.insertAdjacentHTML(
  'beforebegin',
  '<h2>beforebegin => Popular technologies</h2>'
);
block.insertAdjacentHTML(
  'afterbegin',
  '<h2>afterbegin => Popular technologies</h2>'
);
block.insertAdjacentHTML(
  'beforeend',
  '<h2>beforeend => Popular technologies</h2>'
);
block.insertAdjacentHTML(
  'afterend',
  '<h2>afterend => Popular technologies</h2>'
);

block.insertAdjacentHTML('beforeend', markup);



const button = document.querySelector('.my-button');

// button.addEventListener("click", () => {
//   console.log("The button was pressed and now the next image will appear");
// });

// const handleClick = () => {
//   console.log("The button was pressed and now the next image will appear");
// };

const handleClick = (event) => {
  // console.log('event: ', event);
  // console.log('event type: ', event.type);
  // console.log('currentTarget: ', event.currentTarget);
  // console.log('MESSAGE => The button was pressed and now the next image will appear');
};

button.addEventListener('click', handleClick);

// document.addEventListener("keydown", event => {
//   console.log("Keydown: ", event);
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });

// document.addEventListener("keyup", event => {
//   console.log("Keyup: ", event);
// });


// =========================================================================

const registerForm = document.querySelector(".form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {  
  console.log(`event = ${event}`);
  console.log(event);
  
  event.preventDefault();
  const form = event.target;
  console.log(`form = ${form}`);
  console.log(form);
  
  const login = form.elements.login.value;
  console.log(`login = ${login}`);
  console.log(login);
  const password = form.elements.password.value;
  console.log(`password = ${password}`);
  console.log(password);
  
  if (login === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}

// ==============================================================

const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

select.addEventListener("change", setOutput);

function setOutput(event) {
  console.log('event =>');
  console.log(event);
  
  const selectedOptionValue = event.currentTarget.value;
  console.log('selectedOptionValue =>');
  console.log(selectedOptionValue);
  
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  console.log('selectedOptionIndex =>');
  console.log(selectedOptionIndex);
  const selectedOptionText =
  event.currentTarget.options[selectedOptionIndex].text;
  console.log('selectedOptionText =>');
  console.log(selectedOptionText);

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}

const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");
// console.log(output);

textInput.style.width = '100%';
textInput.style.height = '30px';
output.parentNode.style.width = "100%";
output.parentNode.style.textAlign = 'left';
textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});

// =========================================================

const searchEl = document.querySelector('ul.task-list > li:last-child > a');

console.log(searchEl);

// const searchElAll = [...document.querySelectorAll('li')]; // These both styles do the same !!!
// const searchElAll = Array.from(document.querySelectorAll('li'));//  These both styles do the same !!!


const refs = {
  liAllEl: [...document.querySelectorAll('li')],
  inputAllEl: Array.from(document.querySelectorAll('input')),
  buttonNext: document.querySelector('.my-button'),
  inputPass: document.querySelector('.js-input'),
  visiblePointEl: document.querySelector('.visible-point'),
}

// console.log(refs.liAllEl);
// console.log(refs.inputAllEl);
// console.log(refs.buttonNext.type);
// console.log(refs.inputPass.type = 'text');
// console.log(refs.inputPass); 



setTimeout(() => { 
  refs.buttonNext.textContent = 'Next again';
  refs.buttonNext.style.backgroundColor = 'red';
  refs.buttonNext.style.padding = '10px';
  refs.buttonNext.style.color = '#fff';
  // refs.inputPass.type = 'text';
  // console.log(refs.inputPass.type);
    
}, 2000);

refs.visiblePointEl.addEventListener('click', () => { 
  refs.visiblePointEl.classList.toggle('visible');
  if (refs.visiblePointEl.classList.contains('visible')) {
    console.log('has class visible');    
    refs.inputPass.type = 'text';
  } else { 
    console.log('not visible anymore  ');
    refs.inputPass.type = 'password'; 
  }
}); 

