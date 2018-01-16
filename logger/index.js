//var moment=require('./moment');

//var now=moment(new Data());
module.exports.log=function (msg) {

  var date=new Date();

  console.log(date+">>>"+msg);

  //console.log(now.format("D MM YYYY"+">>>"+msg))

}
