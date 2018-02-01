var fs = require("fs");

var filename = process.argv[2]

var data = fs.readFileSync(filename)
var str_data = data.toString()
var arr = str_data.split("\n")
console.log(arr.length-1)
