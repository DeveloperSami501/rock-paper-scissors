// Defining the button and input area of how many rounds the player want to play 
let enterRoundnum_btn = document.getElementById('enterRoundNumber')
let submitRoundnum_btn = document.getElementById('submitroundnum')

let CpuScore = 0
let PlayerScore = 0
let roundnum = 0
let currentRound = 1
let roundplayed = 0

function getroundnum(){
    submitRoundnum_btn.addEventListener('click', function(){

        if(enterRoundnum_btn.value > 10){
            return alert("Only 10 rounds allowed")
        }
        else{
           return roundnum = enterRoundnum_btn.value
        }
    })
}

let showPlayerScore = document.getElementById('player-s-value')
let showCpuScore = document.getElementById('cpu-s-value')
let ShowCurrentRound = document.getElementById('currentround')

showPlayerScore.textContent = PlayerScore
showCpuScore.textContent = CpuScore
ShowCurrentRound.textContent = currentRound


let rockBTN = document.getElementById('R')
let paperBTN = document.getElementById('P')
let scissorsBTN = document.getElementById('S')

getroundnum()

function getCpuChoice(){
    let cpuchoice = ["rock","paper","scissors"]
    let rand = Math.floor(Math.random() * 3)

    return cpuchoice[rand]
}


function showCurrentRound(){

    if(PlayerScore > 3 || CpuScore > 3){
        PlayerScore = 0
        CpuScore = 0

        currentRound++
    }
}

function endGame(){
    if(currentRound > parseInt(roundnum)){
        alert("Game ended!")
        currentRound = 0
    }
}

function play(){
    rockBTN.addEventListener('click', function(){

    let cpuChoice = getCpuChoice()

    if(cpuChoice === "scissors"){
        PlayerScore +=1
        alert("You win: computer loose")
    }
    else if(cpuChoice === "paper"){
        CpuScore +=1
        alert("You loose: computer wins")
    }
    else{
        alert("It's draw")
    }
    showPlayerScore.textContent = PlayerScore
    showCpuScore.textContent = CpuScore

    showCurrentRound()
    endGame()
    ShowCurrentRound.textContent = currentRound

    
})

paperBTN.addEventListener('click', function(){

    let cpuChoice = getCpuChoice()

    if(cpuChoice === "scissors"){
        CpuScore +=1
        alert("You loose: computer wins")
    }
    else if(cpuChoice === "rock"){
        PlayerScore +=1
        alert("You win: computer loose")
    }
    else{
        alert("It's draw")
    }
    showPlayerScore.textContent = PlayerScore
    showCpuScore.textContent = CpuScore
    
    showCurrentRound()
    endGame()
     ShowCurrentRound.textContent = currentRound
    
})

scissorsBTN.addEventListener('click', function(){

    let cpuChoice = getCpuChoice()

    if(cpuChoice === "paper"){
        PlayerScore +=1
        alert("You win: computer loose")
    }
    else if(cpuChoice === "rock"){
        CpuScore +=1
        alert("You loos: computer wins")
    }
    else{
        alert("It's draw")
    }
    showPlayerScore.textContent = PlayerScore
    showCpuScore.textContent = CpuScore

    showCurrentRound()
    endGame()
     ShowCurrentRound.textContent = currentRound


    
})
}


play()



