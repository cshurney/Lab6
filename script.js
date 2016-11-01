function userInput(input){
  var userGuess = prompt("Enter a number between 1 to 10");
  console.log(userInput);
  if(Math.floor(Math.random() * 10) + 1 === input){
    console.log("Good work");
}   else{
      console.log("Not a match");
      prompt("Guess again")
   }
  }
   userInput();
