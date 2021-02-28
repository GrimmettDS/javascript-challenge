
// from data.js
var tableData = data;
var tbody = d3.select('tbody');
var btn = d3.select('button');
var form = d3.select('#form')

populateTable(tableData);
btn.on('click', handleClick);
form.on('submit', handleClick);

// =============================================
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

function handleClick() {
    d3.event.preventDefault();

    var date = d3.select('input').property('value');
    var filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    d3.select('input').property('value', '');
    populateTable(filteredData);
}