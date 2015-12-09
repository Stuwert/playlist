function getRandoms(min, max, num){
  var arr = [];
  for (var i=0; i<3; i++){
    arr[i] = (Math.random() * (max - min)) + min;
  }
  return arr;
}
