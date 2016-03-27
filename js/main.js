$(document).ready(function () {
  $('#get-data').click(function () {
    var showData = $('#show-data');

    $.getJSON('js/data.json', function (data) {
      console.log(data);

     

      
    });

    showData.text('Loading the JSON file.');
  });
});