var msgs=require('./msgs');
var person=require('./person');
var logger=require('./logger');
//console.log(msgs.first);
//console.log(msgs.message());

console.log(logger.log("varsha"));

var p=new person();
console.log(p.firstname+" "+p.lastname);
