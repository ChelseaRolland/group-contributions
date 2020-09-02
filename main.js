"use strict"

function renderCoffee(coffee) {
    // var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    // html += '<td>' + coffee.name + '</td>';
    // html += '<td>' + coffee.roast + '</td>';
    // html += '</tr>';
    var html = '<div class="coffee">';
    html += '<p class="d-inline-block pr-1">' + coffee.id + '</p>'; /* class="d-none"*/
    html += '<h6 class="d-inline-block pr-1">' + coffee.name + '</h6>';
    html += '<p class="d-inline-block">' + coffee.roast + '</p>';
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


// function coffeeTest(arr) {
//     let inputedCoffee = (coffeeSelection.value).toLowerCase();
//     var html = '';
//     let filterArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if ((coffees[i].name).toLowerCase() === inputedCoffee) {
//             filterArray.push(coffees[i].name);
//         } else {
//             filterArray = [];
//         }
//     }
// }
//
// function resultTest (obj) {
//     let testArray = [];
//     for (let i = 0; i < obj.length; i++) {
//         if (obj[i].name.includes(coffeeSelection.value)) {
//             testArray.push(obj[i].name);
//         }
//     } return testArray;
// }


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        if (selectedRoast === "all"){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
function updateCoffeesAdd(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection2.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        if (selectedRoast === "all"){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
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

// console.log(coffeeTest(coffees));

// console.log(resultTest(coffees))

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var roastSelection2 = document.querySelector('#add-roast-selection');
var coffeeSelection = document.querySelector('#coffeeName');
var coffeeSelection2 = document.querySelector('#add-coffeeName');

// console.log("Pre-sort", coffees);

coffees.sort(function (a,b) {
    return b.id - a.id;
})
// console.log("Post-sort", coffees);

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

roastSelection.addEventListener('change', updateCoffees);

roastSelection2.addEventListener('change', updateCoffeesAdd);

// coffeeSelection.addEventListener('input', coffeeTest);
// coffeeSelection2.addEventListener('input', coffeeTest);


// console.log(coffeeSelection);
// console.log(coffeeSelection2);