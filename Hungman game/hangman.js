var fruit =[
    "apple",
    "orange",
    "banan"
    
    ]

    let answer ='';
    let maxWrong = 6;
    let mistakes = 0;
    let guessed =[];

    function randomWord(){
       
        answer= fruit[Math.floor(Math.random()*fruit.length)]; 
       
    } 

    function generateButtons(){
        let buttonsHTML='abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `  
        <button 
        class="btn btn-lg btn-primary m-2"
        id= '` + letter + `
        onClick ="handleGuess('`+ letter +`')"
        >
           ` + letter + `
            
        </button>
        
            `).join(' ');
            document.getElementById(`keyboard`).innerHTML= buttonsHTML;
           
    }
    document.getElementById(`maxWrong`).innerHTML= maxWrong;
    randomWord();
   generateButtons();