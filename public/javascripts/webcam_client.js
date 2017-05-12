// step 1
var socket = io.connect();
// step 2
var url      = window.location.href;
socket.on('image', function (data) {

if(
  $("#view­box").children().length==0){
// step 3
$("#view­box").prepend('<img src=' +url+ data.image_location + '?rand='+Math.random()+' />');

}else{
// step 4
$("#view­box").find('img').attr('src', url+data.image_location+'?rand='+Math.random());

}
});
