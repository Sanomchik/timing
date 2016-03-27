$(document).ready(function () {
  $('#get-data').click(function () {
    var showData = $('#show-data');

    $.getJSON('example.json', function (data) {
      console.log(data);

      var timing = data.timing.map(function (item) {
        return item.first_week.monday.first.name + ': ' + item.first_week.monday.first.time;
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