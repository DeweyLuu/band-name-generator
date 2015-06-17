'use strict';

$(function() {
  $('#adjsubmit').on('submit', function(e) {
    e.preventDefault();
    var userAdjective = $("#user-adjective").val();
    $.post("/adjective", {word: userAdjective}, function(response) {
      //get something back, do something with it
      var confirm = (response.message + "<em>" + response.confirm + "</em>");
      $("#adjective-res").html(confirm);
    })
  });

  $('#verbsubmit').on('submit', function(e) {
    e.preventDefault();
    var userVerb = $("#user-verb").val();
    $.post("/verb", {word: userVerb}, function(response) {
      //get something back, do something with it
      var confirm = (response.message + "<em>" + response.confirm + "</em>");
      $("#verb-res").html(confirm);
    })
  });

  $('#nounsubmit').on('submit', function(e) {
    e.preventDefault();
    var userNoun = $("#user-noun").val();
    $.post("/noun", {word: userNoun}, function(response) {
      //get something back, do something with it
      var confirm = (response.message + "<em>" + response.confirm + "</em>");
      $("#noun-res").html(confirm);
    })
  });

  $("button").click(function() {
    $.get('/adjective', function(response) {
      $("#adjective").text(response.word);
      //just do response.word? try it
    });

    $.get('/verb', function(response) {
      $("#verb").text(response.word);
    });

    $.get('/noun', function(response) {
      $("#noun").text(response.word);
    });

  });

});


