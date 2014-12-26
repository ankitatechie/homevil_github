function laundryVisibility(){
	var image = document.getElementById("img-laundry");
	var image2 = document.getElementById("img-laundry-selected");
	if(image.style.display == 'block' || image.style.display == ''){
		image.style.display = 'none';
		image2.style.display = 'block';
		document.getElementById("laundry-tooltip").style.color = "#00b27e";
		document.getElementsByClassName("box-style").style.border = "2px solid #00b27e";
	}else{
		image.style.display = 'block';
		image2.style.display = 'none';
		document.getElementById("laundry-tooltip").style.color = "#6f6f6f";
		document.getElementsByClassName("box-style").style.border = "2px solid #ccc";
	}
}
function fridgeVisibility(){
	var image = document.getElementById("img-fridge");
	var image2 = document.getElementById("img-fridge-selected");
	if(image.style.display == 'block' || image.style.display == ''){
		image.style.display = 'none';
		image2.style.display = 'block';
		document.getElementById("fridge-tooltip").style.color = "#00b27e";
		document.getElementsByClassName("radio-box selected").style.border = "2px solid #00b27e";
	}else{
		image.style.display = 'block';
		image2.style.display = 'none';
		document.getElementById("fridge-tooltip").style.color = "#6f6f6f";
		document.getElementsByClassName("radio-box selected").style.border = "2px solid #ccc";
	}
}
function ovenVisibility(){
	var image = document.getElementById("img-oven");
	var image2 = document.getElementById("img-oven-selected");
	if(image.style.display == 'block' || image.style.display == ''){
		image.style.display = 'none';
		image2.style.display = 'block';
		document.getElementById("oven-tooltip").style.color = "#00b27e";
		document.getElementsByClassName("radio-box selected").style.border = "2px solid #00b27e";
	}else{
		image.style.display = 'block';
		image2.style.display = 'none';
		document.getElementById("oven-tooltip").style.color = "#6f6f6f";
		document.getElementsByClassName("radio-box selected").style.border = "2px solid #ccc";
	}
}
function cabinetsVisibility(){
	var image = document.getElementById("img-cabinets");
	var image2 = document.getElementById("img-cabinets-selected");
	if(image.style.display == 'block' || image.style.display == ''){
		image.style.display = 'none';
		image2.style.display = 'block';
		document.getElementById("cabinets-tooltip").style.color = "#00b27e";
		document.getElementsByClassName("radio-box selected").style.border = "2px solid #00b27e";
	}else{
		image.style.display = 'block';
		image2.style.display = 'none';
		document.getElementById("cabinets-tooltip").style.color = "#6f6f6f";
		document.getElementsByClassName("radio-box selected").style.border = "2px solid #ccc";
	}
}
function wallsVisibility(){
	var image = document.getElementById("img-walls");
	var image2 = document.getElementById("img-walls-selected");
	if(image.style.display == 'block' || image.style.display == ''){
		image.style.display = 'none';
		image2.style.display = 'block';
		document.getElementById("walls-tooltip").style.color = "#00b27e";
		document.getElementsByClassName("radio-box selected").style.border = "2px solid #00b27e";
	}else{
		image.style.display = 'block';
		image2.style.display = 'none';
		document.getElementById("walls-tooltip").style.color = "#6f6f6f";
		document.getElementsByClassName("radio-box selected").style.border = "2px solid #ccc";
	}
}
function windowsVisibility(){
	var image = document.getElementById("img-windows");
	var image2 = document.getElementById("img-windows-selected");
	if(image.style.display == 'block' || image.style.display == ''){
		image.style.display = 'none';
		image2.style.display = 'block';
		document.getElementById("windows-tooltip").style.color = "#00b27e";
		document.getElementsByClassName("radio-box selected").style.border = "2px solid #00b27e";
	}else{
		image.style.display = 'block';
		image2.style.display = 'none';
		document.getElementById("windows-tooltip").style.color = "#6f6f6f";
		document.getElementsByClassName("radio-box selected").style.border = "2px solid #ccc";
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
function addHours(){
var bedroom_hrs = document.getElementById('bedrooms').value;
var bathroom_hrs = document.getElementById('bathrooms').value;
alert("no. of bedroom hours: " + bedroom_hrs + "no. of bathroom hours: " + bathroom_hrs);
var total_hours = parseFloat(bedroom_hrs) + parseFloat(bathroom_hrs);
alert("total_hours: "+ total_hours);
document.getElementById("total_hours").innerHTML  = total_hours;
}