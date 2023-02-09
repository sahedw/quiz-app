const bookmarkButton1 = document.querySelector('[data-js="bookmark-button1"]');
const bookmarkButton2 = document.querySelector('[data-js="bookmark-button2"]');

const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer-text"]');
const question = document.querySelector('[data-js="question-text"]');

bookmarkButton1.addEventListener("click", () => {
  bookmarkButton1.classList.toggle("checked");
});

bookmarkButton2.addEventListener("click", () => {
  bookmarkButton2.classList.toggle("checked");
});

answerButton.addEventListener("click", () => {
  answer.classList.toggle("answer--hidden");

  if (answer.classList.value === "hidden") {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
});
