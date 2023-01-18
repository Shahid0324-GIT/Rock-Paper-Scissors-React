var addDays = require("date-fns/addDays");
var format = require("date-fns/format");
var isValid = require("date-fns/isValid");
const newDate = addDays(new Date(2022, 0, 15), 10);
console.log(newDate);

const date = format(newDate, "yyyy-MM-dd");
console.log(date);

console.log(isValid(new Date(date)));
