document.addEventListener("DOMContentLoaded", function () {
  const plusButtons = document.querySelectorAll(".faq__button.plus");
  const minusButtons = document.querySelectorAll(".faq__button.minus");
  const answerContainers = document.querySelectorAll(".faq__answers");

  plusButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      plusButtons[index].setAttribute("hidden", true);
      minusButtons[index].removeAttribute("hidden");

      answerContainers[index].removeAttribute("hidden");
    });
  });

  minusButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      minusButtons[index].setAttribute("hidden", true);
      plusButtons[index].removeAttribute("hidden");

      answerContainers[index].setAttribute("hidden", true);
    });
  });
});
