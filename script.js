alert("Welcome to Rock Paper Scissors! game.")

function askHowManyRound(){

    let _roundnum = parseInt(prompt("How many rounds you want to play?"))

    return _roundnum;
}

function getCpuChoice(){

    let cpuChoice = Math.floor(Math.random() * 3)

    if(cpuChoice === 0){
        return "Rock"
    }
    else if(cpuChoice === 1){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}

function getHumanChoice(){
   let humanChoice =  parseInt(prompt("Choose your choice: \n[1] - Rock\n[2] - Paper\n[3] - Scissors"))

   if(humanChoice === 1){
        return "Rock"
   }
   else if(humanChoice === 2){
        return "Paper"
   }
   else{
        return "Scissors"
   }
}

function Playround(){

    let Loose = false
    let FinalResult = ""
    let humscore = 0
    let cpuscore = 0

    for(let i = 1; i<= 3; i++){
        let cpuChoice = getCpuChoice()
        let HumanChoice = getHumanChoice()


        if(cpuChoice === "Rock" && HumanChoice ==="Paper"){
            alert("Computer choose: " + cpuChoice)
            alert("You choose: " + HumanChoice)

            alert("You win")
            humscore += 1;
          
        }
        else if(cpuChoice === "Paper" && HumanChoice === "Rock"){
            alert("Computer choose: " + cpuChoice)
            alert("You choose: " + HumanChoice)

            alert("You loose")
            cpuscore += 1
            
        }
        else if(cpuChoice === "Scissors" && HumanChoice === "Rock"){
            alert("Computer choose: " + cpuChoice)
            alert("You choose: " + HumanChoice)

            alert("You win")
             humscore += 1;
            
        }
        else if(cpuChoice === "Rock" && HumanChoice === "Scissors"){
            alert("Computer choose: " + cpuChoice)
            alert("You choose: " + HumanChoice)

            alert("You loose")
             cpuscore += 1
           
        }
        else if(cpuChoice === "Paper" && HumanChoice === "Scissors"){
            alert("Computer choose: " + cpuChoice)
            alert("You choose: " + HumanChoice)

            alert("You win")
             humscore += 1;
            
        }
        else if(cpuChoice === HumanChoice){
            alert("Computer choose: " + cpuChoice)
            alert("You choose: " + HumanChoice)

            alert("It's Draw!")
        }
        else{
            alert("Computer choose: " + cpuChoice)
            alert("You choose: " + HumanChoice)

            alert("You loose")
             cpuscore += 1
            
        }
            
    }

    if(cpuscore > humscore){
        Loose = true
        FinalResult = "Computer wins 'x'"
    }
    else if(humscore > cpuscore){
        Loose
        FinalResult = "You win!"
    }
    else{
        FinalResult = "Draw!"
    }

    alert("Final result: " + FinalResult)

    return {human: humscore, cpu: cpuscore}
    
}



function playGame(){

    let roundnum = askHowManyRound()
    let roundplayed = 0;
    let OverAllScorePlayer = 0
    let OverAllScoreCpu = 0
    let finalres = ""

    for(let i = 1; i<= roundnum; i++){
        alert("Round: " + i + " begins");
       let result =  Playround()
        roundplayed += 1
        OverAllScoreCpu += result.cpu
        OverAllScorePlayer += result.human
    }

    if(OverAllScoreCpu > OverAllScorePlayer){
        finalres = "Loose"
    }
    else if(OverAllScorePlayer > OverAllScoreCpu){
        finalres = "Win"
    }
    else{
        finalres = "Draw"
    }

    let displayGameScore = prompt("Do you want to see game score? (y/n)")

    if(displayGameScore === "y"){
        alert("Round played: " + roundplayed)
        alert("Your score: " + OverAllScorePlayer)
        alert("Computer score: " + OverAllScoreCpu)
        alert("Overall result: " + finalres)
    }

}

function main(){
    playGame()
};

main();