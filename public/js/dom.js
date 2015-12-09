$(document).ready(function(){
  var images = $('#albums').find('img').toArray();
  $('#albums').width(images.length * 85);
})
