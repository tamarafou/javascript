var box = $('#box')
var happyBtn = $('#happy')
var sadBtn = $('#sad')
var sillyBtn = $('#silly')

happyBtn.on("click", function () {
    box.text("Happy Tam");
    box.add("happy.jpg");
    <img src="happy.jpg">;
})

sadBtn.on("click", function () {
    box.text("Sad Tam");
    box.contents("sad.jpg");
     <img src="sad.jpg">;
})

sillyBtn.on("click", function () {
    box.text("Silly Tam");
    box.contents("silly.jpg");
    <img src="silly.jpg">
})