"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const modalBody = document.querySelector(".modal-body");

export const openModal = function () {
  console.log(`Button clicked`);
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");

  modalBody.innerHTML = "";
};
btnCloseModal.addEventListener(`click`, closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener(`keydown`, function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
