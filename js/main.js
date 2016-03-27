var a 
$(document).ready(function () {
  $('#get-data').click(function () {
    var showData = $('#show-data');

    $.getJSON('js/data.json', function (data) {
      console.log(data.timing.first_week.monday.first);
      console.log(data.timing.first_week.monday);
      console.log(data.timing.first_week);
      console.log(data.timing);
      return a = data

      var timing = data.timing.first_week.map(function (item) {
        return item.monday.first.name + ': ' + item.monday.first.time;
        console.log(item.monday.first.name);
        console.log(item.monday.first.time);
      });

      showData.empty();

      if (timing.length) {
        var content = '<li>' + timing.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        showData.append(list);
      }
    });

    showData.text('Loading the JSON file.');
  });
});