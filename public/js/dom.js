$(document).ready(function(){

  var getter = $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    dataType: "JSON"
  });

  getter.done(function(response){
    console.log(response["results"]);
    randomizeArray(response["results"], 3).forEach(printToHome);
    response["results"].forEach(printToPlaylist)
    var images = $('#albums').find('img').toArray();
    $('#albums').width(images.length * 85);
    $('.left').on("click", "img", function(){
      var thisId = $(this).attr('id')
      thisId = parseFloat(thisId);
      response["results"].forEach(function(item){
        if(item["id"] === thisId){
          $('textarea').append("\n " + item["artist"] + ": " + item["title"]);
        }
      })
    });
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


  $('#clear').click(function(){
    $('textarea').html(null);
  })

  $('#submit').click(function(){
    var artistLists = $('textarea').val();
    var myObject = toObj(parseArray(artistLists.split("\n")));
    console.log(myObject);
    var post = $.ajax({
      url: "https://lit-fortress-6467.herokuapp.com/post",
      method: "POST",
      data: myObject
    });

    post.done(function(response){
      console.log(response);
    })

    post.fail(function(){
      console.log("Stoobs is sad");
    })
  })

})
