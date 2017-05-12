


var socket3 = io.connect();
 $(document).ready(function () {


      $("#name_input").on('input',function(e){
              socket3.emit("set_username", {'set_username':$("#name_input").val()});
          });

     $("#create_filters_btn").on('click',function(e){
       socket3.emit("create_filters", "create_filters");
          });
  });


function createTwoImageFilters(){

  socket3.emit("create_filters", "create_filters");
}
