// Business Logic
function calculateResult (value1, value2, value3, value4, value5){
  return value1 + value2 + value3 + value4 + value5;
};
//User logic
$(document).ready(function(){
  $("#startButton").on("click",function(){
    $(this).hide();
    $("#startPage").hide();
    $("#questionsPage").fadeIn();
    $("#resultsButton").fadeIn();
  })
  $("#resultsButton").on("click",function(){
    const value1 = parseInt($("#question1").val());
    const value2 = parseInt($("#question2").val());
    const value3 = parseInt($("#question3").val());
    const value4 = parseInt($("#question4").val());
    const value5 = parseInt($("#question5").val());
    const calcresult =  parseInt(calculateResult(value1, value2, value3, value4, value5));
    $(this).hide();
    $("#questionsPage").hide();
    if (calcresult > 6) {
      $("#javascriptPage").fadeIn();
    } else if (calcresult < 7 && calcresult > 3){
      $("#rubyPage").fadeIn();
    } else {
      $("#csharpPage").fadeIn();
    }
    $("#finishButton").fadeIn();
  })
  $("#finishButton").on("click",function(){
    location.reload();
  });
});