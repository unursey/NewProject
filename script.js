"use strict";

/* Добрый день (утро, вечер, ночь)
Сегодня: Понедельник
Текущее время: 12:05:15 PM
До нового года осталось 175 дней */

const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

let dateNow = new Date();
let dateNg = new Date("31 Decamber 2022");

let time = dateNow.toLocaleTimeString("en");

let timeRemaining = (dateNg - dateNow) / 1000;
let daysNg = Math.floor(timeRemaining / 60 / 60 / 24);

const hours = function () {
  if (dateNow.getHours() >= 6 && dateNow.getHours() < 12) {
    return "Доброе утро!";
  }
  if (dateNow.getHours() >= 12 && dateNow.getHours() < 18) {
    return "Добрый день!";
  }
  if (dateNow.getHours() >= 18 && dateNow.getHours() < 23) {
    return "Добрый вечер!";
  }
  if (dateNow.getHours() >= 23 || dateNow.getHours() < 6) {
    return "Доброй ночи!";
  }
};

let day = days[dateNow.getDay()];

function dayLast(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}

let div = document.createElement("div");
div.className = "hello";
div.innerHTML =
  hours() +
  "<br>" +
  "Сегодня: " +
  day +
  "<br>" +
  "Текущее время:  " +
  time +
  "<br>" +
  "До нового года осталось " +
  daysNg +
  " " +
  dayLast("daysNg", "день", "дня", "дней");

document.body.append(div);
