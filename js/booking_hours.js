var total_hours;
var extra_hours = 0;
function addHours(){
	var bedroom_hrs = document.getElementById('bedrooms').value;
	var bathroom_hrs = document.getElementById('bathrooms').value;
	if(extra_hours >= 0.5){
		total_hours = parseFloat(bedroom_hrs) + parseFloat(bathroom_hrs) + extra_hours;
	}else{
		total_hours = parseFloat(bedroom_hrs) + parseFloat(bathroom_hrs);
	}
	document.getElementById("total_hours").innerHTML  = total_hours;
	return total_hours;
}
function addExtraHours(){
	var total_hours = addHours();
	total_hours = total_hours + 0.5;
	extra_hours = extra_hours + 0.5;
	document.getElementById("total_hours").innerHTML  = total_hours;
}
function subtractHours(){
	var new_hours = addHours();
	total_hours = new_hours - 0.5;
	extra_hours = extra_hours - 0.5;
	document.getElementById("total_hours").innerHTML  = total_hours;
}
function laundryVisibility(){
	var image = document.getElementById("img-laundry");
	var image2 = document.getElementById("img-laundry-selected");
	if(image.style.display == 'block' || image.style.display == ''){
		image.style.display = 'none';
		image2.style.display = 'block';
		document.getElementById("laundry-tooltip").style.color = "#00b27e";
		/*document.getElementsByClassName("box-style").style.border = "2px solid #00b27e"; */
		addExtraHours();
	}else{
		image.style.display = 'block';
		image2.style.display = 'none';
		document.getElementById("laundry-tooltip").style.color = "#6f6f6f";
		subtractHours();
	}
}
function fridgeVisibility(){
	var image = document.getElementById("img-fridge");
	var image2 = document.getElementById("img-fridge-selected");
	if(image.style.display == 'block' || image.style.display == ''){
		image.style.display = 'none';
		image2.style.display = 'block';
		document.getElementById("fridge-tooltip").style.color = "#00b27e";
		addExtraHours();
	}else{
		image.style.display = 'block';
		image2.style.display = 'none';
		document.getElementById("fridge-tooltip").style.color = "#6f6f6f";
		subtractHours();
	}
}
function ovenVisibility(){
	var image = document.getElementById("img-oven");
	var image2 = document.getElementById("img-oven-selected");
	if(image.style.display == 'block' || image.style.display == ''){
		image.style.display = 'none';
		image2.style.display = 'block';
		document.getElementById("oven-tooltip").style.color = "#00b27e";
		addExtraHours();
	}else{
		image.style.display = 'block';
		image2.style.display = 'none';
		document.getElementById("oven-tooltip").style.color = "#6f6f6f";
		subtractHours();
	}
}
function cabinetsVisibility(){
	var image = document.getElementById("img-cabinets");
	var image2 = document.getElementById("img-cabinets-selected");
	if(image.style.display == 'block' || image.style.display == ''){
		image.style.display = 'none';
		image2.style.display = 'block';
		document.getElementById("cabinets-tooltip").style.color = "#00b27e";
		addExtraHours();
	}else{
		image.style.display = 'block';
		image2.style.display = 'none';
		document.getElementById("cabinets-tooltip").style.color = "#6f6f6f";
		subtractHours();
	}
}
function wallsVisibility(){
	var image = document.getElementById("img-walls");
	var image2 = document.getElementById("img-walls-selected");
	if(image.style.display == 'block' || image.style.display == ''){
		image.style.display = 'none';
		image2.style.display = 'block';
		document.getElementById("walls-tooltip").style.color = "#00b27e";
		addExtraHours();
	}else{
		image.style.display = 'block';
		image2.style.display = 'none';
		document.getElementById("walls-tooltip").style.color = "#6f6f6f";
		subtractHours();
	}
}
function windowsVisibility(){
	var image = document.getElementById("img-windows");
	var image2 = document.getElementById("img-windows-selected");
	if(image.style.display == 'block' || image.style.display == ''){
		image.style.display = 'none';
		image2.style.display = 'block';
		document.getElementById("windows-tooltip").style.color = "#00b27e";
		addExtraHours();
	}else{
		image.style.display = 'block';
		image2.style.display = 'none';
		document.getElementById("windows-tooltip").style.color = "#6f6f6f";
		subtractHours();
	}
}

		function showContactDetails(){
			document.getElementById("contact_details").style.display = 'block';
			document.getElementById("about_home").style.display = 'none';
			document.getElementById("calendar_section").style.display = 'none';
		}
		function showCalendarSection(){
			document.getElementById("contact_details").style.display = 'none';
			document.getElementById("about_home").style.display = 'none';
			document.getElementById("calendar_section").style.display = 'block';
		}
