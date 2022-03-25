"use strict";

const faq = document.querySelectorAll(".faq__content");

faq.forEach((faqitem) => {
  // loop through faq and listen for clicks on all faq's.
  faqitem.addEventListener("click", function () {
    // on click loop through each faq again and remove active class.
    faq.forEach((elem) => {
      elem.classList.remove("active");
    });
    // add active class to faq item.
    faqitem.classList.toggle("active");
  });
});
