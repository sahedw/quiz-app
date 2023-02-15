/* QuerySelectors */

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

const main = document.querySelector('[data-js="main"]');
const form = document.querySelector('[data-js="form"]');
const submitButton = document.querySelector('[data-js="submit-button"]');

/* Evenlistiners */

questionInput.addEventListener("input", (event) => {
  inputCounter(remainingCharactersQuestion, event, 150);
});

answerInput.addEventListener("input", (event) => {
  inputCounter(remainingCharactersAnswer, event, 150);
});

tagsInput.addEventListener("input", (event) => {
  inputCounter(remainingCharactersTags, event, 40);
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  newCard(questionInput, answerInput, tagsInput);
});

/* Functions */

function inputCounter(remainingCharacters, event, limit) {
  let inputValue = event.target.value;
  remainingCharacters.removeAttribute("hidden");
  let remainingInput = limit - inputValue.length;
  remainingCharacters.innerHTML = `${remainingInput} characters remaining`;
  if (inputValue.length > 130) {
    remainingCharacters.style.color = "red";
  } else remainingCharacters.style.color = "black";
}

function newCard(qInput, aInput, tInput) {
  const newCard = document.createElement("section");
  newCard.classList.add("card");
  main.append(newCard);

  const newCardQuestion = document.createElement("p");
  newCardQuestion.textContent = qInput.value;
  newCard.append(newCardQuestion);

  const newCardAnswer = document.createElement("p");
  newCardAnswer.textContent = aInput.value;
  newCard.append(newCardAnswer);

  const newCardButton = document.createElement("button");
  newCardButton.textContent = "Hide Answer";
  newCard.append(newCardButton);

  const newCardBookmark = document.createElement("img");
  newCardBookmark.classList.add("card__bookmark");
  newCardBookmark.src = "/imgs/bookmark-untagged.png";
  newCard.append(newCardBookmark);

  const newCardTagsList = document.createElement("ul");
  const newCardTags = document.createElement("li");
  newCardTags.textContent = `#${tInput.value}`;
  newCardTagsList.classList.add("card__hashtags");
  newCardTags.classList.add("card__hashtags__items");
  newCard.append(newCardTagsList);
  newCardTagsList.append(newCardTags);
}
