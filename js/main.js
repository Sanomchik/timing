$(document).ready(function () {
 var d = new Date();
 var day = d.getDay();
var a = 'monday'
 $.getJSON('js/data.json', function (data) {
  var timing = data.timing.first_week[a].map(function (item) {
    console.log(item.name);
    console.log(item.time);
    return item.name + ': ' + item.time;
  });
});
});