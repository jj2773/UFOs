// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
// var date = d3.select("#datetime").property("value");
// var city_nm = d3.select("#cityid").property("value");
// var state_nm = d3.select("#stateid").property("value");
// var country_nm = d3.select("#countryid").property("value");
// var shape_nm = d3.select("#shapeid").property("value");

// var filtersObject = {date: d3.select("#datetime").property("value"),
//             city: d3.select("#cityid").property("value"),
//             state: d3.select("#stateid").property("value"),
//             country: d3.select("#countryid").property("value"),
//             shape: d3.select("#shapeid").property("value")};

// 2. Attach an event to listen for changes to each filter
// Attach an event to listen for the form button
var inputField=d3.select("#cityid");
var inputclass=document.getElementById("listid");
console.log(inputclass.children[1].children[1].value,'testing')

let el_id, value
for (var i=0; i<5; i++) {
  el_id=inputclass.children[i].children[1].id
  value=inputclass.children[i].children[1].value
}

inputclass.addEventListener("click", function() {
// var newText = d3.event.target.value;
// var textid = d3.event.target.inputField
//  console.log(newText);
filterTable(el_id,value);
});

// 3. Use this function to update the filters. 
function updateFilters() {

console.log(filtersObject);

    // 4a. Save the element that was changed as a variable.
let elementjj=d3.select("#city");

    // 4b. Save the value that was changed as a variable.
let elementvalue=elementjj.property("value");
let elementvalueid=elementjj.property("id");
console.log(elementvalue)
console.log(elementvalueid)

    // 4c. Save the id of the filter that was changed as a variable.

  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
 
  
    // 6. Call function to apply all filters and rebuild the table
    
  
  }
  
  

  // 7. Use this function to filter the table when data is entered.
  function filterTable(el_id, value) {
  console.log('function was ran',el_id,value)
    // 8. Set the filtered data to the tableData.
    // let datefilter=document.getElementById("datetime").value;
    // console.log(datefilter)    
  let filteredData = tableData;
if (el_id) {
  filteredData = filteredData.filter(row => row[el_id] === value);
}
  

 

    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
  
    // 10. Finally, rebuild the table using the filtered data
  //filteredData = filteredData.filter(row => row.datetime === date);
  //};
console.log(filteredData);
 buildTable(filteredData);
 }



  // Build the table when the page loads
 buildTable(tableData);
