var sum = 0
for (let j = 0; j < process.argv.length; j++)
 {
   if (j >= 2)
   sum += Number(process.argv[j])
 }
 console.log(sum);
