const array = ["blue", "red", "black", "", "white", "green"];
const app = document.getElementById("app");

array.forEach((item, index) => {
  app.insertAdjacentHTML("beforeend", `<div id="${index}">${item}</div>`);
});
