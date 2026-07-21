let $ = document;
let explainBtn = $.querySelector(".explain-btn");
let explainBtn1 = $.querySelector(".explain-btn1");
let explainBody = $.querySelector(".explain-body");

explainBtn.addEventListener("click", () => {
  explainBody.classList.add("toggeled");
  explainBtn.classList.add("hidden");
  explainBtn1.classList.remove("hidden");
});

explainBtn1.addEventListener("click", () => {
  explainBody.classList.remove("toggeled");
  explainBtn.classList.remove("hidden");
  explainBtn1.classList.add("hidden");
});

const firstAccordionButton = document.querySelectorAll(".accordion-button");
firstAccordionButton.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
  });
})
