// set the dimensions and margins of the graph
const margin = { top: 20, right: 30, bottom: 30, left: 50 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

const brandColorA = "#2e503b";
const brandColorB = "#C05D20";
const brandColorC = "#25406D";
const brandColorBG = "#f4f2ef";
const brandColor = [brandColorA, brandColorB, brandColorC];

const svg_a = d3
  .select("#build_great_culture")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(svg_a, "Build a great culture", "./data/1_build_culture_data.csv");

const svg_b = d3
  .select("#define_good_culture")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(svg_b, "Define culture", "./data/2_define_good_culture_data.csv");

const svg_c = d3
  .select("#storage")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(
  svg_c,
  "Store culture data in one place",
  "./data/3_store_culture_information_in_one_place.csv"
);

const svg_d = d3
  .select("#upskill")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(
  svg_d,
  "Up-skilling on cultural best practices",
  "./data/4_upskill_data.csv"
);

const svg_e = d3
  .select("#roll_out")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(
  svg_e,
  "Roll out cultural programs today",
  "./data/5_roll_out_program_data.csv"
);

const svg_f = d3
  .select("#tactical")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(
  svg_f,
  "Solve cultural problems with tactical fixes",
  "./data/5_roll_out_program_data.csv"
);

const svg_g = d3
  .select("#engagement")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(
  svg_g,
  "Engagement in the workplace",
  "./data/7_engagement_data.csv"
);

const svg_h = d3
  .select("#purpose_align")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(
  svg_h,
  "Align teams to the purpost of company",
  "./data/8_purpose_alignment_data.csv"
);

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
  .select("#remote_work_efficiency")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(
  svg_o,
  "Remote Work Efficiency",
  "./data/remote_work_efficiency_data.csv"
);

const svg_p = d3
  .select("#psychological_safety")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(
  svg_p,
  "Psychological Safety",
  "./data/psychological_safety_data.csv"
);

const svg_q = d3
  .select("#high_quality_candidates")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(
  svg_q,
  "High quality candidates",
  "./data/high_quality_candidate_data.csv"
);

const svg_r = d3
  .select("#manage_change")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(svg_r, "Manage change", "./data/manage_change_data.csv");

const svg_t = d3
  .select("#identify_conflict_act")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
createGraph(
  svg_t,
  "Identify Conflict Activity",
  "./data/identify_conflict_act_data.csv"
);

// ============
// Create graph function
// ======================
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
    let brandColorFinal =
      brandColor[Math.floor(Math.random() * brandColor.length)];
    const color = d3
      .scaleLinear()
      .domain([0, 0.001]) // Points per square pixel.
      .range(["white", brandColorFinal]);

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
