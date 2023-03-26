var pointsA = 0;
var pointsB = 0;
let pointsArray = [0,0]

function counter(that,number){
  let parent = that.parentNode.parentNode;
  pointsArray[number]++;
  console.log("A:" + pointsA);
  parent.classList.add("hidden")
  // document.getElementById(number).style.display = "none";
}
  /*
  document.querySelector("")
  document.querySelector("#Q1").style.display = "none";
  */
  /*
  var selector = "Q" + number + " div div:";
  if(choice=="a"){
    selector += "first-child";
  }
  else{
    selector += "last-child";
  }

  document.querySelector(selector).style.borderWidth = "thick";
}
*/

function counterB(number){
  pointsB++
  console.log("B" + pointsB);
  document.getElementById(number).style.display = "none";
}
/*
function answerClicked(number,choice)
  {
    var selector = "#Q" +number + " div div:"
    if (choice =="a")
        selector = selector+ "first-child";
    else
        selector = selector + "last-child";
    //alert(selector);
      document.querySelector(selector).style.border = "black";
    
    
    //document.getElementById("Q"+number).style.display="none";
  }

*/

function giveSummary(){
  if(pointsA >= 3){
    document.getElementById("summaryText").innerHTML = "Your summary: You are very driven and like to follow a plan — which you always have in place. You prioritize stability and financial security over anything else, even if it means you have to to give up some of your wants or comforts. You take work very seriously, and you always accomplish what you start. You know your own capabilities well, and you’re self-sufficient; you don’t rely on others for anything. It’s awesome that you’re so motivated and hardworking — but make sure you take a break!";
  }
  else{
    document.getElementById("summaryText").innerHTML = "Your summary: You are a free-spirited person, and you go with the flow. You don’t like taking stress about anything and you avoid tense situations. You would rather live life by your own rulebook, rather than following strict guidelines and doing intense work. You prioritize relaxing, having fun, and living in the moment. You are happy in social scenes, and also like spending time alone. Money and other external sources of temporary happiness don’t tempt you — you prefer true, internal happiness.";
  }
}
/*
function postChoice(){
  document.querySelector(".question_container").style.display = "none";
  console.log("cancelled out")
}
*/

function reset(){
  location.reload();
}