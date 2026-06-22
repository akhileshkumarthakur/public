


function computerMove () {
    const conputerMove = Math.random()
    // random number between 0 and 1

    let computerChoose = ''

    if(computerMove >= 0 && computerMove <= 1/3){
        computerChoose = 'Rock'

    } else if (computerMove > 1/3 || computerMove <= 2/3) {
        computerChoose = 'Paper'

    } else if (computerMove > 2/3 || computerMove <= 1) {
        computerChoose = 'Scissor'
    }
    else if (true) {
        computerChoose = "not in hand"
    }
        

    console.log(computerChoose)

    // return computerChoose
}



function test () {
    const computerMove = Math.random()
    // random number between 0 and 1


    let computerChoose = ''

    if (computerMove > 0 && computerMove) {
        computerChoose = 'paper';
    }
    
    else if (true) {
        computerChoose = 'computer is mad'
    }
        
    

    console.log(computerChoose)

    // return computerChoose
}





function runFunction (yourmove) { // rock

  
    if (yourmove == 'rock'){

    
        if (computerMove == 'rock'){
            
        }
    }
}