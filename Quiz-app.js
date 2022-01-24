alert('Hoş gelidiniz. \nTesti çözmek için Start butonuna tıklayınız.');

var startBtn=document.querySelector('#start-btn');
startBtn.addEventListener('click', function(){
    //Question constructor
    function Question(text, choices, answer){
        this.text=text;
        this.choices=choices;
        this.answer=answer;
    }
    
    //Question prototype
    Question.prototype.checkAnswer=function(answer){
        return this.answer===answer;
    }
    
    //Quiz constructor
    function Quiz(questions){
        this.questions=questions;
        this.score=0;
        this.questionIndex=0;
    }
    
    //Quiz prototype
    Quiz.prototype.getQuestion=function(){
        return this.questions[this.questionIndex];
    }
    
    //Quiz is finish
    Quiz.prototype.isFinish=function(){
        return this.questions.length===this.questionIndex;
    }
    
    //Quiz guess
    Quiz.prototype.guess=function(answer){
        var question=this.getQuestion();
        if(question.checkAnswer(answer)){
            this.score++;
            alert('Tebrikler!');
        }else{
            alert(`Yanlış cevap verdiniz.`);           
        }
        this.questionIndex++;
    }
    var q1= new Question("JavaScript hangi kod blokları arasına yazılır?", ["< javascript>", "< scripting>", "< js> ", "< script>"], "< script>");
    
    var q2= new Question("Hello World mesajı mesajbox’da nasıl görüntülenir?", ["msg(“Hello World”);", "msgBox(“Hello World”);", "alert(“Hello World”);", "alertBox(“Hello World”);"], "alert(“Hello World”);");
    
    var q3= new Question("Hangi if satırı 5’e eşit değilse’nin kontrolünü yapar?", ["if (i <> 5)", "if (i != 5)", "if i =! 5 then", "if i <> 5"], "if (i != 5)");
    
    var q4= new Question("Hangi For deyimi doğrudur? ", ["for i = 1 to 5", "for (i <= 5; i++) ", "for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)"], "for (i = 0; i <= 5; i++)");
    
    var q5= new Question("Hangisi 7.25 sayısını en yakın tamsayıya yuvarlar? ", ["round(7.25) ", " Math.rnd(7.25)", "Math.round(7.25)", "rnd(7.25)"], "Math.round(7.25)");
    
    
    var q6= new Question("Hangisi ile X ve Y’nin en yüksek değeri bulunur? ", [" ceil(x, y)", "Math.max(x, y)", "Math.ceil(x, y)", "top(x, y)"], "Math.max(x, y)");
    
    var q7= new Question("Aşağıdakilerden hangisi uygun değişken ismidir?", [" case", "try", "tree", "const"], "tree");
    var q8= new Question("8) 3 + 2 + “7” nin sonucu ne olur?", ["undefined", "null", "57", "12"], "57");
    
    var q9= new Question("Aşağıdakierden hangisi ile bir html elemanına tıklama olayı gerçekleşir? ", ["onclick", "onmouseclick", "onchange", "mouseenter"], "onclick");
    
    var q10= new Question("Javascript yazılımı hangi dilden etkilenmiştir?  ", [".Net", "Jscript", "Perl", "Objective-j"], "Perl");
    
    
    var questions= [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    
    
    
    //Start Quiz
    var quiz= new Quiz(questions);
    loadQuestion();
    function loadQuestion(){
        if(quiz.isFinish()){
            showScore();
            alert(`Test bitmiştir.`);
        }
        else{
            var question=quiz.getQuestion();
            var choices= question.choices;
            document.querySelector('#question').textContent=question.text;
    
            for(var i=0; i<choices.length; i++){
                var element=document.querySelector('#choice'+i);
                element.innerHTML=choices[i];
                guess('btn'+i, choices[i]); 
            }
            showProgress();
        }
    }
    function guess(id, guess){
        var btn=document.getElementById(id);
        btn.onclick=function(){
            quiz.guess(guess);
            loadQuestion();
            
        }
    
    }

    //Score
    function showScore(){
        var html=`<h2 style="color:Blue; text-align: center; font-size: 35px;">Score</h2><h4 style="color:Blue; text-align: center; font-size: 35px;">${quiz.score}</h4>`;
        document.querySelector('#card-body').innerHTML=html;
    
    
    }
    

    function showProgress(){
        var totalQuestion=quiz.questions.length;
        var questionNumber=quiz.questionIndex+1;
        document.querySelector('#question-index').innerHTML='Question '+questionNumber+ ' of '+totalQuestion;
        document.querySelector('#question-number').innerHTML=questionNumber;
    }
}
);
