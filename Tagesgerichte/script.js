var days = ["Montag, 01.01.2024", "Dienstag, 02.01.2024", "Mittwoch, 03.01.2024"];

var meal_1 = ["Essen1_1.jpg", "Essen1_2.jpg", "Essen1_3.jpg"];
var meal_2 = ["Essen2_1.jpg", "Essen2_2.jpg", "Essen2_3.jpg"];
var meal_3 = ["Essen3_1.jpg", "Essen3_2.jpg", "Essen3_3.jpg"];
var meal_4 = ["Essen4_1.jpg", "Essen4_2.jpg", "Essen4_3.jpg"];
var meal_5 = ["Essen5_1.jpg", "Essen5_2.jpg", "Essen5_3.jpg"];
var meal_6 = ["Essen6_1.jpg", "Essen6_2.jpg", "Essen6_3.jpg"];

var details_1 = [["209kcal/876kJ", "7,9g", "26,5g", "0,7g", "7,0g", "0,8g", "1,4g"], ["938kcal/3927kJ", "43,8g", "93,8g", "3,9g", "37,8g", "5,3g", "7,7g"], ["581kcal/2430kJ", "20g", "48g", "0g", "51g", "1g", "3,4g"]];

var details_2 = [["550kcal", "6g", "30g", "4g", "25g", "8g", "2g"], ["600kcal", "50g", "20g", "2g", "4g", "2g", "2,8g"], ["490kcal", "15g", "58g", "12g", "91g", "13g", "2g"]];

var details_3 = [["1800g", "40g", "20g", "5,5g", "2g", "4g", "3g"], ["1200kcal", "30g", "28g", "13g", "3g", "3g", "4,2g"], ["800kcal", "17g", "46g", "19g", "44g", "33g", "12g"]];

var details_4 = [["328kcal/920kJ", "18g", "13g", "0,8g", "1,1g", "2g", "1,3g"], ["835kcal", "20,3g", "15,4g", "5g", "8,9g", "3,3g", "10g"], ["440kcal", "29g", "4g", "1g", "29g", "4g", "1,1g"]];

var details_5 = [["2000kcal", "50g", "30g", "18g", "11g", "12g", "5g"], ["2500kcal", "77g", "34g", "7,9g", "28,9g", "2,2g", "11g"], ["2300kcal", "88g", "13g", "12g", "39g", "2,2g", "1,9g"]];

var details_6 = [["2100kcal", "70g", "40g", "15g", "5g", "25g", "4g"], ["900kcal", "23g", "55g", "8,8g", "15g", "3,3g", "18g"], ["1200kcal", "20g", "10g", "11g", "12g", "1,3g", "1,4g"]];

var preis_1 = ["4,00€", "3,50€", "6,00€"];
var preis_2 = ["1,99€", "1,60€", "1,30€"];
var preis_3 = ["2,50€", "4,50€", "6,00€"];
var preis_4 = ["4,00€", "3,50€", "6,00€"];
var preis_5 = ["5,00€", "6,50€", "6,00€"];
var preis_6 = ["5,00€", "5,50€", "3,50€"];
let counter = 0;
let counter_split = 0;


function day_backwards(input) {
    if (counter > 0) {
        counter -= 1;
        document.getElementById("day").textContent = days[counter];
        document.getElementById("meal_1").src = meal_1[counter];
        document.getElementById("preis_1").textContent = preis_1[counter];

        document.getElementById("meal_2").src = meal_2[counter];
        document.getElementById("preis_2").textContent = preis_2[counter];

        document.getElementById("meal_3").src = meal_3[counter];
        document.getElementById("preis_3").textContent = preis_3[counter];

        document.getElementById("meal_4").src = meal_4[counter];
        document.getElementById("preis_4").textContent = preis_4[counter];

        document.getElementById("meal_5").src = meal_5[counter];
        document.getElementById("preis_5").textContent = preis_5[counter];

        document.getElementById("meal_6").src = meal_6[counter];
        document.getElementById("preis_6").textContent = preis_6[counter];

        updateDetails(input);
    }
}

function day_backwards_split(input) {
    if (counter_split > 0) {
        counter_split -= 1;
        document.getElementById("day_split").textContent = days[counter_split];
        document.getElementById("meal_1_split").src = meal_1[counter_split];
        document.getElementById("preis_1_split").textContent = preis_1[counter_split];

        document.getElementById("meal_2_split").src = meal_2[counter_split];
        document.getElementById("preis_2_split").textContent = preis_2[counter_split];

        document.getElementById("meal_3_split").src = meal_3[counter_split];
        document.getElementById("preis_3_split").textContent = preis_3[counter_split];

        document.getElementById("meal_4_split").src = meal_4[counter_split];
        document.getElementById("preis_4_split").textContent = preis_4[counter_split];

        document.getElementById("meal_5_split").src = meal_5[counter_split];
        document.getElementById("preis_5_split").textContent = preis_5[counter_split];

        document.getElementById("meal_6_split").src = meal_6[counter_split];
        document.getElementById("preis_6_split").textContent = preis_6[counter_split];

        updateDetails_split(input);
    }
}

function day_forwards(input) {
    if (counter < (days.length - 1)) {
        counter += 1;
        document.getElementById("day").textContent = days[counter];
        document.getElementById("meal_1").src = meal_1[counter];
        document.getElementById("preis_1").textContent = preis_1[counter];

        document.getElementById("meal_2").src = meal_2[counter];
        document.getElementById("preis_2").textContent = preis_2[counter];

        document.getElementById("meal_3").src = meal_3[counter];
        document.getElementById("preis_3").textContent = preis_3[counter];

        document.getElementById("meal_4").src = meal_4[counter];
        document.getElementById("preis_4").textContent = preis_4[counter];

        document.getElementById("meal_5").src = meal_5[counter];
        document.getElementById("preis_5").textContent = preis_5[counter];

        document.getElementById("meal_6").src = meal_6[counter];
        document.getElementById("preis_6").textContent = preis_6[counter];


        updateDetails(input);
    }
}

function day_forwards_split(input) {
    if (counter_split < (days.length - 1)) {
        counter_split += 1;
        document.getElementById("day_split").textContent = days[counter_split];
        document.getElementById("meal_1_split").src = meal_1[counter_split];
        document.getElementById("preis_1_split").textContent = preis_1[counter_split];

        document.getElementById("meal_2_split").src = meal_2[counter_split];
        document.getElementById("preis_2_split").textContent = preis_2[counter_split];

        document.getElementById("meal_3_split").src = meal_3[counter_split];
        document.getElementById("preis_3_split").textContent = preis_3[counter_split];

        document.getElementById("meal_4_split").src = meal_4[counter_split];
        document.getElementById("preis_4_split").textContent = preis_4[counter_split];

        document.getElementById("meal_5_split").src = meal_5[counter_split];
        document.getElementById("preis_5_split").textContent = preis_5[counter_split];

        document.getElementById("meal_6_split").src = meal_6[counter_split];
        document.getElementById("preis_6_split").textContent = preis_6[counter_split];


        updateDetails_split(input);
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


    document.getElementById("brennwert_2").textContent = details_2[counter][0];
    document.getElementById("fett_2").textContent = details_2[counter][1];
    document.getElementById("kohlenhydrate_2").textContent = details_2[counter][2];
    document.getElementById("zucker_2").textContent = details_2[counter][3];
    document.getElementById("eiweiß_2").textContent = details_2[counter][4];
    document.getElementById("salz_2").textContent = details_2[counter][5];
    document.getElementById("ballaststoffe_2").textContent = details_2[counter][6];

    document.getElementById("brennwert_3").textContent = details_3[counter][0];
    document.getElementById("fett_3").textContent = details_3[counter][1];
    document.getElementById("kohlenhydrate_3").textContent = details_3[counter][2];
    document.getElementById("zucker_3").textContent = details_3[counter][3];
    document.getElementById("eiweiß_3").textContent = details_3[counter][4];
    document.getElementById("salz_3").textContent = details_3[counter][5];
    document.getElementById("ballaststoffe_3").textContent = details_3[counter][6];

    document.getElementById("brennwert_4").textContent = details_4[counter][0];
    document.getElementById("fett_4").textContent = details_4[counter][1];
    document.getElementById("kohlenhydrate_4").textContent = details_4[counter][2];
    document.getElementById("zucker_4").textContent = details_4[counter][3];
    document.getElementById("eiweiß_4").textContent = details_4[counter][4];
    document.getElementById("salz_4").textContent = details_4[counter][5];
    document.getElementById("ballaststoffe_4").textContent = details_4[counter][6];

    document.getElementById("brennwert_5").textContent = details_5[counter][0];
    document.getElementById("fett_5").textContent = details_5[counter][1];
    document.getElementById("kohlenhydrate_5").textContent = details_5[counter][2];
    document.getElementById("zucker_5").textContent = details_5[counter][3];
    document.getElementById("eiweiß_5").textContent = details_5[counter][4];
    document.getElementById("salz_5").textContent = details_5[counter][5];
    document.getElementById("ballaststoffe_5").textContent = details_5[counter][6];

    document.getElementById("brennwert_6").textContent = details_6[counter][0];
    document.getElementById("fett_6").textContent = details_6[counter][1];
    document.getElementById("kohlenhydrate_6").textContent = details_6[counter][2];
    document.getElementById("zucker_6").textContent = details_6[counter][3];
    document.getElementById("eiweiß_6").textContent = details_6[counter][4];
    document.getElementById("salz_6").textContent = details_6[counter][5];
    document.getElementById("ballaststoffe_6").textContent = details_6[counter][6];
}

function updateDetails_split(input) {
    document.getElementById("brennwert_1_split").textContent = details_1[counter_split][0];
    document.getElementById("fett_1_split").textContent = details_1[counter_split][1];
    document.getElementById("kohlenhydrate_1_split").textContent = details_1[counter_split][2];
    document.getElementById("zucker_1_split").textContent = details_1[counter_split][3];
    document.getElementById("eiweiß_1_split").textContent = details_1[counter_split][4];
    document.getElementById("salz_1_split").textContent = details_1[counter_split][5];
    document.getElementById("ballaststoffe_1_split").textContent = details_1[counter_split][6];


    document.getElementById("brennwert_2_split").textContent = details_2[counter_split][0];
    document.getElementById("fett_2_split").textContent = details_2[counter_split][1];
    document.getElementById("kohlenhydrate_2_split").textContent = details_2[counter_split][2];
    document.getElementById("zucker_2_split").textContent = details_2[counter_split][3];
    document.getElementById("eiweiß_2_split").textContent = details_2[counter_split][4];
    document.getElementById("salz_2_split").textContent = details_2[counter_split][5];
    document.getElementById("ballaststoffe_2_split").textContent = details_2[counter_split][6];

    document.getElementById("brennwert_3_split").textContent = details_3[counter_split][0];
    document.getElementById("fett_3_split").textContent = details_3[counter_split][1];
    document.getElementById("kohlenhydrate_3_split").textContent = details_3[counter_split][2];
    document.getElementById("zucker_3_split").textContent = details_3[counter_split][3];
    document.getElementById("eiweiß_3_split").textContent = details_3[counter_split][4];
    document.getElementById("salz_3_split").textContent = details_3[counter_split][5];
    document.getElementById("ballaststoffe_3_split").textContent = details_3[counter_split][6];

    document.getElementById("brennwert_4_split").textContent = details_4[counter_split][0];
    document.getElementById("fett_4_split").textContent = details_4[counter_split][1];
    document.getElementById("kohlenhydrate_4_split").textContent = details_4[counter_split][2];
    document.getElementById("zucker_4_split").textContent = details_4[counter_split][3];
    document.getElementById("eiweiß_4_split").textContent = details_4[counter_split][4];
    document.getElementById("salz_4_split").textContent = details_4[counter_split][5];
    document.getElementById("ballaststoffe_4_split").textContent = details_4[counter_split][6];

    document.getElementById("brennwert_5_split").textContent = details_5[counter_split][0];
    document.getElementById("fett_5_split").textContent = details_5[counter_split][1];
    document.getElementById("kohlenhydrate_5_split").textContent = details_5[counter_split][2];
    document.getElementById("zucker_5_split").textContent = details_5[counter_split][3];
    document.getElementById("eiweiß_5_split").textContent = details_5[counter_split][4];
    document.getElementById("salz_5_split").textContent = details_5[counter_split][5];
    document.getElementById("ballaststoffe_5_split").textContent = details_5[counter_split][6];

    document.getElementById("brennwert_6_split").textContent = details_6[counter_split][0];
    document.getElementById("fett_6_split").textContent = details_6[counter_split][1];
    document.getElementById("kohlenhydrate_6_split").textContent = details_6[counter_split][2];
    document.getElementById("zucker_6_split").textContent = details_6[counter_split][3];
    document.getElementById("eiweiß_6_split").textContent = details_6[counter_split][4];
    document.getElementById("salz_6_split").textContent = details_6[counter_split][5];
    document.getElementById("ballaststoffe_6_split").textContent = details_6[counter_split][6];
}

function toggleDropdown() {
    var dropdown = document.getElementById('filter-dropdown');
    dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'block' : 'none';
}

function toggleDropdownLanguages() {
    var dropdown = document.getElementById('language-dropdown');
    dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'block' : 'none';
}

function toggleDropdownLanguagesSplit() {
    var dropdown = document.getElementById('language-dropdown-split');
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
    }
    toggleNFCFilter();
	toggleSplitscreen();
}

// request updates at a fixed interval (ms)
var intervalID = setInterval(update, 1000);

///////////////////////////////////////////////////////////////////////////////
// your code below

var dbname = "gmci";
var dburl = "http://127.0.0.1:5984/" + dbname + "/";
var handlers = {
    "customer": updateCustomer,
	"splitscreen": updateSplitScreen,
    // add further handlers here
}
var latestName = "None";
var currentName;
var currentFilter;
var isActive = false;
var isRunning = false;
var timerset = false;

function updateCustomer(response) {
    currentName = response.name;
    currentFilter = response.spec;
}

function updateSplitScreen(response) {
    isActive = response.isActive;
}

function toggleSplitscreen(){
	if (isActive && !isRunning){
        isRunning = true;
		console.log("Splitscreen activated");
		splitScreen();
	}else if(!isActive){
        isRunning = false;
    }
}

function splitScreen(){
	timerstart();
	var normalWindow = document.getElementById('normalWindow');
	var gerichte = document.getElementById('gerichte');
	var secondWindow = document.getElementById('secondWindow');
	var timer = document.getElementById('timer');
	normalWindow.style.width = "33.333333333333333333333333333333%";
	gerichte.style.justifyContent = "center";
	secondWindow.style.display = "block";
	timer.textContent = "1:00";
	timer.style.visibility = "visible";
}

function reverseSplit(){
	split = true;
	var normalWindow = document.getElementById('normalWindow');
	var gerichte = document.getElementById('gerichte');
	var secondWindow = document.getElementById('secondWindow');
	var timer = document.getElementById('timer');
	normalWindow.style.width = "100%";
	gerichte.style.justifyContent = "space-evenly";
	secondWindow.style.display = "none";
	stopTimer();
	timer.textContent = "1:00";
	timer.style.visibility = "hidden";
}

function splitTimer(){
	if (!split){
		console.log("reverse split by timer");
		reverseSplit();
	}
}

var func;
var sec = 0;
var min = 0;

function timerstart(){
	func = setInterval( function(){
		var timer = document.getElementById('timer');
		if (sec == 0){
			timer.textContent = "1:00";
		}else if (60 - sec%60 < 10){
			timer.textContent = "0:0" + (60 - sec%60);
		}else{
			timer.textContent = "0:" + (60 - sec%60);
		}
		
		if (sec >= 60){
			reverseSplit();
			stopTimer();
		}
		sec++;
	}, 1000);
}

function stopTimer() {
	clearInterval(func);
	sec = 0;
}

function toggleNFCFilter() {
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