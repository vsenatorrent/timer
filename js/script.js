var dec = 'December 31 2017';


function init(par) {
  function getTime(par) {
    var t = Date.parse(par) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'sekund': seconds,
      'minut': minutes,
      'chasov': hours,
      'dney': days
    }
  }
  var days = document.querySelector('.days'),
    hours = document.querySelector('.hours'),
    minutes = document.querySelector('.minutes'),
    seconds = document.querySelector('.seconds');
  var interval = setInterval(function () {
    var n = getTime(par);
    days.innerHTML = ('0' + n.dney).slice(-3);
    hours.innerHTML = ('0' + n.chasov).slice(-2);
    minutes.innerHTML = ('0' + n.minut).slice(-2);
    seconds.innerHTML = ('0' + n.sekund).slice(-2);
    if (n.total <= 0) {
      clearInterval(interval);
    }
  }, 1000)
  var p = document.querySelector('.zag');
  p.innerHTML = 'До 31 декабря 2017 года осталось:'
}

init(dec);