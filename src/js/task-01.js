const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(В сспику ${categoriesItems.length} категорії.);

categoriesItems.forEach(item => {
const heading = item.querySelector("h2").textContent;
const itemsLength = item.querySelectorAll("li").length;
console.log(Категорія: ${heading} \nКількість елементів: ${itemsLength});
});