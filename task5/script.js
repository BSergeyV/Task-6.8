input.oninput = function() {
    duplicateField.textContent = input.value;
  };
document.querySelector("#enteredText").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(input.value);
    event.target.reset();
})