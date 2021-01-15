// Business Logic
function calculation(value1, value2, value3, value4, value5){
  return value1 + value2 + value3 + value4 + value5;
};




//User logic
$(document).ready(function(){
  $("#startButton").on("click",function(){
    $(this).hide();
    $("#startPage").hide();
    $("#questionsPage").show();
    $("#resultsButton").show();
  })
  $("#resultsButton").on("click",function(){
    const value1 = parseInt($("#question1").val());
    const value2 = parseInt($("#question2").val());
    const value3 = parseInt($("#question3").val());
    const value4 = parseInt($("#question4").val());
    const value5 = parseInt($("#question5").val());
    const calcresult = calculation(value1, value2, value3, value4, value5);
    $(this).hide();
    $("#questionsPage").hide();
    if (calcresult => 10){
      $("#javascriptPage").show();
    } else if (calcresult <= 9 && calcresult > 4){
      $("#rubyPage").show();
    } else {
      $("csharpPage").show();
    }
    $("#resultsPage").show();
    $("#finishButton").show();
  })
  });