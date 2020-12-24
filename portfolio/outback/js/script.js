AOS.init();

$(document).ready(function(){
    $(" .popup").click(function(){
        $(".rq").fadeIn();
        return false; 
    });
    $(".close, .bg").click(function(){
        $(".rq").fadeOut();
    });
});