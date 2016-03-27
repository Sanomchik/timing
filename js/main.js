$(document).ready(function () {
 var d = new Date();
 var day = d.getDay();

 $.getJSON('js/data.json', function (data) {
  var timing = data.timing.first_week[2].map(function (item) {
    console.log(item.name);
    console.log(item.time);
    return item.name + ': ' + item.time;
  });
});
});