$(function(){ 
    var navMain = $("#navbar-top");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});