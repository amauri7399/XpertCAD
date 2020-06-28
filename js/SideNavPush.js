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