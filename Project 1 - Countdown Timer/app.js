const selectedDate = document.querySelector(".date-selector");
const eventTitle = document.querySelector(".event-title");
const createCountdown = document.querySelector(".create-countdown");
const countdownTimer = document.querySelector(".countdown-wrap");
const countdownCreator = document.querySelector(".countdown-creator");
const countdownTitle = document.querySelector(".countdown-title");
const daysText = document.querySelector(".days");
const hoursText = document.querySelector(".hours");
const minutesText = document.querySelector(".minutes");
const secondsText = document.querySelector(".seconds");
const clearEvent = document.querySelector(".clear-event");

const calculateTimeRemaining = () => {
  const event = JSON.parse(localStorage.getItem("event"));
  const timeSelected = event.date;
  countdownTitle.innerHTML = event.title;
  setInterval(() => {
    if (localStorage.getItem("event")) {
      const currentTime = new Date().getTime();

      countdownCreator.classList.add("display-none");
      countdownTimer.classList.remove("display-none");

      const timeRemaining = timeSelected - currentTime;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      daysText.innerHTML = days;
      hoursText.innerHTML = hours;
      minutesText.innerHTML = minutes;
      secondsText.innerHTML = seconds;
    } else {
      clearInterval();
    }
  });
};

createCountdown.addEventListener("click", () => {
  localStorage.setItem(
    "event",
    JSON.stringify({
      title: eventTitle.value,
      date: new Date(selectedDate.value).getTime(),
    })
  );
  selectedDate.value = null;
  eventTitle.value = null;
  calculateTimeRemaining();
});

clearEvent.addEventListener("click", () => {
  localStorage.removeItem("event");
  countdownCreator.classList.remove("display-none");
  countdownTimer.classList.add("display-none");
});

if (localStorage.getItem("event")) {
  calculateTimeRemaining();
}
