$(document).ready(function(){
$("form#enterNum").submit (function(event){
	event.preventDefault();
  var userInput=parseInt($("input#number").val());

  for(var i=1; i<= userInput; i++)
    if(i){
      var output ="";
      if (i%3!=0 && i%5!=0) output=(i)
      if(i%3==0)output ="Ping";
      if(i%5==0)output +="Pong";
      $(".series").append(output+"</br>");
    }
  }) ;
  })
