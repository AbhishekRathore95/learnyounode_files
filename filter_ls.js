var fs = require("fs");
var path = require("path");

var filename = process.argv[2];
var ext = process.argv[3];

fs.readdir(filename , function(err,data){
if (err){
  return console.error(err);
}

for(let i=0; i<data.length; i++){
  var pat = path.extname(data[i]);
  var st_path = pat.substring(1);
  if(st_path == ext)
  console.log(data[i]);
  }
}
);
