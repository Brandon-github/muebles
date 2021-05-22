

$("#content_button").click(() => {
    $(".inicio_message").css({"opacity" : "1"});
    $(".inicio_message").css({"visibility" : "visible"});
});

$(".message_button").click(() => {
    $(".inicio_message").css({"opacity" : "0"});
    $(".inicio_message").css({"visibility" : "hidden"});
});