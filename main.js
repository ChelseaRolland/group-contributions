"use strict"

function renderCoffee(coffee) {
    var cardPicture = '';
    function pickPic(object){
        if (object.roast === "light") {
            cardPicture = "img/light-coffee.jpeg"
        } else if (object.roast === "medium") {
            cardPicture = "img/medium-coffee.jpeg"
        } else {
            cardPicture = "img/dark-coffee.jpeg"
        }
        return cardPicture;
    }

    // console.log(pickPic(coffee));

    var html = '<div class="col mb-4">';
    html += '<div class="card p-2">';
    html += '<div class="row no-gutters">';
    html += '<div class="col">';
    html += '<img src="' + pickPic(coffee) + '" class="card-img" alt="coffee">';
    html += '</div>'
    html += '<div class="col-md-8">'
    html += '<div class="card-body p-0 text-center h-100 d-flex justify-content-center flex-column">';
    html += '<h4 class="headings">' + coffee.name + '</h4>';
    html += '<p class="sizing">' + coffee.roast + '</p>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffeesTRY(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    let inputedCoffee = (coffeeSelection.value).toLowerCase();
    var filteredCoffees = [];
    var newArr = [];

    for (let i = 0; i < coffees.length; i++) {
        let roast = coffees[i].roast;
        if(roast === selectedRoast || selectedRoast === "all") {
            filteredCoffees.push(coffees[i]);
        }
    }

    for (let i = 0; i < filteredCoffees.length;  i++) {
        let name = (filteredCoffees[i].name).toLowerCase();
        if (name === inputedCoffee || name.includes(inputedCoffee)){
            newArr.push(filteredCoffees[i])
        }
    }
    tbody.innerHTML = renderCoffees(newArr);
}

function addCoffee (e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let newArr = [];
    for (let i = 0; i < 1; i++) {
        newArr.push({
            id: coffees.length + 1,
            name: coffeeSelection2.value,
            roast: roastSelection2.value
        })
        console.log(newArr)
        // var combineArr = coffees.concat(newArr);
        coffees = coffees.concat(newArr);
        console.log(coffees);
    }

    // tbody.innerHTML = renderCoffees(combineArr);
    updateCoffeesTRY(e);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var submitButton2 = document.querySelector('#add-submit');
var roastSelection = document.querySelector('#roast-selection');
var roastSelection2 = document.querySelector('#add-roast-selection');
var coffeeSelection = document.querySelector('#coffeeName');
var coffeeSelection2 = document.querySelector('#add-coffeeName');



coffees.sort(function (a,b) {
    return b.id - a.id;
})

tbody.innerHTML = renderCoffees(coffees);

submitButton2.addEventListener('click', addCoffee);

roastSelection.addEventListener('change', updateCoffeesTRY);

coffeeSelection.addEventListener('input', updateCoffeesTRY);

roastSelection2.addEventListener('change', updateCoffeesTRY);

coffeeSelection2.addEventListener('input', updateCoffeesTRY);
