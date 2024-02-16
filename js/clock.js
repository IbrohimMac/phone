const hourClock = document.querySelector(".hour");
const minutClock = document.querySelector(".minute");
const secundClock = document.querySelector(".second");
const dateClock = document.querySelector(".date");

let hour, minut, secund, res;
function getDate() {
  date = new Date();
  hour = +date.getHours();
  minut = +date.getMinutes();
  secund = +date.getSeconds();
}
function getInfo() {
  getDate();
  hourClock.textContent = `${hour < 10 ? "0" + hour : hour}`;
  minutClock.textContent = `${minut < 10 ? "0" + minut : minut}`;
  secundClock.textContent = `${secund < 10 ? "0" + secund : secund}`;
}
getInfo();
setInterval(() => {
  getInfo();
}, 1000);
