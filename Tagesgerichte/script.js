var days	= ["Montag, 01.01.2024" , "Dienstag, 02.01.2024"   , "Mittwoch, 03.01.2024"];
var meal_1	= ["Essen1_1.jpg" , "Essen1_2.jpg"   , "Essen1_3.jpg"];
var details_1 = [["209kcal/876kJ", "7,9g", "26,5g", "0,7g", "7,0g", "0,8g", "1,4g"], ["938kcal/3927kJ", "43,8g", "93,8g", "3,9g", "37,8g", "5,3g", "7,7g"], ["581kcal/2430,9kJ", "20g", "48g", "0g", "51g", "1g", "3,4g"]];
var preis_1 = ["4,00€", "3,50€", "6,00€"];
let counter = 0;


function day_backwards(input) {
    counter -= 1;
    document.getElementById("day").textContent = days[counter];
    document.getElementById("meal_1").src = meal_1[counter];
	document.getElementById("preis_1").textContent = preis_1[counter];
	updateDetails(input);
}

function day_forwards(input) {
    counter += 1;
    document.getElementById("day").textContent = days[counter];
    document.getElementById("meal_1").src = meal_1[counter];
	document.getElementById("preis_1").textContent = preis_1[counter];
	updateDetails(input);
}

function updateDetails(input){
	document.getElementById("brennwert_1").textContent = details_1[counter][0];
	document.getElementById("fett_1").textContent = details_1[counter][1];
	document.getElementById("kohlenhydrate_1").textContent = details_1[counter][2];
	document.getElementById("zucker_1").textContent = details_1[counter][3];
	document.getElementById("eiweiß_1").textContent = details_1[counter][4];
	document.getElementById("salz_1").textContent = details_1[counter][5];
	document.getElementById("ballaststoffe_1").textContent = details_1[counter][6];
}
