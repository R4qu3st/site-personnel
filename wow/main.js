var prevScrollpos = window.pageYOffset;
var timeout;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        $("#scrolltop img:nth-child(1)").css("opacity", "1");
        $("#scrolltop").css("transform", "translateY(-10px)");

    } else {
        $("#scrolltop img:nth-child(1)").css("opacity", "0");
        $("#scrolltop").css("transform", "translateY(5px)");
    }
    prevScrollpos = currentScrollPos;
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        $("#scrolltop").css("display", "block");
    } else {
        $("#scrolltop").css("display", "none");
    };
}

$(window).scroll(function () {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function () {

        $("#scrolltop img:nth-child(1)").css("opacity", "0");
        $("#scrolltop").css("transform", "translateY(0)");

    }, 300));
});

function normal() {
    $("#scrolltop img:nth-child(1)").css("opacity", "0");
    $("#scrolltop").css("transform", "translateY(0)");
}
