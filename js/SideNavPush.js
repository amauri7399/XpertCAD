$(document).ready(function() {
    $(".SideNavBott").click(function() {
        if ($("#SideNavRight").width() == 0) {
            document.getElementById("SideNavRight").style.width = "350px";
            document.getElementById("contentmain").style.paddingRight = "350px";
            document.getElementById("SideNavBott").style.marginRight = "350px";
        } else {
            document.getElementById("SideNavRight").style.width = "0";
            document.getElementById("contentmain").style.paddingRight = "0";
            document.getElementById("SideNavBott").style.marginRight = "0";
        }


    });
});