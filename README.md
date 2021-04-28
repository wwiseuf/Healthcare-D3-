# d3-healthcare

Create a scatter plot between two (or more) data variables.

Purpose
The core purpose of this assignment is to create a scatter plot between data variables such as Healthcare vs. Poverty or Smokers vs. Age. The dataset id based on 2014 ACS 1 year estimates from the US Census Bureau.The current data set includes data on rates of income, obesity, poverty etc. by state.

D3 Dabbler
Using D3 techniques, scatter plot was created that represents each state with circle element. The graphic was coded in the app.js. Data were imported using the d3.csv function. State abbreviation were included in the circles and labels were placed to the left and bottom of the chart.

Following is the chart of Healthcare vs. Poverty:

scatter

More Data, More Dynamics
Additional labels were placed in the scatter plot that were user interactive with click events. With each click or selection of the labels the locations of the circles as well as the range of the axes were transited.
Following is the chart with three labels on each axis:

animated-scatter

Incorporate d3-tip
While the ticks on the axes allow us to infer approximate values for each circle, it's impossible to determine the true value without adding another layer of data. Enter tooltips: developers can implement these in their D3 graphics to reveal a specific element's data when the user hovers their cursor over the element. Here, d3-tip.js plugin developed by Justin Palmer was incorporated to give true values
