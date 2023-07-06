//Element and button targets
const quoteContent = document.querySelector("#quote");
const quoteNumber = document.querySelector("#number");
const randomQuoteBtn = document.querySelector(".dice");

const BASE_URL = "https://api.adviceslip.com/advice";

randomQuoteBtn.addEventListener("click", () => {
  fetch(BASE_URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const slip = data.slip.advice;
      const slipId = data.slip.id;

      quoteNumber.textContent = `#${slipId}`;
      quoteContent.textContent = `" ${slip} "`;
      //   console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
});
