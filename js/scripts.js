$(document).ready(function(){
$("form#enterNum").submit (function(event){
	event.preventDefault();
  var userInput=parseInt($("input#number").val());

  console.log(userInput)

  $(".series").text(userInput);

  }) ;

  })
