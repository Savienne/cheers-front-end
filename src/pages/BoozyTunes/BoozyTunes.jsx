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
        question:document.querySelector("poll question"),
        answers:document.querySelector("poll answers"),

        pollDOM.question.


    };

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