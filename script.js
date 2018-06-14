var table = document.getElementById("table1");
table.addEventListener("click", function() {
    var map = document.getElementById("map");
    map.classList.add("clicked");
    table.style.backgroundImage = "url('images/tafeltje-hover.PNG')";

    var sidebar = document.getElementById("sidebar");
    sidebar.style.display = "inline-block";
});