$(function () {
	console.log("fully loaded");

	$('header > h3 > a').mouseenter(function () {
		$(this).effect('bounce', {direction: 'up', distance: 11, times:3});
	})

	// $('#about').mouseenter(function () {
	// 	$(this).css('color', 'red');
	// }).mouseout(function () {
	// 	$(this).css('color', 'white');
	// })

	// $('#goals').mouseenter(function () {
	// 	$(this).css('color', '#00ff00');
	// }).mouseout(function () {
	// 	$(this).css('color', 'white');
	// })

	// $('#projs').mouseenter(function () {
	// 	$(this).css('color', 'blue');
	// }).mouseout(function () {
	// 	$(this).css('color', 'white');
	// })

	$("#link").mouseover(function () {
		$(this).css('background-color', '#ffff66');
		$('#linkhref').css('color', 'black');
	}).mouseout(function () {
		$(this).css('background-color', 'black');
		$('#linkhref').css('color', 'white');
	})

		$("#git").mouseover(function () {
		$(this).css('background-color', '#ff9933');
		$('#githref').css('color', 'black');
	}).mouseout(function () {
		$(this).css('background-color', 'black');
		$('#githref').css('color', 'white');
	})

		$("#ga").mouseover(function () {
		$(this).css('background-color', '#ff3333');
		$('#gahref').css('color', 'black');
	}).mouseout(function () {
		$(this).css('background-color', 'black');
		$('#gahref').css('color', 'white');
	})

		$("#twit").mouseover(function () {
		$(this).css('background-color', '#33ff66');
		$('#twithref').css('color', 'black');
	}).mouseout(function () {
		$(this).css('background-color', 'black');
		$('#twithref').css('color', 'white');
	})

		$("#fb").mouseover(function () {
		$(this).css('background-color', '#33ccff');
		$('#fbhref').css('color', 'black');
	}).mouseout(function () {
		$(this).css('background-color', 'black');
		$('#fbhref').css('color', 'white');
	})



});







