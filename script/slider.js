var slider = document.getElementById("myRange");
var output = document.getElementById("outputVal");
output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function() {
  output.innerHTML = this.value;
}