var days	= ["Montag, 01.01.2024" , "Dienstag, 02.01.2024"   , "Mittwoch, 03.01.2024"];
var meal_1	= ["Essen1_1.jpg" , "Essen1_2.jpg"   , "Essen1_3.jpg"];
let counter = 0;


function day_backwards(input) {
    counter -= 1;
    document.getElementById("day").innerHTML = days[counter];
    document.getElementById("meal_1").src = meal_1[counter];
}

function day_forwards(input) {
    counter += 1;
    document.getElementById("day").innerHTML = days[counter];
    document.getElementById("meal_1").src = meal_1[counter];
}
