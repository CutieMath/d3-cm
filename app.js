// set the dimensions and margins of the graph
const margin = { top: 20, right: 30, bottom: 30, left: 50 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

const brandColorA = "#2e503b";
const brandColorB = "#C05D20";
const brandColorC = "#25406D";
const brandColorBG = "#f4f2ef";

const svg_i = d3
  .select("#leadership")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(svg_i, "Leadership Capability", "./data/leadership_data.csv");

const svg_j = d3
  .select("#reduce_turnover")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(svg_j, "Reduce Turnover", "./data/reduce_turnover_data.csv");

const svg_k = d3
  .select("#see_barrier")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(svg_k, "See barrier", "./data/see_barriers_data.csv");

const svg_l = d3
  .select("#attractiveness")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(
  svg_l,
  "Attractive Place to work",
  "./data/attractive_place_to_work_data.csv"
);

const svg_m = d3
  .select("#onboard_new")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(svg_m, "Onboarding new staff", "./data/onborad_new_data.csv");

const svg_n = d3
  .select("#transparency")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(svg_n, "Transparency", "./data/transparency_data.csv");

const svg_o = d3
  .select("#productivity")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(
  svg_o,
  "Productivity level",
  "./data/level_of_productivity_data.csv"
);

function createGraph(svgName, title, dataFilePath) {
  svgName
    .append("text")
    .attr("x", width / 2)
    .attr("y", 2 - margin.top / 2)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .style("text-decoration", "underline")
    .text(title);

  // read data
  d3.csv(dataFilePath).then(function (data) {
    // Add X axis
    const x = d3
      .scaleLinear()
      .domain([0, 10])
      .range([margin.left, width - margin.right]);
    svgName
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));
    svgName
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
    svgName.append("g").call(d3.axisLeft(y));
    svgName
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
      .range(["white", brandColorC]);

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
    svgName
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
}

// append the svg object to the body of the page
const svg = d3
  .select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

svg
  .append("text")
  .attr("x", width / 2)
  .attr("y", 2 - margin.top / 2)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .style("text-decoration", "underline")
  .text("Build a great culture");

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
    .range(["white", brandColorA]);

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

// Define a good culture
const svg_b = d3
  .select("#define_good_culture")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

svg_b
  .append("text")
  .attr("x", width / 2)
  .attr("y", 2 - margin.top / 2)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .style("text-decoration", "underline")
  .text("Define a good culture");

// read data
d3.csv("./define_good_culture_data.csv").then(function (data) {
  // Add X axis
  const x = d3
    .scaleLinear()
    .domain([0, 10])
    .range([margin.left, width - margin.right]);
  svg_b
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));
  svg_b
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
  svg_b.append("g").call(d3.axisLeft(y));
  svg_b
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
    .range(["white", brandColorC]);

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
  svg_b
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

// Store in one place
const svg_c = d3
  .select("#storage")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

svg_c
  .append("text")
  .attr("x", width / 2)
  .attr("y", 2 - margin.top / 2)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .style("text-decoration", "underline")
  .text("Store");

// read data
d3.csv("./data/store_culture_information_in_one_place.csv").then(function (
  data
) {
  // Add X axis
  const x = d3
    .scaleLinear()
    .domain([0, 10])
    .range([margin.left, width - margin.right]);
  svg_c
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));
  svg_c
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
  svg_c.append("g").call(d3.axisLeft(y));
  svg_c
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
    .range(["white", brandColorB]);

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
  svg_c
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

// Upskill
const svg_d = d3
  .select("#upskill")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

svg_d
  .append("text")
  .attr("x", width / 2)
  .attr("y", 2 - margin.top / 2)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .style("text-decoration", "underline")
  .text("Upskill");

// read data
d3.csv("./data/upskill_data.csv").then(function (data) {
  // Add X axis
  const x = d3
    .scaleLinear()
    .domain([0, 10])
    .range([margin.left, width - margin.right]);
  svg_d
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));
  svg_d
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
  svg_d.append("g").call(d3.axisLeft(y));
  svg_d
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
    .range(["white", brandColorA]);

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
  svg_d
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

// Roll out
const svg_e = d3
  .select("#roll_out")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

svg_e
  .append("text")
  .attr("x", width / 2)
  .attr("y", 2 - margin.top / 2)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .style("text-decoration", "underline")
  .text("Roll Out Culture Programs");

// read data
d3.csv("./data/roll_out_program_data.csv").then(function (data) {
  // Add X axi
  const x = d3
    .scaleLinear()
    .domain([0, 10])
    .range([margin.left, width - margin.right]);
  svg_e
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));
  svg_e
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
  svg_e.append("g").call(d3.axisLeft(y));
  svg_e
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
    .range(["white", brandColorC]);

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
  svg_e
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

// Tactical
const svg_f = d3
  .select("#tactical")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

svg_f
  .append("text")
  .attr("x", width / 2)
  .attr("y", 2 - margin.top / 2)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .style("text-decoration", "underline")
  .text("Tactical");

// read data
d3.csv("./data/tactical_fix_data.csv").then(function (data) {
  // Add X axis
  const x = d3
    .scaleLinear()
    .domain([0, 10])
    .range([margin.left, width - margin.right]);
  svg_f
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));
  svg_f
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
  svg_f.append("g").call(d3.axisLeft(y));
  svg_f
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
    .range(["white", brandColorB]);

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
  svg_f
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

// Engagement
const svg_g = d3
  .select("#engagement")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

svg_g
  .append("text")
  .attr("x", width / 2)
  .attr("y", 2 - margin.top / 2)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .style("text-decoration", "underline")
  .text("Engagement");

// read data
d3.csv("./data/engagement_data.csv").then(function (data) {
  // Add X axis
  const x = d3
    .scaleLinear()
    .domain([0, 10])
    .range([margin.left, width - margin.right]);
  svg_g
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));
  svg_g
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
  svg_g.append("g").call(d3.axisLeft(y));
  svg_g
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
    .range(["white", brandColorC]);

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
  svg_g
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
