
var calc=require('./calc');
var http=require("http");
var server=http.createServer(function (req,res) {

  res.statusCode=200;
  res.setHeader("Content-Type","text/html")

  var arr=req.url.split('/');

for(var i=0;i<=arr.length;i++){
   if(arr[i]=='p')
   {
   let answer=calc.p(arr[i+1]);
  res.write("<h3>"+answer+"<h3>")
 }
 if(arr[i]=='a')
 {
 let answer=calc.a(arr[i+1]);
res.write("<h3>"+answer+"<h3>")
}
if(arr[i]=='v')
{
let answer=calc.v(arr[i+1]);
res.write("<h3>"+answer+"<h3>")
}

}

res.end();
});

server.listen(4000);
