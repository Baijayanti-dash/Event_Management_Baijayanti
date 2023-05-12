$(document).ready(function () {
    $(".img img").hover(function () {
        $(this).css("opacity", "0.8");
    }, function () {
        $(this).css("opacity", "1");
    });
});
