var fruit =[
    "apple",
    "orange",
    "banana",
    "plum"
    
    ]

    let answer ='';
    let maxWrong = 6;
    let mistakes = 0;
    let guessed =[];
    let wordStatus= null;

    function randomWord(){
       
        answer= fruit[Math.floor(Math.random()*fruit.length)]; 
       
    } 

    function generateButtons(){
        let buttonsHTML='abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `  
        <button 
        class="btn btn-lg btn-primary m-2"
        id= '` + letter + `'
        onClick ="handleGuess('`+ letter +`')"
        >
           ` + letter + `
            
        </button>
        
            `).join(' ');
            document.getElementById(`keyboard`).innerHTML= buttonsHTML;
           
    }
function handleGuess(chosenLetter)
{
    guessed.indexOf(chosenLetter)=== -1? guessed.push(chosenLetter): null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);

   
    if(answer.indexOf(chosenLetter)>= 0)
    {
    guessedWord();
    checkIfGameWone();
    }else if(answer.indexOf(chosenLetter)=== -1)
    {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPic();
    }

}

function updateHangmanPic()
{
    document.getElementById('hengmanPicture').src= 'images/'+ mistakes+ '.png';

}

function checkIfGameWone()
{
    if(wordStatus===answer){
        document.getElementById('keyboard').innerHTML='You Won!';
    }
}

function checkIfGameLost()
{ 
    if(mistakes===maxWrong){
        document.getElementById('hengmanPicture').src= 'images/7.png';
        document.getElementById('keyboard').innerHTML='You Lost!';
        document.getElementById('wordSpotlight').innerHTML= 'The answer was: '+ answer;
       
    }
}

function updateMistakes()
{
    document.getElementById('mistakes').innerHTML= mistakes;
}

function reset()
{
    mistakes=0;
    guessed= [];
    document.getElementById('hengmanPicture').src= 'images/0.png';
randomWord();
guessedWord();
updateMistakes();
generateButtons();

}

    function guessedWord()
    { 
wordStatus= answer.split('').map(letter=>(guessed.indexOf(letter)>=0 ? letter :" _ " )).join('');
document.getElementById('wordSpotlight').innerHTML=wordStatus;
    }




    document.getElementById(`maxWrong`).innerHTML= maxWrong;
    randomWord();
   generateButtons();
   guessedWord();