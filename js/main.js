$(document).ready(function () {
  $('.nav a').on('click', function(){
    $('.btn-navbar').click(); 
    $('.navbar-toggle').click() 
  });
  var year = new Date().getFullYear(); 
  var month = new Date().getMonth(); 
  var today = new Date(year, month, 0).getTime(); 
  var now = new Date().getTime(); 
  var week = Math.round((now - today) / (1000 * 60 * 60 * 24 * 7)); 
  var currentWeek= 'first_week';
  /*if (week % 2) { 
   currentWeek = 'first_week';
 } else { 
   currentWeek = 'second_week';
 }*/
 var day
 switch (new Date().getDay()) {
  case 0:
  day = "sunday";
  break;
  case 1:
  day = "monday";
  break;
  case 2:
  day = "tuesday";
  break;
  case 3:
  day = "wednesday";
  break;
  case 4:
  day = "thursday";
  break;
  case 5:
  day = "friday";
  break;
  case 6:
  day = "saturday";
  break;
} 


$.getJSON('js/data.json', function (data) {

  function refresh(){
    if (data.timing[currentWeek][day] == undefined){
      $(".timing").append("<div class=\"col-xs-12 item\"><h1>Неужели выходной ??</h1></div>");

    }
    else{
     var timing = data.timing[currentWeek][day].map(function (item) {
      $(".timing").append("<div style=\"background-color:"+item.color+"\" class=\"col-xs-12 item \"><div class=\"col-xs-3 side\"><h5>"+item.time+"</h5></div><div class=\"col-xs-6\"><h5>"+item.name+"</h5><h6>"+item.teacher+"</h6></div><div class=\"col-xs-3 side\"><h5>"+item.cab+"</h5></div>");
    });
   }
 }
 refresh ();
 $('.nav li a').click(function setDat(){
  var a = this;
  $('.active').removeClass('active');
  day = this.text.toLowerCase();
  $(this).parent().addClass('active');
  $('.timing').empty();
  if ($(a).hasClass("first")){
    currentWeek = 'first_week';
    refresh();
  }
  else if($(a).hasClass("timelist")){
    data.timing.time_list.map(function (item) {
      $(".timing").append("<div class=\"col-xs-12 item \"><div class=\"col-xs-6 side\"><h5>"+item.name+"</h5></div><div class=\"col-xs-6\"><h5>"+item.time+"</h5></div></div>");
    });
  }
  else if ($(a).hasClass("second")){
    currentWeek = 'second_week';
    refresh();
  }
  return false
});
});
});