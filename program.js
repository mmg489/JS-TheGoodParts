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
  //this will only work if the user allows it when the popup comes up
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={697e7e756f4ba3e54ff32639dc254b53}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    });
  } else {
    h1.textContent = "Location Unavailable please allow geolocation";
  }
});
