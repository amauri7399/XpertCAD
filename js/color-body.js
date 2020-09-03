/*******************************

THERE IS A CSS ONLY APPROACH 
By Christopher Grabinski (@chrisgrabinski) 
You can find it here: https://codepen.io/chrisgrabinski/pen/dDbFt

********************************/

/*******************************

THERE IS A MUCH CLEANER JS-PEN
With it you can add social media icons without having to update your javascript
by Jesse Shawl (@jshawl) 
You can find it here: 
https://codepen.io/jshawl/pen/nHefA

********************************/

$(".crea").hover(function() {
    $("#color-body").toggleClass("color-crea")
});

$(".industria ").hover(function() {
    $("#color-body").toggleClass("color-industria")
});

$(".xcadstore").hover(function() {
    $("#color-body").toggleClass("color-xcadstore")
});

$(".servicios").hover(function() {
    $("#color-body").toggleClass("color-servicios")
});


$(".creaX").hover(function() {
    $("#misterx").toggleClass("x-crea")
});

$(".industriaX").hover(function() {
    $("#misterx").toggleClass("x-industria")
});

$(".xcadstoreX").hover(function() {
    $("#misterx").toggleClass("x-xcadstore")
});

$(".serviciosX").hover(function() {
    $("#misterx").toggleClass("x-servicios")
});