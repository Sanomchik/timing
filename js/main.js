$(document).ready(function () {
 var d = new Date();
 var day = d.getDay();

 $.getJSON('js/data.json', function (data) {
  var timing = data.timing.first_week[day].map(function (item) {
    console.log(item.name);
    console.log(item.time);
    return item.name + ': ' + item.time;
  });
});

 showData.text('Loading the JSON file.');
});