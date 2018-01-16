
var PI=3.1416;
module.exports.p =function (r) {
  perimeter=2*PI*r;
console.log(perimeter.toFixed(2));
return perimeter;
}

module.exports.a =function (r) {
    area=PI*r*r;
  console.log(area.toFixed(2));
  return area;
}
module.exports.v =function (r) {
  volume=(4*PI*r*r*r)/3;
  console.log(volume.toFixed(2));
return volume;
}
