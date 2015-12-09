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

function parseArray(arr){
  var newArr = arr.map(function(item){
    return item.split(":");
  })
  return newArr;
}

function toObj(arr){
  var newObj = {};
  arr.forEach(function(item){
    if (item.length > 1){
      newObj[item[0].trim()] = item[1].trim();
    }
  })
  return newObj;
}

function objectToString(theObject){
  var newString = "";
  for (keys in theObject){
    newString += keys;
    newString += "=";
    newString += theObject[keys];
    newString += "&"
  }
  return newString.substr(0, newString.length-1);
}
