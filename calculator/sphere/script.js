//All the variables will be blank, until the enter button is pressed

var volume = "";
var radius = "";
var surfaceA = "";
var pi = "3.14159265";

//Functions; when enter is pressed run all the calculations and fill in the text boxes

function calculate() {
	pi = document.getElementById("pi").value;
	radius = document.getElementById("radius").value;
	surfaceA = document.getElementById("surfaceArea").value;
	volume = document.getElementById("volume").value;
	
	//volume from radius
			if ((radius !== "" && volume === "")) {
				if (pi != "pi") {
					document.getElementById("volume").value = ((4/3) * pi * (radius * radius * radius));
				}
				else {
					document.getElementById("volume").value = ((4/3) * Math.PI * (radius * radius * radius));
				}
			}
	//surface area from radius
			if ((radius !== "" && surfaceA === "")) {
				if (pi != "pi") {
					document.getElementById("surfaceArea").value = (4 * pi * (radius * radius));
				}
				else {
					document.getElementById("surfaceArea").value = (4 * Math.PI * (radius * radius));
				}
			}

	//radius from volume
			if ((volume !== "" && radius === "")) {
				if (pi != "pi") {
					document.getElementById("radius").value = ((Math.cbrt(((3 * volume) / 4) / pi)));
				}
				else {
					document.getElementById("radius").value = (Math.cbrt(((3 * volume) / 4) / Math.PI));
				}
			}

	
	//surface area from volume
			if ((volume !== "" && surfaceA === "")) {
				if (pi != "pi") {
					document.getElementById("surfaceArea").value = ((Math.cbrt(((3 * volume) / 4) / pi)) * (Math.cbrt(((3 * volume) / 4) / pi)) * 4 * pi);
				}
				else {
					document.getElementById("surfaceArea").value = ((Math.cbrt(((3 * volume) / 4) / pi)) * (Math.cbrt(((3 * volume) / 4) / pi)) * 4 * Math.PI);
				}
			}
	
	//radius from surface area
			if ((surfaceA !== "" && radius === "")) {
				if (pi != "pi") {
					document.getElementById("radius").value = (Math.sqrt((surfaceA / 4) / pi));
				}
				else {
					document.getElementById("radius").value = (Math.sqrt((surfaceA / 4) / Math.PI));
				}
			}

	
	//volume from surface area
			if ((surfaceA !== "" && volume === "")) {
				if (pi != "pi") {
					document.getElementById("volume").value = ((Math.sqrt((surfaceA / 4) / pi)) * (Math.sqrt((surfaceA / 4) / pi)) * (Math.sqrt((surfaceA / 4) / pi))) * pi * (4/3);
				}
				else {
					document.getElementById("volume").value = ((Math.sqrt((surfaceA / 4) / pi)) * (Math.sqrt((surfaceA / 4) / pi)) * (Math.sqrt((surfaceA / 4) / pi))) * Math.PI * (4/3);
				}
			}
	

}
