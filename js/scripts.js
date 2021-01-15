




//User logic
$(document).ready(function(){

  $("#startButton").on("click",function(){
    $(this).hide();
    $("#startPage").hide();
    $("#questionsPage").show();
    $("#resultsButton").show();
  })
  $("#resultsButton").on("click",function(){
    $(this).hide();
    $("#questionsPage").hide();
    $("#resultsPage").show();
    $("#finishButton").show();
  })
  });