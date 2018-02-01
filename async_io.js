var fs = require("fs");

var filename = process.argv[2];

fs.readFile(filename, function (err, data) {
   if (err) {
      return console.error(err);
   }
   //console.log("Asynchronous read: " + data.toString());
   var str_data = data.toString();
   var arr = str_data.split("\n");
   console.log(arr.length-1);
});
