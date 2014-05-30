window.onscroll = function (event) {
	$(".img").css({
		"background-position": "0 " + $(event.target).scrollTop() * (-0.2) + "px"
	});
}

// $('document').on('scroll touchstart touchmove', function(event) {
//     event.preventDefault();
//     $(".img").css({
// 		"background-position": "0 " + $(event.target).scrollTop() * (-0.2) + "px"
// 	});
// });

window.addEventListener('load', function(){
	$('window').on('touchstart', function(event) {
    event.preventDefault();
	$(".img").css({
			"background-position": "0 " + $(event.target).scrollTop() * (-0.2) + "px"
		});
	});

});
