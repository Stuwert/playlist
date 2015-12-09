$(document).ready(function(){

  var getter = $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    dataType: "JSON"
  });

  getter.done(function(response){
    randomizeArray(response["results"], 3).forEach(printToHome);
    response["results"].forEach(printToPlaylist)
    var images = $('#albums').find('img').toArray();
    $('#albums').width(images.length * 85);
  });

  getter.fail(function(){
    console.log('Stu is sad');
  });


  function printToHome(object){
    $('#populateImage').append('<img' + ' id="' + object["id"] + '" src="images/' + object["cover_art"] + '" />');
  }

  function printToPlaylist(object){
    $('#albums').append('<img' + ' id="' + object["id"] + '" src="images/' + object["cover_art"] + '" />');
  }


})
