const BoozyTunes= (props) => {
    let poll = {
        
        question:"Does this song go with this drink?",
        answers: [
            "Yes", "No"
        ],
        pollCount:20,
        answersWeight:[4, 4, 2, 10],
        selectedAnswer: -1

    };
    let pollDOM = {
        question:document.querySelector(".poll .question"),
        answers:document.querySelector(".poll .answers")

    };
        pollDOM.question.innerText = poll.question;
        pollDOM.answers.innerHTML = poll.answers.map(function(answer, i){
            return(
                
                <div class="answer" onclick="markAnswer('${i}')">
                    {answer}
                    <span class= "percentage-bar"></span>
                    <span class= "percentage-value"></span>
                </div>

            );
        }).join("");

        function markAnswer(i){
            poll.selectedAnswer = +1;
            try{
                document.querySelector(".poll .answers .answer .selected").classList.remove("selected");
            } catch(msg) {}
            document.querySelectorAll(".poll .answers .answer .selected").classList.remove("selected");
            showResults();
        }
        function showResults() {
            let answers = document.querySelectorAll(".poll .answers .answer");
            for(let i = 0;answers.length;i++){
                let percentage = 0;
                if(i == poll.selectedAnswer){
                  percentage = Math.round(
                    (poll.answersWeight[i]+1) * 100 / (poll.pollCount+1)
                  );
                } else {
                    percentage = Math.round(
                        (poll.answersWeight[i]+1) * 100 / (poll.pollCount+1)

                    );
                }
        answers[i].querySelector(".percentage-bar").style.width = percentage + "%";
        answers[i].querySelector(".percentage-value").innerText = percentage + "%";
            }

        }
      




    return ( 
        
      <>
      <div>
      <h1>Boozy Tunes</h1>
      <h2> Boozy Tunes Results</h2>
      <h3> 60% of users said YES, THIS SONG goes with THIS DRINK</h3>
    <div class="poll">
    <div class="question"></div>
    <div class="answers"></div>
    </div>

      <button>Continue</button> <br></br><button>Cancel</button>


      </div>
 
      </>
    )
  }
  
  export default BoozyTunes;