const screen = document.querySelector("display");
const buttons = document.querySelectorAll(".numbers");

console.log(buttons);
console.log(screen);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    screen.textContent += buttons[i].textContent;
  });
}
