var jogger = document.getElementById("jogger");
var cafarenas = document.getElementById("cafarenas");
var crops = document.getElementById("crops");
var beanies = document.getElementById("beanies");

jogger.addEventListener("click", showInfo);
cafarenas.addEventListener("click", showInfo);
crops.addEventListener("click", showInfo);
beanies.addEventListener("click", showInfo);

function showInfo() {
    var reset = document.querySelectorAll(".grid");

    for (var i = 0; i < reset.length; i++) {
         reset[i].className = "hide";
    }

    var info = this.attributes["data-info"].value;
    var infoId = document.getElementById(info);
    if (infoId.className === "hide") {
        infoId.className = "grid";
    } else {
        infoId.className = "hide";
    }
};