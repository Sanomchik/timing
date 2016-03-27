$(document).ready(function () {
  function timeToDays(time) {
    return time/1000/60/60/24;
  } 

  function getWeekNumber(date) {
    var weekNumber;
    var yearStart;
    var ts;

    if (_.isDate(date)) {
      ts = new Date(date);
    } else {
      ts = date ? new Date(date) : new Date();
    }

    ts.setHours(0, 0, 0);
    ts.setDate(ts.getDate() + 4 - (ts.getDay()||7));

    yearStart = new Date(ts.getFullYear(), 0, 1);

    weekNumber = Math.floor((timeToDays(ts - yearStart) + 1) / 7);

    return weekNumber;
    console.log(weekNumber);
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