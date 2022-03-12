// Vars
const rangeSliders = document.querySelectorAll("input");
const body = document.querySelector("body");
const rgbaValue = document.querySelector("h2");
let rValueSlider;
let gValueSlider;
let bValueSlider;
let aValueSlider;

// updates all the values for rgba
const updateRgba = (range) => {
  if (range.classList.value === "r-value-slider") {
    rValueSlider = range.value;
  }
  if (range.classList.value === "g-value-slider") {
    gValueSlider = range.value;
  }
  if (range.classList.value === "b-value-slider") {
    bValueSlider = range.value;
  }
  if (range.classList.value === "a-value-slider") {
    aValueSlider = range.value;
  }
};

const setRgba = () => {
  body.style.backgroundColor = `rgba(${rValueSlider}, ${gValueSlider}, ${bValueSlider}, ${aValueSlider})`;
  rgbaValue.innerText = `rgba: (${rValueSlider}, ${gValueSlider}, ${bValueSlider}, ${aValueSlider})`;
};

// initial setting of rgba on page load
const initRgba = () => {
  rangeSliders.forEach((range) => {
    updateRgba(range);
  });
  setRgba();
};

// listens for input change, and updates the rgba value
// according to which slider is being updated
rangeSliders.forEach((range) => {
  range.addEventListener("input", () => {
    updateRgba(range);
    setRgba();
  });
});

initRgba();
