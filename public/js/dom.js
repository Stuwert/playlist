$(document).ready(function(){

  var getter = $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    dataType: "JSON"
  });

  getter.done(function(response){
    console.log(response);
  });

  getter.done(function(){
    console.log('Stu is sad');
  });

  var images = $('#albums').find('img').toArray();
  $('#albums').width(images.length * 85);
})
