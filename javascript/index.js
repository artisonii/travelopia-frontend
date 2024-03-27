const modelOpenButton = document.getElementById("modal-open-button");
const modal = document.getElementById("modal");
const modalCloseButton = document.getElementById("modal-button");

modelOpenButton.addEventListener("click", () => {
  modal.style.display = "flex";
});
modalCloseButton.addEventListener("click", () => {
  modal.style.display = "none";
});
