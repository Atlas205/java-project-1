let n = num.toFixed();
let i = num.toFixed();

//fahrenheit to celcius
    function temperatureConverter(valNum) {
   valNum = parseFloat(valNum);
   document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
 }

//celcius to fahrenheit

function temperatureConverter2(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit2").innerHTML=(valNum*1.8)+32;
  }


  document.getElementById("outputFahrenheit2").innerHTML = n;
  document.getElementById("outputCelsius").innerHTML = i;


//dark mode
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var x = document.getElementById("button");
    if (x.innerHTML === "dark mode") {
      x.innerHTML = "light mode";
    } else {
      x.innerHTML = "dark mode";
    }
 }