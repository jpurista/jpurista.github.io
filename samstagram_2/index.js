$("#form1").submit(function (e) {
    e.preventDefault(); //prevents reloading so items don't disappear

    var newDiv = document.createElement("div"); //creates the div where the image and caption appear in
    var img = document.createElement("img"); //creates an image element where the image from the user-inputed url will appear
    var url_input = document.getElementById("urlinput").value; //gets the URL in the url input area
    var cap_input= document.getElementById("capinput").value; //gets the text in the caption input area
    var x = document.createElement("img");


    newDiv.className = ("newDiv");
	
	x.src = "x.png";
	x.classList.add("x");
	
    img.src = url_input; //sets the image link from text area to the source for the image printed in the post
	img.classList.add("postimg");
	
    addNew(newDiv, url_input, img, cap_input, x); //runs the addNew function with variables

    cap_input.value = ""; //sets caption input area blank for next post
    url_input.value = ""; //sets image url input area blank for next post
});


function addNew(newDiv, url_input, img, cap_input, x) { //takes the url_input, img, and cap_text variables from the function from above and allows them to be used in this function
    newDiv.classList.add("cap_card");
	
    var cap_input_elem = document.createElement("p");
    cap_input_elem.innerHTML = cap_input;

	newDiv.appendChild(x);
    newDiv.appendChild(img); //adds the image to the post div
    newDiv.appendChild(cap_input_elem); //adds the caption to the post div
    document.getElementById("container").appendChild(newDiv); //appends the div where image and caption are to the div that actually shows up on the page

    x.addEventListener("click", function () { //event listener looks for a click of the post and then closes it
        var newDiv_id = String(Math.random()); 
        newDiv.id = newDiv_id; 

        document.getElementById(newDiv_id).remove(); 
    });    
}

