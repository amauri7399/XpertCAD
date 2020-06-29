$(document).ready(function() {
    $(".SideNavBott").click(function() {
        if ($("#SideNavRight").width() == 0) {
            document.getElementById("SideNavRight").style.width = "415px";
            document.getElementById("contentmain").style.paddingRight = "415px";
            document.getElementById("SideNavBott").style.marginRight = "415px";
        } else {
            document.getElementById("SideNavRight").style.width = "0";
            document.getElementById("contentmain").style.paddingRight = "0";
            document.getElementById("SideNavBott").style.marginRight = "0";
        }


    });
});

$(window).on('scroll', function() {
    var $window = $(this);

    $window.scrollTop() > 0 ?
        $('.animated-bounce').fadeOut(300) :
        $('.animated-bounce').fadeIn(300);
});