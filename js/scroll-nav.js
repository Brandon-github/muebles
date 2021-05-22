function nav_scroll(){
    var n_scroll = $(document).scrollTop();

    if(n_scroll > 0){
        $("#header").css({"background" : "#333"});
        $("#logo").css({"color" : "#fff"});
        $("#nav ul li a").css({"color" : "#fff"});
    }else{
        $("#header").css({"background" : "transparent"});
        $("#logo").css({"color" : "#333"});
        $("#nav ul li a").css({"color" : "#333"});
    }
}

setInterval(nav_scroll,100);
