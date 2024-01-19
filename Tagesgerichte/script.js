var days = ["Montag, 01.01.2024", "Dienstag, 02.01.2024", "Mittwoch, 03.01.2024"];
var meal_1 = ["Essen1_1.jpg", "Essen1_2.jpg", "Essen1_3.jpg"];
var details_1 = [["209kcal/876kJ", "7,9g", "26,5g", "0,7g", "7,0g", "0,8g", "1,4g"], ["938kcal/3927kJ", "43,8g", "93,8g", "3,9g", "37,8g", "5,3g", "7,7g"], ["581kcal/2430,9kJ", "20g", "48g", "0g", "51g", "1g", "3,4g"]];
var preis_1 = ["4,00€", "3,50€", "6,00€"];
let counter = 0;
let counter_split = 0;


function day_backwards(input) {
    if (counter > 0) {
        counter -= 1;
        document.getElementById("day").textContent = days[counter];
        document.getElementById("meal_1").src = meal_1[counter];
        document.getElementById("preis_1").textContent = preis_1[counter];
        updateDetails(input);
    }
}

function day_forwards(input) {
    if (counter < (days.length - 1)) {
        counter += 1;
        document.getElementById("day").textContent = days[counter];
        document.getElementById("meal_1").src = meal_1[counter];
        document.getElementById("preis_1").textContent = preis_1[counter];
        updateDetails(input);
    }
}

function day_backwards_split(input) {
    if (counter_split > 0) {
        counter_split -= 1;
        document.getElementById("day_split").textContent = days[counter_split];
        document.getElementById("meal_1_split").src = meal_1[counter_split];
        document.getElementById("preis_1_split").textContent = preis_1[counter_split];
        updateDetails(input);
    }
}

function day_forwards_split(input) {
    if (counter_split < (days.length - 1)) {
        counter_split += 1;
        document.getElementById("day_split").textContent = days[counter_split];
        document.getElementById("meal_1_split").src = meal_1[counter_split];
        document.getElementById("preis_1_split").textContent = preis_1[counter_split];
        updateDetails(input);
    }
}

function updateDetails(input) {
    document.getElementById("brennwert_1").textContent = details_1[counter][0];
    document.getElementById("fett_1").textContent = details_1[counter][1];
    document.getElementById("kohlenhydrate_1").textContent = details_1[counter][2];
    document.getElementById("zucker_1").textContent = details_1[counter][3];
    document.getElementById("eiweiß_1").textContent = details_1[counter][4];
    document.getElementById("salz_1").textContent = details_1[counter][5];
    document.getElementById("ballaststoffe_1").textContent = details_1[counter][6];
}

function updateDetails(input) {
    document.getElementById("brennwert_1").textContent = details_1_split[counter_split][0];
    document.getElementById("fett_1").textContent = details_1_split[counter_split][1];
    document.getElementById("kohlenhydrate_1").textContent = details_1_split[counter_split][2];
    document.getElementById("zucker_1").textContent = details_1_split[counter_split][3];
    document.getElementById("eiweiß_1").textContent = details_1_split[counter_split][4];
    document.getElementById("salz_1").textContent = details_1_split[counter_split][5];
    document.getElementById("ballaststoffe_1").textContent = details_1_split[counter_split][6];
}

function toggleDropdown() {
    var dropdown = document.getElementById('filter-dropdown');
    dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'block' : 'none';
}

function toggleDropdownLanguages() {
    var dropdown = document.getElementById('language-dropdown');
    dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'block' : 'none';
}

function toggleDropdownSplit() {
    var dropdown = document.getElementById('filter-dropdown-split');
    dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'block' : 'none';
}

function toggleDropdownLanguagesSplit() {
    var dropdown = document.getElementById('language-dropdown-split');
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
            var cardDetails = card.querySelector('.filter').innerHTML;
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

/* Database */
var loginname = 'admin'
var loginpass = 'admin'

var request = new XMLHttpRequest();

request.onreadystatechange = function () {
    // console.log("onreadystatechange: " + request.readyState + ", " +  request.status);
    // console.log(request.responseText);
    if (request.readyState == 4) {
        if (request.status == 200) {
            var response = JSON.parse(request.responseText);
            handlers[response._id](response);
        }
        if (request.status == 404) {
            console.log("not found: " + request.responseText);
        }
    }
};

function get(variable) {
    // console.log("get " + variable);
    request.open("GET", dburl + variable, false);
    request.setRequestHeader("Authorization", "Basic " + btoa(loginname + ":" + loginpass));
    request.send();
}

function update() {
    for (var name in handlers) {
        // console.log("updating " + name);
        get(name);
		// get(split);
    }
    toggleNFCFilter();
	// toggleSplitscreen();
}

// request updates at a fixed interval (ms)
// var intervalID = setInterval(update, 1000);

///////////////////////////////////////////////////////////////////////////////
// your code below

var dbname = "gmci";
var dburl = "http://127.0.0.1:5984/" + dbname + "/";
var handlers = {
    "customer": updateCustomer,
	// "split": updateSplit,
    // add further handlers here
}
var latestName = "None";
var currentName;
var currentFilter;
var split = true; //muss noch aus der DB gelesen werden!!!

function updateCustomer(response) {
    currentName = response.name;
    currentFilter = response.spec;
}

function updateCustomer(response) {
    split = response.split;
}

function toggleSplitscreen(){
	console.log("Splitscreen activated");
	if (split){
		var normalWindow = document.getElementById('normalWindow');
		var gerichte = document.getElementById('gerichte');
		var secondWindow = document.getElementById('secondWindow');
		normalWindow.style.width = "33%";
		normalWindow.style.overflowY = "scroll";
		normalWindow.style.maxHeight = "100vh"
		gerichte.style.flexDirection = "row";
		gerichte.style.justifyContent = "center";
		secondWindow.style.display = "block";
	}
}

function toggleNFCFilter() {
    console.log("Hier!");
    console.log("CurrentName: " + currentName);
    console.log("LatestName: " + latestName);
    //Detect name change
    if (latestName !== currentName) {
        latestName = currentName;
        if (currentName !== "None") {
            toggleFilter("alles");
            if (currentFilter && currentFilter.length > 0) {
                currentFilter.forEach(toggleFilter);
            }
        } else {
            toggleFilter("alles");
        }
    }
}