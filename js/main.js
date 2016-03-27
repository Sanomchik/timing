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

      var timing = data.timing.first_week.monday.first.map(function (item) {
        return item.name + ': ' + item.time;
      });

      showData.empty();

      if (timing.length) {
        var content = '<li>' + timing.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        showData.append(list);
      }
    });

    showData.text('Loading the JSON file.');
    return a = data
  });
  return a = data
});