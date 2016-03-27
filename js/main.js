var a 
$(document).ready(function () {
  $('#get-data').click(function () {
    var showData = $('#show-data');

    $.getJSON('js/data.json', function (data) {
      console.log(data.timing.first_week.monday);
      console.log(data.timing.first_week);
      console.log(data.timing);

      var timing = data.timing.first_week.monday.map(function (item) {
        console.log(item.name);
        console.log(item.time);
        return item.name + ': ' + item.time;
      });
      return a = data

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