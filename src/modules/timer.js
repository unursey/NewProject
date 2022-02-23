const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    //let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, hours, minutes, seconds };
  };

  let setIn = 0;

  const updateClock = () => {
    let getTime = getTimeRemaining();

    const addZero = (number) => {
      return String(number).length === 1 ? `0${number}` : number;
    };

    timerHours.textContent = addZero(getTime.hours);
    timerMinutes.textContent = addZero(getTime.minutes);
    timerSeconds.textContent = addZero(getTime.seconds);

    if (getTime.timeRemaining < 0) {
      clearInterval(setIn);
      timerSeconds.textContent = "00";
      timerMinutes.textContent = "00";
      timerHours.textContent = "00";
    }
  };
  updateClock();
  setIn = setInterval(updateClock, 1000);
};

export default timer;
