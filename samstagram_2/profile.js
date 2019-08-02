$("#form2").submit(function (e) {
	e.preventDefault(); //prevents reloading so items don't reset

	var prename = document.getElementById("prename");
	var newname = document.getElementById("nameinp").value;
	$(prename).replaceWith(newname);
	


	var prebio = document.getElementById("prebio");
	var newbio = document.getElementById("bioinp").value;
	$(prebio).replaceWith(newbio);


	var prephoto = document.getElementById("prephoto");
	var newphoto = document.getElementById("imginp").value;
	prephoto.src = newphoto;
	
	document.getElementById("imginp").value = "";
	document.getElementById("bioinp").value = "";
	document.getElementById("nameinp").value = "";
});