const questionInput = document.querySelector('[data-js="question"]');
const remainingCharacters = document.querySelector(
  '[data-js="remaining-characters"]'
);
const answerInput = document.querySelector('[data-js="answer"]');
const submitButton = document.querySelector('[data-js="submit-button"]');

questionInput.addEventListener("input", (event) => {
  let inputValue = event.target.value;
  remainingCharacters.removeAttribute("hidden");
  let remainingInputCharacters = 150 - inputValue.length;
  remainingCharacters.innerHTML = `${remainingInputCharacters} characters remaining`;
  console.log(remainingCharacters.innerHTML);
});
