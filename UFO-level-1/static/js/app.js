// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("#ufo-table");

// BONUS: Refactor to use Arrow Functions!
tableData.forEach((ufoSighting) => {
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    console.log(inputElement);

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    tbody.html('');

    filteredData.forEach((filteredUFO) => {
      var row = tbody.append("tr");
      Object.entries(filteredUFO).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
});