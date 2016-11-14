var box = $('#box')
var happyBtn = $('#happy')
var sadBtn = $('#sad')
var sillyBtn = $('#silly')

happyBtn.on("click", function () {
    box.text("Happy Tam");
    $( "img" ).show();
})

sadBtn.on("click", function () {
    box.text("Sad Tam");
    $( "img" ).show();
})

sillyBtn.on("click", function () {
    box.text("Silly Tam");
    $( "img" ).show();
})