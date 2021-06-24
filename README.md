# d3-healthcare

Created a scatter plot using java script and D3

Purpose
The core purpose of this assignment is to create a scatter plot between data variables such as Healthcare vs. Poverty  The dataset id based on 2014 ACS 1 year estimates from the US Census Bureau.The current data set includes data on rates of income, obesity, poverty etc. by state.

D3 Dabbler
Using D3 techniques, scatter plot was created that represents each state with circle element. The graphic was coded in the app.js. Data were imported using the d3.csv function. State abbreviation were included in the circles and labels were placed to the left and bottom of the chart.

Following is the chart of Healthcare vs. Poverty:


More Data, More Dynamics
Additional labels were placed in the scatter plot that were user interactive with click events. With each click or selection of the labels the locations of the circles as well as the range of the axes were transited.


Sample Code 1: 

 A couple functions created for the SVG 
 
 // function used to update scale on axis
function xScale(povertyData, chosenXAxis) {
    // create scales
    var xscale = d3.scaleLinear()
        .domain([d3.min(povertyData, d => d[chosenXAxis]) * 0.9,
            d3.max(povertyData, d => d[chosenXAxis]) * 1.1
        ])
        .range([0, width]);

    return xscale;
}

function yScale(povertyData, chosenYAxis) {
    // create scales
    var yscale = d3.scaleLinear()
        .domain([d3.min(povertyData, d => d[chosenYAxis]) * 0.9,
            d3.max(povertyData, d => d[chosenYAxis]) * 1.1
        ])
        .range([height, 0]);

    return yscale;
}


Example code 2:

// function used for updating circles group with a transition to
// new circles
function renderXCircles(circlesGroup, newXScale, chosenXAxis) {

    circlesGroup.transition()
        .duration(1000)
        .attr("cx", d => newXScale(d[chosenXAxis]))
    return circlesGroup;
}

function renderYCircles(circlesGroup, newYScale, chosenYAxis) {

    circlesGroup.transition()
        .duration(1000)
        .attr("cy", d => newYScale(d[chosenYAxis]))
    return circlesGroup;
}

function renderCirclelabel(circlesLabel, newXScale, newYScale, chosenXAxis, chosenYAxis) {

    circlesLabel.transition()
        .duration(1000)
        .attr("x", d => newXScale(d[chosenXAxis]))
        .attr("y", d => newYScale(d[chosenYAxis]) + 4)
        .text(d => d.abbr)
    return circlesLabel;
}
