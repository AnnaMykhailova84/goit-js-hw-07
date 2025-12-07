const categoriesEl = document.getElementById('categories');

const numberOfCategories = categoriesEl.querySelectorAll('li.item').length;

console.log(`Number of categories: ${numberOfCategories}`);

const categoriesList = [...categoriesEl.querySelectorAll('li.item')];

categoriesList.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});
