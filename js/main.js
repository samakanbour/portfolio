// window.onscroll = function (event) {
// 	$(".img").css({
// 		"background-position": "0 " + $(event.target).scrollTop() * (-0.2) + "px"
// 	});
// }

$('window').on('touchmove', function(event) {
    event.preventDefault();
    $(".img").css({
		"background-position": "0 " + $(event.target).scrollTop() * (-0.2) + "px"
	});
});