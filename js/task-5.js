function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body'),
  btnColor = document.querySelector('.change-color'),
  spanEl = document.querySelector('span.color');

btnColor.addEventListener('click', () => {
  const newBackgroundColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newBackgroundColor;
  spanEl.textContent = newBackgroundColor;
});
