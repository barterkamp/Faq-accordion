"use strict";

const faq = document.querySelectorAll(".faq__content");

faq.forEach((faq) => {
  faq.addEventListener("click", function () {
    faq.classList.toggle("active");
  });
});
