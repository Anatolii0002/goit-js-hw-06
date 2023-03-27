const listItems = document.querySelector("#categories");
const count = listItems.length;

console.log('Number of categories: ${count}');

listItems.forEach(item => {
console.log('Category: ${item.querySelector("h2").textContent}');
console.log('Elements: ${item.querySelectorAll("li").length}');
});