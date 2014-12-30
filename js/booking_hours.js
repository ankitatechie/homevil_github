var total_hours = 1;
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
	document.getElementById("num_hours_dropdown_front").value = total_hours;
	ruppee_hour();
	document.getElementById("total_hours_summary").innerHTML = parseFloat(total_hours) +" Hour(s)";
	document.getElementById("total_ruppee_summary").innerHTML = "Rs."+ total_hours * 200 +"/- Only";
	return total_hours;
}
function ruppee_hour(){
	
	var no_of_bedroom_hours = document.getElementById("bedrooms").value;
	var no_of_bathroom_hours = document.getElementById("bathrooms").value;
	if(no_of_bedroom_hours == "0.5"){
		document.getElementById("no_bedroom").innerHTML = parseFloat(no_of_bedroom_hours) + 0.5 + " Bedroom(s)";
	}else if(no_of_bedroom_hours == "1.5"){
		document.getElementById("no_bedroom").innerHTML = parseFloat(no_of_bedroom_hours) + 1.5 + " Bedroom(s)";
	}else if(no_of_bedroom_hours == "2.5"){
		document.getElementById("no_bedroom").innerHTML = parseFloat(no_of_bedroom_hours) + 2.5 + " Bedroom(s)";
	}else if(no_of_bedroom_hours == "1"){
		document.getElementById("no_bedroom").innerHTML = parseFloat(no_of_bedroom_hours) + 1 + " Bedroom(s)";
	}else if(no_of_bedroom_hours == "2"){
		document.getElementById("no_bedroom").innerHTML = parseFloat(no_of_bedroom_hours) + 2 + " Bedroom(s)";
	}else{
		document.getElementById("no_bedroom").innerHTML = parseFloat(no_of_bedroom_hours) + " Bedroom(s)";
	}
	if(no_of_bathroom_hours == "0.5"){
		document.getElementById("no_bathroom").innerHTML = parseFloat(no_of_bathroom_hours) + 0.5 + " Bedroom(s)";
	}else if(no_of_bathroom_hours == "1.5"){
		document.getElementById("no_bathroom").innerHTML = parseFloat(no_of_bathroom_hours) + 1.5 + " Bedroom(s)";
	}else if(no_of_bathroom_hours == "2.5"){
		document.getElementById("no_bathroom").innerHTML = parseFloat(no_of_bathroom_hours) + 2.5 + " Bedroom(s)";
	}else if(no_of_bathroom_hours == "1"){
		document.getElementById("no_bathroom").innerHTML = parseFloat(no_of_bathroom_hours) + 1 + " Bedroom(s)";
	}else if(no_of_bathroom_hours == "2"){
		document.getElementById("no_bathroom").innerHTML = parseFloat(no_of_bathroom_hours) + 2 + " Bedroom(s)";
	}else{
		document.getElementById("no_bathroom").innerHTML = parseFloat(no_of_bathroom_hours) + " Bedroom(s)";
	}
	document.getElementById("bedroom_hours").innerHTML = "Approx. "+ parseFloat(no_of_bedroom_hours)+ " Hour(s)";
	document.getElementById("bathroom_hours").innerHTML = "Approx. "+ parseFloat(no_of_bathroom_hours)+ " Hour(s)";
	document.getElementById("extra_work_hours").innerHTML = extra_hours +" Hour(s)";
}
function addExtraHours(){
	var total_hours = addHours();
	total_hours = total_hours + 0.5;
	extra_hours = extra_hours + 0.5;
	document.getElementById("total_hours").innerHTML  = total_hours;
	document.getElementById("num_hours_dropdown_front").value = total_hours;
	ruppee_hour();
	document.getElementById("total_hours_summary").innerHTML = total_hours +" Hour(s)";
	document.getElementById("total_ruppee_summary").innerHTML = "Rs."+ total_hours * 200 +"/- Only";
}
function subtractHours(){
	var new_hours = addHours();
	total_hours = new_hours - 0.5;
	extra_hours = extra_hours - 0.5;
	document.getElementById("total_hours").innerHTML  = total_hours;
	document.getElementById("num_hours_dropdown_front").value = total_hours;
	ruppee_hour();
	document.getElementById("total_hours_summary").innerHTML = total_hours +" Hour(s)";
	document.getElementById("total_ruppee_summary").innerHTML = "Rs."+ total_hours * 200 +"/- Only";
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

function minReqHours(){
	if(document.getElementById("num_hours_dropdown_front").value < (total_hours + 0.5)){
		document.getElementById("customer-note-control-front").style.display = "";
	}else{
		document.getElementById("customer-note-control-front").style.display = "none";
	}
}

function showContactDetails(){
if(document.getElementById("date").value=="" || document.getElementById("time").value==""){
	document.getElementById("calendar_error").style.display="block";
	document.getElementById("calendar_section").style.borderColor = "red";
}else{
	document.getElementById("contact_details").style.display = 'block';
	document.getElementById("about_home").style.display = 'none';
	document.getElementById("calendar_section").style.display = 'none';
	document.getElementById("end_section").style.display = 'none';
	document.getElementById("availability-pane-icon").classList.remove( "active" );
	document.getElementById("availability-pane-icon").classList.add( "access-approved" );
	document.getElementById("contact-pane-icon").classList.add( "active" );
	}
}
function showCalendarSection(){
	if(total_hours > 0){
	document.getElementById("contact_details").style.display = 'none';
	document.getElementById("about_home").style.display = 'none';
	document.getElementById("calendar_section").style.display = 'block';
	document.getElementById("end_section").style.display = 'none';
	document.getElementById("availability-pane-icon").classList.add( "active" );
	document.getElementById("info-pane-person-icon").classList.remove( "active" );
	}else{
	document.getElementById("error").style.display="block";
	document.getElementById("about_home").style.borderColor = "red";
	}
	
}
function showSummary(){
	document.getElementById("contact_details").style.display = 'none';
	document.getElementById("about_home").style.display = 'none';
	document.getElementById("calendar_section").style.display = 'none';
	document.getElementById("end_section").style.display = 'block';
	/* Display Address */
	var address1 = document.getElementById("address_street1").value;
	var address2 = document.getElementById("address_street2").value;
	var city = document.getElementById("city").value;
	document.getElementById("display_address").innerHTML = address1 + "," + address2;
	document.getElementById("display_city").innerHTML = city;
	/* Display Contact Info */
	var name = document.getElementById("name").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	document.getElementById("display_name").innerHTML = name;
	document.getElementById("display_phone").innerHTML = phone;
	document.getElementById("display_email").innerHTML = email;
	/* Display Time Info */
	var date = document.getElementById("date").value;
	var time = document.getElementById("time").value;
	document.getElementById("cleaning_date").innerHTML = date;
	document.getElementById("cleaning_time").innerHTML = time;
	
	document.getElementById("contact-pane-icon").classList.remove( "active" );
	document.getElementById("contact-pane-icon").classList.add( "access-approved" );
	document.getElementById("review-order-pane-icon").classList.add( "active" );
}