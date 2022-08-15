

fetch('https://api.openweathermap.org/data/2.5/weather?id=519690&appid=56419bb5681953469aa634b19499c17d')
  .then(function (resp) { return resp.json() })
  .then(function (data) {
    console.log(data);
    let date = new Date;
    document.querySelector('.widget__top-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
    document.querySelector('.widget__gradus').innerHTML = `${Math.round(data.main.temp - 273)}&deg; `;
    document.querySelector('.widget__city').innerHTML = `${data.name}`;
    setInterval(() => {
      getTime()
    }, 1);
    document.querySelector('.widget__date').textContent = `${date.getDate()}/0${date.getMonth()}/${date.getFullYear()}`;
  })

function getTime() {
  let date = new Date;
  let count = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  document.querySelector('.widget__time').innerHTML = count;
}