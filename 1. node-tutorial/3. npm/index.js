const lodash = require("lodash");

const names = ["luiso", "alex", "mia", "angel", "ernesta"];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);
