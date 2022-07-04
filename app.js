// set the dimensions and margins of the graph
const margin = { top: 20, right: 30, bottom: 30, left: 50 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3
  .select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

// read data
d3.csv("./data.csv").then(function (data) {
  // Add X axis
  const x = d3
    .scaleLinear()
    .domain([0, 10])
    .range([margin.left, width - margin.right]);
  svg
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));
  svg
    .append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height - 6)
    .text("Importance");

  // Add Y axis
  const y = d3
    .scaleLinear()
    .domain([0, 10])
    .range([height - margin.bottom, margin.top]);
  svg.append("g").call(d3.axisLeft(y));
  svg
    .append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Satisfaction");

  // Prepare a color palette
  const color = d3
    .scaleLinear()
    .domain([0, 0.001]) // Points per square pixel.
    .range(["#fff", "#6A6A9C"]);

  // compute the density data
  const densityData = d3
    .contourDensity()
    .x(function (d) {
      return x(d.x);
    })
    .y(function (d) {
      return y(d.y);
    })
    .size([width, height])
    .bandwidth(20)(data);

  // show the shape
  svg
    .insert("g", "g")
    .selectAll("path")
    .data(densityData)
    .enter()
    .append("path")
    .attr("d", d3.geoPath())
    .attr("fill", function (d) {
      return color(d.value);
    });
});
