
var calc=require('./calc');

// print process.arg
//console.log(process.argv[2]);

if(process.argv[2]=='p')

calc.p(process.argv[3]);

if(process.argv[2]=='a')
calc.a(process.argv[3]);


if(process.argv[2]=='v')
calc.v(process.argv[3]);
