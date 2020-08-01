//document.writeln("Hello, World!");

// the isNan(number) function tells you if a value is a number or not,
// if you type a number in the pass through it will return false because the value is an actual number,
// however if you were to type a value that is not a number i.e. a string, words, dates, etc.
//you would get a value of true because those values are not numbers.
//console.log(isNaN("hello"));

//practice with weather APP

//we need to get the longitude and latitude of our user location
//the way to do it is built into JavaScript

window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let locationlocalTime = document.querySelector(".location-localTime");
  let icon = document.querySelector("#description_icon");

  //this will only work if the user allows it when the popup comes up
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      //console.log(position);
      //Youtube Video link: https://www.youtube.com/watch?v=wPElVpR1rwA
      //minute 20:00 to start again once API key is functional (fingers crossed)
      //switched to WeatherStack API because I couldn't get the key to work for previous API provider.
      //now to search how to update the query to use LAT & LONG instead of City

      const api = `http://api.weatherstack.com/current?access_key=a4faca2f49a36b134852aaa34ec0ed1e&query=${lat},${long}&units=f`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temperature } = data.current;
          const weatherType = data.current.weather_descriptions[0];
          const weatherIcon = data.current.weather_icons[0];
          const localtime = data.location.localtime;
          console.log(data.location.localtime);
          //console.log(data.current.weather_descriptions[0]);
          const timezone_id = data.location.region;
          //console.log(data.location.timezone_id);

          //Set DOM Elements from the API
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = weatherType;
          //icon.textContent = weatherIcon;
          locationTimezone.textContent = timezone_id;
          locationlocalTime.textContent = localtime;

          function addImage() {
            var img = new Image();
            img.src = weatherIcon;
            description_icon.appendChild(img);
          }
          addImage();
        });
    });
  } else {
    h1.textContent = "Location Unavailable please allow geolocation";
  }
});
