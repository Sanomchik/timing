$(document).ready(function () {
  var year = new Date().getFullYear(); 
  var month = new Date().getMonth(); 
  var today = new Date(year, month, 0).getTime(); 
  var now = new Date().getTime(); 
  var week = Math.round((now - today) / (1000 * 60 * 60 * 24 * 7)); 
  if (week+1 % 2) { 
   alert("Текущая неделя - чётная"); 
 } else { 
   alert("Текущая неделя - нечётная"); 
 }
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
} $.getJSON('js/data.json', function (data) {
  if (data.timing[first_week].monday == undefined){
    console.log('VUHODNOY');
  }
  else{
   var timing = data.timing.first_week[day].map(function (item) {
    console.log(item.name);
    console.log(item.time);
    return item.name + ': ' + item.time;
  });
 }
 
});
});