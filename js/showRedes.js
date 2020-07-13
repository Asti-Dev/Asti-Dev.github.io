var telefono = document.getElementById("telefono");
var correo = document.getElementById("correo");

telefono.addEventListener("click", showInfo);
correo.addEventListener("click", showInfo);

function showInfo() {
    var reset = document.querySelectorAll(".show");

    for (var i = 0; i < reset.length; i++) {
         reset[i].className = "hide";
    }

    var info = this.attributes["data-info"].value;
    var infoId = document.getElementById(info);
    if (infoId.className === "hide") {
        infoId.className = "show";
    } else {
        infoId.className = "hide";
    }
};