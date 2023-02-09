const bookmarkButton1 = document.querySelector('[data-js="bookmark-button1"]');
const bookmarkButton2 = document.querySelector('[data-js="bookmark-button2"]');

bookmarkButton1.addEventListener("click", () => {
  bookmarkButton1.classList.toggle("checked");
});

bookmarkButton2.addEventListener("click", () => {
  bookmarkButton2.classList.toggle("checked");
});
