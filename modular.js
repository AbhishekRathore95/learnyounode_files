var fil_mod = require('./filter_module.js');

var dirname = process.argv[2];
var ext = process.argv[3];

fil_mod(dirname,ext,function(err,data){
  if (err){
  console.log("There was an error:",err);
  }
  data.forEach(function(file){
    console.log(file);
  })
})
