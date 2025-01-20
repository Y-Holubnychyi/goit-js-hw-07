const categories = document.querySelector("#categories");
const items = categories.children;

console.log("Number of categories:", items.length);

for (const item of items) {
  const title = item.firstElementChild.textContent;
  const elementsCount = item.lastElementChild.children.length;

  console.log("Category:", title);
  console.log("Elements:", elementsCount);
}
