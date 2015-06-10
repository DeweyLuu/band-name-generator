$(function(){
	$('button').on('click', function() {
		$.get("/adjective", function(data){
			$('#adjective').text(data.word);
		});
	})
});

$(function(){
	$('button').on('click', function() {
		$.get("/verb", function(data){
			$('#verb').text(data.word);
		});
	})
});

$(function(){
	$('button').on('click', function() {
		$.get("/noun", function(data){
			$('#noun').text(data.word);
		});
	})
});
