
window.addEventListener("load",()=>{
    var firstname=sessionStorage.getItem('fname')
    var firstname=firstname[0].toUpperCase() +firstname.substring(1);
    document.getElementById('headerName').innerHTML="Welcome " +firstname;
            });
dataBase1=[
    {
        ques:"1. Who is the first Indian woman to win an Asian Games gold in 400m run?",
        a: "M.L. Valsamma",
        b: "P.T. Usha ",
        c: "Kamaljit Sandhu",
        d: "K.Malleshwari",
        ans: "ans2"
    },
    {
        ques:"2. The first Indian to cross seven important seas by swimming ____ ?",
        a: "Amrendra Singh",
        b: "Bula Chaudhury",
        c: "Junko Taibei",
        d: "Yuri Gagarin",
        ans: "ans2"
    },
    {
        ques:"3. The National Game of Japan is",
        a: "Tennis",
        b: "Karate",
        c: "Ice Hockey",
        d: "Sumo wrestling",
        ans: "ans4"
    },
    {
        ques:"4. Which one of the following Cricketers has been declared by the ICC as 'Cricketer of the Twentieth Century'?",
        a: "Sachin Tendulkar",
        b: "Kapil Dev",
        c: "Rahul Dravid",
        d: "Anil Kumble",
        ans: "ans2"
    },
    {
        ques:"5. Which batsman started his international cricketing career at the age of 16?",
        a: "Suresh Raina",
        b: "Sachin Tendulkar",
        c: "Piyush Chawla",
        d: "Rahul Dravid",
        ans: "ans2"
    }

];

var questionNumber=0;
var anskey = new Array;
var currentQuestionlist=new Array;
currentQuestionlist=dataBase1;
var quizOne=document.getElementById("quizBtnFirst");
var quizSecond=document.getElementById("quizBtnSecond");
var quizThird=document.getElementById("quizBtnThird");


// logic for geting answer

var checkAns=()=>{
    const answers = document.querySelectorAll(".answer");
    answers.forEach(curAns => {
        if(curAns.checked){
            anskey[questionNumber]=curAns.id;
        }
    }); 
}
// logic for showing next question
var loadQuestion=()=>{
    if(questionNumber>=0 && questionNumber<dataBase1.length)
    {
    const questions =document.querySelector("#question");
    const options1=document.querySelector("#option1");
    const options2=document.querySelector("#option2");
    const options3=document.querySelector("#option3");
    const options4=document.querySelector("#option4");


    var questionList = currentQuestionlist[questionNumber];
    questions.innerHTML = questionList.ques;
   options1.innerHTML = questionList.a;
   options2.innerHTML = questionList.b;
   options3.innerHTML = questionList.c;
   options4.innerHTML = questionList.d;
   }
   
}
//statement for loading first question
  window.onload=loadQuestion;

//logic for displaying answer
var displayAns=()=>{
    var ansid= anskey[questionNumber];
   document.getElementById(ansid).checked=true;
}
//logic for deselecting already checked answer
var deselect=()=>{
    const answers = document.querySelectorAll(".answer");
    answers.forEach(curAns => {
        if(curAns.checked){
            document.getElementById(curAns.id).checked=false; 
        }
    }); 
}
//logic for calculating answer
var score=()=>{
    var marks=0;
    for(i=0; i<dataBase1.length;i++){
        if(anskey[i]==dataBase1[i].ans){
            marks++;
        }
    }
    document.getElementById("questionBody").classList.add("questionShow");
    document.getElementById("score").innerHTML="Your Score: "+marks+"/5";
    if(marks==0){
        document.getElementById("message").innerHTML="Better Luck Next Time!!";
    }
    else if(marks==1){
        document.getElementById("message").innerHTML="Keep Trying!!";
    }
    else if(marks==2){
        document.getElementById("message").innerHTML="You Can Do It Better!!";
    }
    else if(marks==3){
        document.getElementById("message").innerHTML="Average!!";
    }
    else if(marks==4){
        document.getElementById("message").innerHTML="Well Done!!";
    }
    else if(marks==5){
        document.getElementById("message").innerHTML="Amazing!!";
    }
    document.getElementById("showScore").classList.remove("scoreDiv");
    
    questionNumber=0;
}

//logic for retry quiz
var retry=()=>{
    anskey=[null];
    document.getElementById("questionBody").classList.remove("questionShow");
    document.getElementById("showScore").classList.add("scoreDiv");
    loadQuestion();
     document.getElementById("next").innerHTML="next question";
    deselect();

}

//logic for display answer
var display=()=>{
    document.getElementById("questionBody").classList.add("questionShow");
    document.getElementById("showScore").classList.add("scoreDiv");
    document.getElementById("answerBody").classList.remove("answersBodyclass");
    for(var i=1; i<=5;i++){
        var Ans=".answer"+i;
        var markedAns=document.querySelectorAll(Ans);

        markedAns.forEach(current=>{
            if(current.id==anskey[(i-1)]+i){
                 document.getElementById(current.id).style.color="red";
            }
            if(current.id==dataBase1[i-1].ans+i){
                document.getElementById(current.id).style.color="green";
                document.getElementById(current.id).style.fontWeight="bold";
            }
        });
    }
}

//logic for back button from display answers
var back=()=>{
    document.getElementById("showScore").classList.remove("scoreDiv");
    document.getElementById("answerBody").classList.add("answersBodyclass");
    for(var i=1; i<=5;i++){
        var Ans=".answer"+i;
        var markedAns=document.querySelectorAll(Ans);

        markedAns.forEach(current=>{
            if(current.id==anskey[(i-1)]+i){
                 document.getElementById(current.id).style.color="black";
            }
        });
    }
}

//logic for pop up for answering final submit
function myfun(){
   
    if(confirm("Are you sure that you want to submit your answers!!")){
        score();
    }
    else{
        questionNumber=4;
    }
}

//logic for next question button to display next question

var nextQuestion=()=>{
    if(questionNumber<0){
        questionNumber=0;
    }
    if(questionNumber>=0 && questionNumber<=dataBase1.length-1)
    {checkAns();}
    questionNumber++;
     if(questionNumber>=0 && questionNumber<=dataBase1.length-1)
    {
        loadQuestion();
    if(anskey[questionNumber]==null)
    {deselect();}
    else{
        displayAns();
    }
}

    if(questionNumber>=dataBase1.length-1) {
        document.getElementById("next").innerHTML="Submit";
        if(questionNumber==dataBase1.length){
           
            myfun();
        }
    }
    else{
     document.getElementById("next").innerHTML="Next question";
    } 
}

//logic for previous question button to dispaly previous question
var previousQuestion= ()=>{
    
    if(questionNumber>dataBase1.length-1){ questionNumber=dataBase1.length-1;}
    if(questionNumber<0){
        questionNumber=0;
    }
    if(questionNumber>=0 && questionNumber<=dataBase1.length-1)
    {checkAns();}
    questionNumber--;

    if(questionNumber>=0 && questionNumber<=dataBase1.length-1)
    {
        loadQuestion();
        if(anskey[questionNumber]==null)
    {deselect();}
    else{
        displayAns();
    }
    }
    
if(questionNumber>=dataBase1.length-1) {
    document.getElementById("next").innerHTML="submit";
    if(questionNumber==dataBase1.length){
       score();
    }
}
else{
 document.getElementById("next").innerHTML="Next Question";
} 
}
