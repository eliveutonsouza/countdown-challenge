import Countdown from "./module/countdown.js";

const diasParaONatal = new Countdown("24 December 2022 23:59:59 GMT-0300");

// Seta um intervalo de 1seg para
// atualizar as info

const days = document.querySelector(".days")
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")

setInterval(() => {
  days.innerText = diasParaONatal.total.days
  hours.innerText = diasParaONatal.total.hours
  minutes.innerText = diasParaONatal.total.minutes
  seconds.innerText = diasParaONatal.total.seconds

}, 1000)

