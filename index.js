// phew… not a lot going on here. Please add some code!
const bookmark = document.querySelector("[data-js=bookmark]");
bookmark.addEventListener("click", () => {
bookmark.classList.toggle("bookmark--active");

});

const answerButton = document.querySelector("[data-js=answer-button]");
const cardAnswer = document.querySelector("[data-js=card-answer]");
answerButton.addEventListener("click", () => {
cardAnswer.classList.toggle("card__answer--active");

if (cardAnswer.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide answer";
     } else {answerButton.textContent = "Show answer";

 } 
});
