$(document).ready(function(){

  var getter = $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    dataType: "JSON"
  });

  getter.done(function(response){
    randomizeArray(response["results"], 3).forEach(print, "cover_art");
  });

  getter.fail(function(){
    console.log('Stu is sad');
  });

  var images = $('#albums').find('img').toArray();
  $('#albums').width(images.length * 85);

  function print(object){
    $('#populateImage').append('<img src="images/' + object[this] + '" />');
  }


})
