// global variables

var neonText = document.getElementById("neon-text");
var neonButton = document.getElementById("gimme-neon-color");
var defaultColor = "#31E8FF";
var textInput = document.getElementById("text-input");

// convert hex to rgba 

function convertHex(hex){
  var newHex = hex.replace('#','');
  var r = parseInt(newHex.substring(0,2), 16);
  var g = parseInt(newHex.substring(2,4), 16);
  var b = parseInt(newHex.substring(4,6), 16);

  var result = 'rgba('+r+', '+g+', '+b+', '+1+')';
  return result;
}

// update color of text and shadows to match color picker as user selects

window.addEventListener("load", startup, false);
function startup() {
  var neonColor = document.querySelector("#neon-color");
  neonColor.value = defaultColor;
  neonColor.addEventListener("input", updateFirst, false);
  neonColor.addEventListener("change", updateAll, false);
  neonColor.select();
}
function updateFirst(event) {
  var p = document.querySelector("p");
  var rgbValue = convertHex(event.target.value);
  if (p) {
    p.style.color = rgbValue;
    p.style.textShadow = "0px 0px 2px " + rgbValue + ", 0px 0px 15px " + rgbValue + ", 0px 0px 30px " + rgbValue + ", 0px 0px 50px " + rgbValue;
  }
}
function updateAll(event) {
  document.querySelectorAll("p").forEach(function(p) {
    var rgbValue = convertHex(event.target.value);
    p.style.color = rgbValue;
    p.style.textShadow = "0px 0px 2px " + rgbValue + ", 0px 0px 15px " + rgbValue + ", 0px 0px 30px " + rgbValue + ", 0px 0px 50px " + rgbValue;
  });
}

// change the text content based on user input

textInput.addEventListener("input", function() {
  neonText.innerText = textInput.value;
});