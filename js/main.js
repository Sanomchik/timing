$(document).ready(function () {
 var day
 switch (new Date().getDay()) {
  case 0:
  day = "monday";
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
  if (data.timing.first_week[day] == undefined){
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