// from data.js
var tableData = data;

// YOUR CODE HERE!
// Assign the data from `data.js` to a descriptive variable

// Select the button
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);


data.forEach((sightSeeing) => {
    var row = tbody.append("tr");
    Object.entries(sightSeeing).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
  
  
  // dateInput.on("change", clickSelect);

  
  // dateInput.on("change", clickSelect);
  
  