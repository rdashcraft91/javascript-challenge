//
const fullData = data;

// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("#ufo-table");

// Build table with all data
tableData.forEach((ufoSighting) => {
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Populate dropdown menus with items from table
var dates = tableData.map(data => data.datetime);
var uniqueDates = [];

dates.forEach(function(date) {
  if (uniqueDates.includes(date)) {
    console.log('repeat date');
  }
  else {uniqueDates.push(date)};
});

console.log(uniqueDates);

d3.select("#date")
    .selectAll("option")
    .data(uniqueDates)
    .enter()
    .append("option", )
    .attr("value", function(d) {
      return d;
    })
    .text(function(d) {
      return d;
    });

// Call updateTable() when a change takes place to the DOM
d3.selectAll("#date").on("change", updateTable);

// This function is called when a dropdown menu item is selected
function updateTable() {
  
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#date");
  // Assign the text of the dropdown menu option to a variable
  var selectedData = dropdownMenu.property("value");

  // Filter through the data for the filtered data
  var filteredData = tableData.filter(sighting => sighting.datetime === selectedData);

  console.log(filteredData);

  if (selectedData === 'All') {
    console.log('All');
    // Clear the table
   tbody.html('');
    
    fullData.forEach((ufoSighting) => {
      var row = tbody.append("tr");
      Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    })}
  else {
    // Clear the table
   tbody.html('');

    // Show only filtered data
    filteredData.forEach((filteredUFO) => {
      var row = tbody.append("tr");
      Object.entries(filteredUFO).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });}
}

// // Select the button
// var button = d3.select("#filter-btn");

// button.on("click", function() {

//     // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#datetime");

//     console.log(inputElement);

//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");

//     console.log(inputValue);

//     // Filter through the data for the filtered data
//     var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

//     console.log(filteredData);

//     // Clear the table
//     tbody.html('');

//     // Show only filtered data
//     filteredData.forEach((filteredUFO) => {
//       var row = tbody.append("tr");
//       Object.entries(filteredUFO).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//       });
//     });
// });