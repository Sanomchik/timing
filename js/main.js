$(document).ready(function () {
  var year = new Date().getFullYear(); 
  var month = new Date().getMonth(); 
  var today = new Date(year, month, 0).getTime(); 
  var now = new Date().getTime(); 
  var week = Math.round((now - today) / (1000 * 60 * 60 * 24 * 7)); 
  var currentWeek;
  if (week+1 % 2) { 
   currentWeek = 'first_week';
 } else { 
   currentWeek = 'second_week';
 }
 var day
 switch (new Date().getDay()) {
  case 0:
  day = "monday";// sunday
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

function refresh(){
$.getJSON('js/data.json', function (data) {
  if (data.timing[currentWeek][day] == undefined){
    $(".row").append("<div class=\"col-xs-12 item\"><h1>Неужели выходной ??</h1></div>");
   
  }
  else{
   var timing = data.timing[currentWeek][day].map(function (item) {
    $(".row").append("<div class=\"col-xs-12 item "+item.color+"\"><div class=\"col-xs-3 side\"><h5>"+item.time+"</h5></div><div class=\"col-xs-6\"><h5>"+item.name+"</h5><h6>"+item.teacher+"</h6></div><div class=\"col-xs-3 side\"><h5>"+item.cab+"</h5></div>");
    
  });
 }
 
});
}
$('.refresh').click(function setDat(){
  day = 'tuesday'
  $('.row').empty();
  refresh();
  
  
});
refresh();
});