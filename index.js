const inputName = document.getElementById("cardholdeName");
const inputCArd = document.getElementById("card-number");
const inputMonth = document.getElementById("expiry-month");
const inputYear = document.getElementById("expiry-year");
const inputCvc = document.getElementById("cvc");

const nameCard = document.querySelector(".name");
const numberCard = document.querySelector(".numberCard");
const dateMonth = document.querySelector(".dateMonth");
const dateYear = document.querySelector(".years");
const cvcCard = document.querySelector(".cvc");

const maxLength = 15;

const liveTapinginput = function (e) {
  const liveId = e.target.id;
  let living = document.getElementById(liveId);
  if (liveId === "cardholdeName") {
    living.addEventListener("input", (e) => {
      const livetaping = e.target.value;
      nameCard.textContent = `${livetaping}`;
    });
  } else if (liveId === "card-number") {
    living.addEventListener("input", (e) => {
      const livetaping = e.target.value;
      let formattedValue = livetaping.replace(/\s/g, "");
      let displayValue = "".slice(0, 4);

      for (let i = 0; i < formattedValue.length; i++) {
        if (i > 0 && i % 4 === 0) {
          displayValue += " ";
        }
        displayValue += formattedValue[i];
      }
      numberCard.textContent = displayValue;

      console.log(displayValue.length);
      if (livetaping.length = maxLength) {
        living.value = living.value.slice(0, maxLength );
      }
    });
  } else if (liveId === "expiry-month") {
    living.addEventListener("input", (e) => {
      const livetaping = e.target.value;
      dateMonth.textContent = ` ${livetaping} `.slice(0, 3);
      living.value = living.value.slice(0, 2);
    });
  } else if (liveId === "expiry-year") {
    living.addEventListener("input", (e) => {
      const livetaping = e.target.value;
      dateYear.textContent = `${livetaping}`.slice(0, 2);
      living.value = living.value.slice(0, 2);
    });
  } else {
    living.addEventListener("input", (e) => {
      const livetaping = e.target.value;
      cvcCard.textContent = `${livetaping}`.slice(0, 3);
      living.value = living.value.slice(0, 3);
    });
  }
};

inputName.addEventListener("click", liveTapinginput);
inputCArd.addEventListener("click", liveTapinginput);
inputMonth.addEventListener("click", liveTapinginput);
inputYear.addEventListener("click", liveTapinginput);
inputCvc.addEventListener("click", liveTapinginput);
