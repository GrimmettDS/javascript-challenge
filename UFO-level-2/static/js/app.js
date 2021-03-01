// from data.js (given)
var tableData = data;

// Create variables from html
var tbody = d3.select('tbody');
var button = d3.select('button');
var form = d3.select('#form');
var input = d3.selectAll('input');

populateTable(tableData);

// Create event listener for "click" on the button and "return" submission
button.on('click', handleClick);
form.on('submit', handleClick);
input.on('change', handleChange);

// Create and display the table in index.html
function populateTable(data) {
    tbody.html("");

    data.forEach(dataRow => {
        var row = tbody.append('tr');

        Object.values(dataRow).forEach(val => {
            var cell = row.append('td');

            cell.text(val);
        });
    });
};

var filteredData = tableData;

// Function handling for any changes
function handleChange() {

    var key = d3.select(this).property('id');
    var value = d3.select(this).property('value');

    if (value) {
        filteredData = filteredData.filter(row => row[key] === value);
    };

    populateTable(filteredData);
}

// Create and display the filtered table
function handleClick() {
    input.property("value", "");
    filteredData = tableData;

    populateTable(filteredData);
}
