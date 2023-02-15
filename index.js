const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer-text"]');
const question = document.querySelector('[data-js="question-text"]');

bookmarkIcon.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("card__bookmark--checked");
});

answerButton.addEventListener("click", () => {
  answer.classList.toggle("answer--hidden");

  if (answer.classList.value === "answer--hidden") {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
});
