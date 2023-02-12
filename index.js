const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');

console.log(bookmarkIcon);

const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer-text"]');
const question = document.querySelector('[data-js="question-text"]');

const questionInput = document.querySelector('[data-js="question"]');
const answerInput = document.querySelector('[data-js="answer"]');
const submitButton = document.querySelector('[data-js="submit-button"]');

bookmarkIcon.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("card__bookmark--checked");
});

answerButton.addEventListener("click", () => {
  answer.classList.toggle("answer--hidden");

  if (answer.classList.value === "hidden") {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
});
