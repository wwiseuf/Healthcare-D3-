//set the size of the svg
var svgWidth = 1000;
var svgHeight = 700;

var margin = {
    top: 20,
    right: 40,
    bottom: 80,
    left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold the chart,

var svg = d3
    .select(".chart")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
//.attr("class", "chart");

// Import Data
d3.csv("data/data.csv").then(function (povertyData) {
    // console.log(povertyData);

    // caste poverty and healthcare data as numbers
    povertyData.forEach(data => {
        data.poverty = +data.poverty;
        data.healthcare = +data.healthcare;
    });

    // create scale functions
    var xScale = d3.scaleLinear()
        .domain([d3.min(povertyData, d => d.poverty) * 0.9, d3.max(povertyData, d => d.poverty) * 1.1])
        .range([0, width]);

    var yScale = d3.scaleLinear()
        .domain([d3.min(povertyData, d => d.healthcare) * 0.9, d3.max(povertyData, d => d.healthcare) * 1.1])
        .range([height, 0]);

    // create axis functions
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    // append axes to the chart
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);

    chartGroup.append("g")
        .call(yAxis);

    // create circles
    chartGroup.selectAll("circle")
        .data(povertyData)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(d.poverty))
        .attr("cy", d => yScale(d.healthcare))
        .attr("r", 10)
        .attr("class", "stateCircle")
    //.attr("fill", ".5")

    // add text in the circle
    chartGroup.selectAll()
        .data(povertyData)
        .enter()
        .append("text")
        .attr("x", d => xScale(d.poverty))
        .attr("y", d => yScale(d.healthcare) + 4)
        .text(d => d.abbr)
        .attr("class", "stateText")

    // create axis labels 
    chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left + 40)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .attr("class", "aText")
        .text("Decreased Healthcare (%)");

    chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
        .attr("class", "aText")
        .text("In Poverty(%)");

}).catch(function (error) {
    console.log(error);
});