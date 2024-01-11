var days	= ["Montag, 01.01.2024" , "Dienstag, 02.01.2024"   , "Mittwoch, 03.01.2024"];
var meal_1	= ["Essen1_1.jpg" , "Essen1_2.jpg"   , "Essen1_3.jpg"];
var details_1 = [["209kcal/876kJ", "7,9g", "26,5g", "0,7g", "7,0g", "0,8g", "1,4g"], ["938kcal/3927kJ", "43,8g", "93,8g", "3,9g", "37,8g", "5,3g", "7,7g"], ["581kcal/2430,9kJ", "20g", "48g", "0g", "51g", "1g", "3,4g"]];
var preis_1 = ["4,00€", "3,50€", "6,00€"];
let counter = 0;


function day_backwards(input) {
	if(counter > 0){
		counter -= 1;
		document.getElementById("day").textContent = days[counter];
		document.getElementById("meal_1").src = meal_1[counter];
		document.getElementById("preis_1").textContent = preis_1[counter];
		updateDetails(input);
	}
}

function day_forwards(input) {
	if(counter < (days.length - 1)){ 
		counter += 1;
		document.getElementById("day").textContent = days[counter];
		document.getElementById("meal_1").src = meal_1[counter];
		document.getElementById("preis_1").textContent = preis_1[counter];
		updateDetails(input);
	}
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

function toggleDropdown() {
            var dropdown = document.getElementById('filter-dropdown');
            dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'block' : 'none';
        }

function toggleFilter(filter) {
    var filterButton = document.getElementById('filter-' + filter);

    if (filter === 'alles') {
        // Reset all filters
        var filters = document.querySelectorAll('.dropdown-btn');
        filters.forEach(function (f) {
            f.classList.remove('selected');
        });

        // Show all cards
        var cards = document.querySelectorAll('.articlecard');
        cards.forEach(function (card) {
            card.style.display = 'inline-block';
        });
    } else {
        // Toggle the selected state for the filter
        filterButton.classList.toggle('selected');

        // Implement your filtering logic here based on the selected filters
        var selectedFilters = document.querySelectorAll('.selected');
        var cards = document.querySelectorAll('.articlecard');

        cards.forEach(function (card) {
            var cardDetails = card.querySelector('.Details').innerHTML;
            var showCard = true;

            selectedFilters.forEach(function (filter) {
                var filterName = filter.innerHTML;
                if (cardDetails.indexOf(filterName) === -1) {
                    showCard = false;
                }
            });

            card.style.display = showCard ? 'inline-block' : 'none';
        });
    }
}
