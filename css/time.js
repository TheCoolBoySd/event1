function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
   document.getElementById("hours").innerHTML = hh;
   document.getElementById("minutes").innerHTML = mm;
   document.getElementById("seconds").innerHTML = ss;
  let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "<br> <br> <br> Latitude: " + position.coords.latitude + "   ||  " + "  Longitude: " + position.coords.longitude;
}
showPosition();
