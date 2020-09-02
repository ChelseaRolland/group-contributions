"use strict"

function renderCoffee(coffee) {
    // var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    // html += '<td>' + coffee.name + '</td>';
    // html += '<td>' + coffee.roast + '</td>';
    // html += '</tr>';
    var html = '<div class="coffee col-6">';
    html += '<p class="d-none">' + coffee.id + '</p>'; /* class="d-none"*/
    html += '<h6 class="d-inline-block pr-1">' + coffee.name + '</h6>';
    html += '<p class="d-inline-block text-muted sizing">' + coffee.roast + '</p>';
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
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let name = (arr[i].name).toLowerCase();
//         if (name === inputedCoffee || name.includes(inputedCoffee)) {
//             newArr.push(arr[i].name);
//         }
//     } return newArr;
// }

// function resultTest (arr) {
//     let testArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].name.includes(coffeeSelection.value)) {
//             testArray.push(arr[i].name);
//         }
//     } return testArray;
// }

// function resultTest (searchArray, searchString) {
//     let testArray = [];
//     for (let i = 0; i < searchArray.length; i++) {
//         if (searchArray[i].includes(searchString)) {
//             testArray.push(searchArray[i]);
//         }
//     } return testArray;
// }


// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//         if (selectedRoast === "all"){
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

function updateCoffeesTRY(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    let inputedCoffee = (coffeeSelection.value).toLowerCase();
    var filteredCoffees = [];
    var newArr = [];


    // coffees.forEach(function(coffee) {
    //     if (coffee.roast === selectedRoast || selectedRoast === "all") {
    //         filteredCoffees.push(coffee);
    //     }
    //     // if ((coffee.name).toLowerCase() === inputedCoffee || ((coffee.name).toLowerCase()).includes(inputedCoffee)) {
    //     //             filteredCoffees.push(coffee);
    //     // }
    //     // if ((coffee.name).toLowerCase() === inputedCoffee || ((coffee.name).toLowerCase()).includes(inputedCoffee)) {
    //     //     filteredCoffees.push(coffee);
    //     // }
    // });

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
            // if it is not the name then it could just be the element itself
    }

    // filteredCoffees.forEach(function (filter) {
    //     if ((filter.toLowerCase()).includes(inputedCoffee)) {
    //         filterCoffeesRoast.push(filter)
    //     }
    // });

    // function coffeeTest(arr) {
    //     let inputedCoffee = (coffeeSelection.value).toLowerCase();
    //     let newArr = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         let name = (arr[i].name).toLowerCase();
    //         if (name === inputedCoffee || name.includes(inputedCoffee)) {
    //             newArr.push(arr[i].name);
    //         }
    //     } return newArr;
    // }
    tbody.innerHTML = renderCoffees(newArr);
}

function updateCoffees2(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection2.value;
    let inputedCoffee = (coffeeSelection2.value).toLowerCase();
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

// submitButton.addEventListener('click', updateCoffeesTRY);

roastSelection.addEventListener('change', updateCoffeesTRY);

coffeeSelection.addEventListener('input', updateCoffeesTRY);

roastSelection2.addEventListener('change', updateCoffees2);

coffeeSelection2.addEventListener('input', updateCoffees2);
