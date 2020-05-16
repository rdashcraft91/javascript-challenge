//
const fullData = data;

// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("#ufo-table").select('tbody');

// Build table with all data
tableData.forEach((ufoSighting) => {
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Populate Date Dropdown
var dates = tableData.map(data => data.datetime);
var uniqueDates = [];

dates.forEach(function(date) {
  if (uniqueDates.includes(date)) {
    console.log('repeat date');
  }
  else {uniqueDates.push(date)};
});

console.log(uniqueDates);

d3.select("#datetime")
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

// Populate City Dropdown
var cities = tableData.map(data => data.city);
var uniqueCity = [];

cities.forEach(function(city) {
  if (uniqueCity.includes(city)) {
    console.log('repeat city');
  }
  else {uniqueCity.push(city)};
});

console.log(uniqueCity);

d3.select("#city")
    .selectAll("option")
    .data(uniqueCity)
    .enter()
    .append("option", )
    .attr("value", function(d) {
      return d;
    })
    .text(function(d) {
      return d;
    });

// Populat State Dropdown
var states = tableData.map(data => data.state);
var uniqueState = [];

states.forEach(function(state) {
  if (uniqueState.includes(state)) {
    console.log('repeat state');
  }
  else {uniqueState.push(state)};
});

console.log(uniqueState);

d3.select("#state")
    .selectAll("option")
    .data(uniqueState)
    .enter()
    .append("option", )
    .attr("value", function(d) {
      return d;
    })
    .text(function(d) {
      return d;
    });

// Populate Country Dropdown
var countries = tableData.map(data => data.country);
var uniqueCountry = [];

countries.forEach(function(country) {
  if (uniqueCountry.includes(country)) {
    console.log('repeat country');
  }
  else {uniqueCountry.push(country)};
});

console.log(uniqueCountry);

d3.select("#country")
    .selectAll("option")
    .data(uniqueCountry)
    .enter()
    .append("option", )
    .attr("value", function(d) {
      return d;
    })
    .text(function(d) {
      return d;
    });

// Populate Shape Dropdown
var shapes = tableData.map(data => data.shape);
var uniqueShape = [];

shapes.forEach(function(shape) {
  if (uniqueShape.includes(shape)) {
    console.log('repeat city');
  }
  else {uniqueShape.push(shape)};
});

console.log(uniqueShape);

d3.select("#shape")
    .selectAll("option")
    .data(uniqueShape)
    .enter()
    .append("option", )
    .attr("value", function(d) {
      return d;
    })
    .text(function(d) {
      return d;
    });

// Call updateTable() when a change takes place to the DOM
d3.selectAll("#date").on("change", function() {var filter = 'datetime'; updateTable(filter)});
d3.selectAll("#city").on("change", function() {var filter = 'city'; updateTable(filter)});
d3.selectAll("#state").on("change", function() {var filter = 'state'; updateTable(filter)});
d3.selectAll("#country").on("change", function() {var filter = 'country'; updateTable(filter)});
d3.selectAll("#shape").on("change", function() {var filter = 'shape'; updateTable(filter)});

// This function is called when a dropdown menu item is selected
function updateTable(filter) {
  
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select(`#${filter}`);
  // Assign the text of the dropdown menu option to a variable
  var selectedData = dropdownMenu.property("value");

  // Filter through the data for the filtered data
  if (filter === 'datetime') {
  var filteredData = tableData.filter(sighting => sighting.datetime === selectedData);}
  if (filter === 'city') {
    var filteredData = tableData.filter(sighting => sighting.city === selectedData);}
  if (filter === 'state') {
    var filteredData = tableData.filter(sighting => sighting.state === selectedData);}
  if (filter === 'country') {
    var filteredData = tableData.filter(sighting => sighting.country === selectedData);}
  if (filter === 'shape') {
    var filteredData = tableData.filter(sighting => sighting.shape === selectedData);}

  console.log(filteredData);

  if (selectedData === 'all') {
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
