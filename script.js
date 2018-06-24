var table = document.getElementById("table1");
table.addEventListener("click", function() {
    var map = document.getElementById("map");
    map.classList.add("clicked");
    table.style.backgroundImage = "url('images/tafeltje-hover.PNG')";

    var sidebar = document.getElementById("sidebar");
    sidebar.style.display = "inline-block";
});

var reserveBtn = document.getElementById("btn");
reserveBtn.addEventListener("click", function(){
  table.style.backgroundImage = "url('images/tafeltje-gereserveerd.PNG')";
  sidebar.style.display = "none";
  map.classList.remove("clicked");
});


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var timepicker = new TimePicker('time', {
    lang: 'en',
    theme: 'dark'
  });
  timepicker.on('change', function(evt) {
    
    var value = (evt.hour || '00') + ':' + (evt.minute || '00');
    evt.element.value = value;
  
  });