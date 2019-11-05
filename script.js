var countDownDate = new Date("Nov 9, 2019 12:30:00").getTime();
var x = setInterval(function() {

  	var now = new Date().getTime();
	var distance = countDownDate - now;
    
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("pageTimer").innerHTML = days + "d " + hours + "h "
	+ minutes + "m " + seconds + "s ";

	if (distance < 0) {
	clearInterval(x);
	document.getElementById("pageTimer").style.backgroundColor = "black"
	document.getElementById("pageTimer").innerHTML = "<a href='google.com' target='_blank'><img src='yt-logo.png' id='yt-logo'></a>";
	}
}, 1000);