function getRandoms(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

function randomizeArray(arr, random){
  var newArr = [];
  for (var i=0; i<random; i++){
    var randomNumber = getRandoms(0, arr.length - 1);
    newArr[i] = arr[randomNumber];
    arr = arr.filter(function(item, i){
      return i !== randomNumber ? true : false;
    });
  }
  return newArr;
}
