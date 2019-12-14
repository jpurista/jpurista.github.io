$("#form_id").submit(function(e) {
    e.preventDefault();

    var noise = document.createElement("audio");
	noise.src = ("bloop.wav");

    var img = document.createElement("img");
	var text_input = document.getElementById("link_input").value;

	img.src = text_input;

	var x = document.getElementById("container");

	x.appendChild(img);

	noise.play();

	document.getElementById("link_input").value= "";

});


