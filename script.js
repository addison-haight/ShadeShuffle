/* 
  ===== Shade Shuffle Logic =====
  This script handles the background color change when the button is clicked.
  Students will write the logic to generate a random color and update the display.
*/

/* Step 1: Select the necessary HTML elements
   - The button (to trigger the color shuffle)
   - The span (to display the new color code)
*/
const btn = document.getElementById("btn");
const colorCode = document.getElementById("color-code");

/* Step 2: Write a function that generates a random hex color code
   - Hint: A hex color starts with '#' followed by 6 characters (0–9 or A–F).
   - Example: #A1B2C3
   - You can use Math.random() and Math.floor() to pick random characters.
*/
function randomColor() {
  // TODO: Write logic to build and return a random hex color string
  let color = "#";
  const hex = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    let randomChar = hex[Math.floor(Math.random() * 16)];
    color = color + randomChar;
  }
  return color;
}

/* Step 3: Handle button click event
   - When the button is clicked:
       1. Generate a new random color using randomColor()
       2. Change the background color of the page
       3. Update the text inside <span> to show the new color code
*/
btn.onclick = function () {
  // TODO: Call the randomColor() function and store the result
  newColor = randomColor();
  // TODO: Update the background color of the body
  document.body.style.backgroundColor = newColor;
  // TODO: Update the text content of colorCode span
  colorCode.textContent = newColor;
};
