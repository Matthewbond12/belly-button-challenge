const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data)
});

// Sort the data by sample values
function init() {
    data = [{
        x: 
        y: 
    }]
}


Plotly.newPlot("plot", data);

// Call updatePlotly() when a change takes place to the dropdown menu
d3.selectAll("#selDataset").on("change", updatePlotly);

// Call function when dropdown menu is selected
function updatePlotly() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign dropdown value to a variable
    let dataset = dropdownMenu.property("value");

    // Inititalize x and y arrays
    let x = [];
    let y = [];

    
}