(function() {
    var theVid = document.getElementById("theVideo");
    [].forEach.call(document.getElementsByClassName('btn-flat'), function(btn) {
        btn.addEventListener('click', function(e) {

            switch (e.target.id) {
                case "btn1":
                    theVid.src = "Videos/crea.mp4";
                    break;
                case "btn2":
                    theVid.src = "Videos/Industria40.mp4";
                    break;
                case "btn3":
                    theVid.src = "Videos/Store.mp4";
                    break;
                case "btn4":
                    theVid.src = "Videos/Servicios.mp4";
                    break;

                default:
                    console.log(e.target.id);
            }
        })
    })
    Draggable.create("#theVideo", { type: "x,y", edgeResistance: 0.65, bounds: "#wrapper", throwProps: true });
}())