/* global moment */

// When the page loads, grab and display all of our wuphfs
$.get("/api/all", function(data) {

    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("wuphf");
  
        row.append("<p>" + data[i].author + " wuphfed.. </p>");
        row.append("<p>" + data[i].body + "</p>");
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
  
        $("#wuphf-area").prepend(row);
  
      }
  
    }
  
  });
  
  // When user wuphfs (clicks addBtn)
  $("#wuphf-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newwuphf object
    var newwuphf = {
      author: $("#author").val().trim(),
      body: $("#wuphf-box").val().trim(),
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  
    console.log(newwuphf);
  
    // Send an AJAX Wuphf-request with jQuery
    $.Wuphf("/api/new", newwuphf)
      // On success, run the following code
      .then(function() {
  
        var row = $("<div>");
        row.addClass("wuphf");
  
        row.append("<p>" + newwuphf.author + " wuphfed: </p>");
        row.append("<p>" + newwuphf.body + "</p>");
        row.append("<p>At " + moment(newwuphf.created_at).format("h:mma on dddd") + "</p>");
  
        $("#wuphf-area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#author").val("");
    $("#wuphf-box").val("");