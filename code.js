let oldUserQuestions = [];

function magicEightBall() {
    // old code with username
    // let userName = document.getElementById("name").value;           
    let userQuestion = document.getElementById("question").value;
    
    if (oldUserQuestions.includes(userQuestion)) {
        alert("You already asked that!");
    } else if (userQuestion) { 
        let randomNumber = Math.floor(Math.random() * 8);
        let eightBallAns = '';
        switch (randomNumber) {
          case 0:
            eightBallAns = 'it is certain';
            break;
          case 1:
            eightBallAns = 'it is decidedly so';
            break;
          case 2:
            eightBallAns = 'try again';
            break;
          case 3:
            eightBallAns = 'cannot predict now';
            break;
          case 4:
            eightBallAns = 'do not count on it';
            break;
          case 5:
            eightBallAns = 'my sources say no';
            break;
          case 6:
            eightBallAns = 'outlook not so good';
            break;
          case 7:
            eightBallAns = 'signs point to yes';
            break;
        }
        
        var eightBallDiv = document.getElementById("eightBall");


        //change 8-ball to answer-side
        eightBallDiv.setAttribute("class", "answer");

        // replace answertext in 8-ball
        var answernode = document.createTextNode(eightBallAns);
        var answerP = document.getElementById("eightBallAnswer");
        answerP.replaceChild(answernode, answerP.childNodes[0]);

        // old code with alert and username
        // userName ? alert(`Hello, ${userName}!\nYou asked: ${userQuestion}\nI say ${eightBallAns}`) : alert(`Hello, stranger! \nYou asked: ${userQuestion}\nI say ${eightBallAns}`);
        
        // remember userQuestion for cheaters
        oldUserQuestions.push(userQuestion);


    } else {
        alert("You have to ask a question first");
    }
}