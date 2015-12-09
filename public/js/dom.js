$(document).ready(function(){

  var getter = $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    dataType: "JSON"
  });

  getter.done(function(response){
    randomizeArray(response["results"], 3).forEach(printToHome, "cover_art");
    response["results"].forEach(printToPlaylist, "cover_art")
    var images = $('#albums').find('img').toArray();
    $('#albums').width(images.length * 85);
  });

  getter.fail(function(){
    console.log('Stu is sad');
  });


  function printToHome(object){
    $('#populateImage').append('<img src="images/' + object[this] + '" />');
  }

  function printToPlaylist(object){
    $('#albums').append('<img src="images/' + object[this] + '" />');
  }


})
