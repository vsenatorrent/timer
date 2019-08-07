// var dec = 'December 31 2017';


// function init(par) {
//   function getTime(par) {
//     var t = Date.parse(par) - Date.parse(new Date());
//     var seconds = Math.floor((t / 1000) % 60);
//     var minutes = Math.floor((t / 1000 / 60) % 60);
//     var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//     var days = Math.floor(t / (1000 * 60 * 60 * 24));
//     return {
//       'total': t,
//       'sekund': seconds,
//       'minut': minutes,
//       'chasov': hours,
//       'dney': days
//     }
//   }
//   var days = document.querySelector('.days'),
//     hours = document.querySelector('.hours'),
//     minutes = document.querySelector('.minutes'),
//     seconds = document.querySelector('.seconds');
//   var interval = setInterval(function () {
//     var n = getTime(par);
//     days.innerHTML = ('0' + n.dney).slice(-3);
//     hours.innerHTML = ('0' + n.chasov).slice(-2);
//     minutes.innerHTML = ('0' + n.minut).slice(-2);
//     seconds.innerHTML = ('0' + n.sekund).slice(-2);
//     if (n.total <= 0) {
//       clearInterval(interval);
//     }
//   }, 1000)
//   var p = document.querySelector('.zag');
//   p.innerHTML = 'До 31 декабря 2017 года осталось:'
// }

// init(dec);

// console.log(moment().endOf("year"))


const formatMsToDate = (ms) => {
  const total = ms;
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total: total,
    days: days < 10 ? '0' + days : days,
    hours: hours < 10 ? '0' + hours : hours,
    minutes: minutes < 10 ? '0' + minutes : minutes,
    seconds: seconds < 10 ? '0' + seconds : seconds, 
  }
}

const appendTime = formattedTime => {
  const daysElement = document.querySelector('.days');
  const hoursElement = document.querySelector('.hours');
  const minutesElement = document.querySelector('.minutes');
  const secondsElement = document.querySelector('.seconds');
  daysElement.textContent = formattedTime.days;
  hoursElement.textContent = formattedTime.hours;
  minutesElement.textContent = formattedTime.minutes;
  secondsElement.textContent = formattedTime.seconds;
}

const endOFYear = new Date(2019, 11, 31, 23, 59, 59, 59);

const timer = setInterval(function(){
  const leftTimeEndOfYear = endOFYear - new Date();
  const formatLeftTime = formatMsToDate(leftTimeEndOfYear);
  appendTime(formatLeftTime);
  if(formatLeftTime.total <= 0) {
    clearInterval(timer);
  }
},1000)


