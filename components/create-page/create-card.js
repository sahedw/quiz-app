const questionInput = document.querySelector('[data-js="question"]');
const remainingCharactersQuestion = document.querySelector(
  '[data-js="remaining-characters-question"]'
);
const answerInput = document.querySelector('[data-js="answer"]');
const remainingCharactersAnswer = document.querySelector(
  '[data-js="remaining-characters-answer"]'
);

const tagsInput = document.querySelector('[data-js="tags"]');
const remainingCharactersTags = document.querySelector(
  '[data-js="remaining-characters-tags"]'
);
const submitButton = document.querySelector('[data-js="submit-button"]');

/* The following code is repeating itself and can be shorter through functions. Needs to ask the coaches how in the next session*/

questionInput.addEventListener("input", (event) => {
  let inputValue = event.target.value;
  remainingCharactersQuestion.removeAttribute("hidden");
  let remainingInputCharacters = 150 - inputValue.length;
  remainingCharactersQuestion.innerHTML = `${remainingInputCharacters} characters remaining`;
  if (remainingInputCharacters === 0) {
    remainingCharactersQuestion.style.color = "red";
  } else remainingCharactersQuestion.style.color = "black";
});

answerInput.addEventListener("input", (event) => {
  let inputValue = event.target.value;
  remainingCharactersAnswer.removeAttribute("hidden");
  let remainingInputCharacters = 150 - inputValue.length;
  remainingCharactersAnswer.innerHTML = `${remainingInputCharacters} characters remaining`;
  if (remainingInputCharacters === 0) {
    remainingCharactersAnswer.style.color = "red";
  } else remainingCharactersAnswer.style.color = "black";
});

tagsInput.addEventListener("input", (event) => {
  let inputValue = event.target.value;
  remainingCharactersTags.removeAttribute("hidden");
  let remainingInputCharacters = 40 - inputValue.length;
  remainingCharactersTags.innerHTML = `${remainingInputCharacters} characters remaining`;
  if (remainingInputCharacters === 0) {
    remainingCharactersTags.style.color = "red";
  } else remainingCharactersTags.style.color = "black";
});
