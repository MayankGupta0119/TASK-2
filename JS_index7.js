const startAnimationButton = document.getElementById("startAnimationButton");
const stopAnimationButton = document.getElementById("stopAnimationButton");
const trainImage = document.querySelector("img");

startAnimationButton.addEventListener("click", () => {
  trainImage.style.animationName = "moveTrainAnimation";
  trainImage.style.animationDuration = "5s";
});

stopAnimationButton.addEventListener("click", () => {
  trainImage.style.animationPlayState = "paused";
});
