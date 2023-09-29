//random numbers for each difficulty
let easyNum = Math.floor(Math.random() * 5);
let moderateNum = Math.floor(Math.random() * 50);
let hardNum = Math.floor(Math.random() * 100);

//guesscounts for each difficulty
let guessCountEasy = 20;
let guessCountModerate = 10;
let guessCountHard = 5;

//music functions
let x = document.querySelector(`#bg-music`);
x.play();
document.querySelector(`#musicOn`).addEventListener("click", () => {
    x.play()
});
document.querySelector(`#musicOff`).addEventListener("click", () => {
    x.pause()
});

//choose Difficulty
//Easy Diff
document.querySelector(`#easyBtn`).addEventListener("click", ()=> {

    //adds a go back button each diff and music on and off buttons
    document.querySelector(`#buttons`).innerHTML = `
    <span class="d-flex justify-content-center flex-row" id="buttons">
        <span class="btn fs-4 me-5" id="goBack">🔙</span>
        <span class="btn fs-4 me-5" id="musicOn">🔊</span>
        <span class="btn fs-4" id="musicOff">🔇</span>
    </span>
    `;

    //refreshes the page to return to choose diff 
    document.querySelector(`#goBack`).addEventListener("click", () => {
        location.href = location.href;
    });

    //enabled the input group
    document.querySelector(`#inputNum`).disabled = false;
    document.querySelector(`#guessBtn`).disabled = false;

    //makes the #cardArea empty to make higher/lower show
    document.querySelector(`#cardArea`).innerHTML = '';

    //guessBtn listener to submit the inputed number in the form
    document.querySelector(`#guessBtn`).addEventListener("click", () => {
        
        //checks if the input is an integer
        let input = parseInt(document.querySelector(`#inputNum`).value);

        //checks if the input is not empty
        if(document.querySelector(`#inputNum`).value != ``){

            //checks if the input is an integer
            if(Number.isInteger(input)){
                
                //checks input to not pass 100
                if(input <= 100 && input != 101){

                    //if the input is equal to the generated number then it will pop-up a winnder modal and ends the game
                    if(input === easyNum){

                        //winner modal
                        const winnerModal = new bootstrap.Modal(document.getElementById('winnerModal'))

                        //tells the user that he won the game
                        document.querySelector(`#cardArea`).innerHTML = `
                        <div>
                            <p class="text-center fw-bold mt-4" style="font-size: 3rem;">🎉 You Won!</p>
                            <p class="text-center fw-bold" style="font-size: 10rem;">${input}</p>
                        </div>
                        `;

                        //restartbtn to refresh the game
                        document.querySelector(`#restartBtn`).addEventListener("click", () => {
                            location.href = location.href
                        });

                        //function to show winner modal
                        winnerModal.show();

                        //else if to checks if the input number is greater than the generated number
                    } else if(input > easyNum){
                        //checks how many guesses remaining to player
                        document.querySelector("#guesses").innerHTML = `<p class="fs-5 fw-medium text-center mt-4" id="guesses">Tries Remaining: ${guessCountEasy-1}</p>`
                        
                        //tells the user lower
                        document.querySelector(`#cardArea`).innerHTML = `
                        <div>
                            <p class="text-center fw-bold mt-4" style="font-size: 3rem;">🔻Lower!</p>
                            <p class="text-center fw-bold" style="font-size: 10rem;">${input}</p>
                        </div>
                        `;

                        //refreshes the input value everytime the user pressed the guess button
                        document.querySelector(`#inputNum`).value = '';

                        //to subtract the players tries
                        guessCountEasy--;

                        //else if to checks if the input number is greater than the generated number
                    } else if(input < easyNum){

                        //checks how many guesses remaining to player
                        document.querySelector("#guesses").innerHTML = `<p class="fs-5 fw-medium text-center mt-4" id="guesses">Tries Remaining: ${guessCountEasy-1}</p>`
                       
                        //tells the user higher
                        document.querySelector(`#cardArea`).innerHTML = `
                        <div>
                            <p class="text-center fw-bold mt-4" style="font-size: 3rem;">🔺Higher!</p>
                            <p class="text-center fw-bold" style="font-size: 10rem;">${input}</p>
                        </div>
                        `;
                        //refreshes the input value everytime the user pressed the guess button
                        document.querySelector(`#inputNum`).value = '';

                        //to subtract the players tries
                        guessCountEasy--;
                    }
                }else{
                    //displays the Only Choose a warning Modal
                    new bootstrap.Modal(document.getElementById('chooseModal')).show();
                }
            }else{
                //displays the number only modal
                new bootstrap.Modal(document.getElementById('letterModal')).show();
            }
        }else{
            //displays the field cannot be empty modal
            new bootstrap.Modal(document.getElementById('emptyModal')).show();
        };
    
        //if the guesscount is equal to zero then the game is over
        if(guessCountEasy === 0){

            //displays the lose modal
            new bootstrap.Modal(document.getElementById('loseModal')).show();

            //restart button that refreshes the pages
            document.querySelector(`#loseRestartBtn`).addEventListener("click", () => {
                location.href = location.href
            });
        };
        
        //makes the starting fields empty
        document.querySelector(`#cardArea`).value = '';
        document.querySelector(`#inputNum`).value = '';
    });
});

//Moderate Diff
document.querySelector(`#moderateBtn`).addEventListener("click", ()=> {
    document.querySelector(`#buttons`).innerHTML = `
    <span class="d-flex justify-content-center flex-row" id="buttons">
        <span class="btn fs-4 me-5" id="goBack">🔙</span>
        <span class="btn fs-4 me-5" id="musicOn">🔊</span>
        <span class="btn fs-4" id="musicOff">🔇</span>
    </span>
    `;

    document.querySelector(`#goBack`).addEventListener("click", () => {
        location.href = location.href;
    });

    document.querySelector(`#inputNum`).disabled = false;
    document.querySelector(`#guessBtn`).disabled = false;
    document.querySelector(`#cardArea`).innerHTML = '';

    document.querySelector(`#guessBtn`).addEventListener("click", () => {
        let input = parseInt(document.querySelector(`#inputNum`).value);
        if(document.querySelector(`#inputNum`).value != ``){
            if(Number.isInteger(input)){
                
                if(input <= 100 && input != 101){
                    if(input === moderateNum){
                        const winnerModal = new bootstrap.Modal(document.getElementById('winnerModal'));
                        document.querySelector("#guesses").innerHTML = ``
                        document.querySelector(`#cardArea`).innerHTML = `
                        <div>
                            <p class="text-center fw-bold mt-4" style="font-size: 3rem;">🎉 You Won!</p>
                            <p class="text-center fw-bold" style="font-size: 10rem;">${input}</p>
                        </div>
                        `;

                        document.querySelector(`#restartBtn`).addEventListener("click", () => {
                            location.href = location.href
                        });

                        winnerModal.show();
                    } else if(input > moderateNum){
                        document.querySelector("#guesses").innerHTML = `<p class="fs-5 fw-medium text-center mt-4" id="guesses">Tries Remaining: ${guessCountModerate-1}</p>`
                        document.querySelector(`#cardArea`).innerHTML = `
                        <div>
                            <p class="text-center fw-bold mt-4" style="font-size: 3rem;">🔻Lower!</p>
                            <p class="text-center fw-bold" style="font-size: 10rem;">${input}</p>
                        </div>
                        `;
                        document.querySelector(`#inputNum`).value = '';
                        guessCountModerate--;
                    } else if(input < moderateNum){
                        document.querySelector("#guesses").innerHTML = `<p class="fs-5 fw-medium text-center mt-4" id="guesses">Tries Remaining: ${guessCountModerate-1}</p>`
                        document.querySelector(`#cardArea`).innerHTML = `
                        <div>
                            <p class="text-center fw-bold mt-4" style="font-size: 3rem;">🔺Higher!</p>
                            <p class="text-center fw-bold" style="font-size: 10rem;">${input}</p>
                        </div>
                        `;
                        document.querySelector(`#inputNum`).value = '';
                        guessCountModerate--;
                    }
                }else{
                    new bootstrap.Modal(document.getElementById('chooseModal')).show(); //modal
                }
            }else{
                new bootstrap.Modal(document.getElementById('letterModal')).show(); //modal
            }
        }else{
            new bootstrap.Modal(document.getElementById('emptyModal')).show(); //modal
        };
    
        if(guessCountModerate === 0){
            new bootstrap.Modal(document.getElementById('loseModal')).show();

            document.querySelector(`#loseRestartBtn`).addEventListener("click", () => {
                location.href = location.href
            });
        };
    
        document.querySelector(`#cardArea`).value = '';
        document.querySelector(`#inputNum`).value = '';
    });
});

//Hard Diff
document.querySelector(`#hardBtn`).addEventListener("click", ()=> {
    document.querySelector(`#buttons`).innerHTML = `
    <span class="d-flex justify-content-center flex-row" id="buttons">
        <span class="btn fs-4 me-5" id="goBack">🔙</span>
        <span class="btn fs-4 me-5" id="musicOn">🔊</span>
        <span class="btn fs-4" id="musicOff">🔇</span>
    </span>
    `;

    document.querySelector(`#goBack`).addEventListener("click", () => {
        location.href = location.href;
    });

    document.querySelector(`#inputNum`).disabled = false;
    document.querySelector(`#guessBtn`).disabled = false;
    document.querySelector(`#cardArea`).innerHTML = '';
    
    document.querySelector(`#guessBtn`).addEventListener("click", () => {
        let input = parseInt(document.querySelector(`#inputNum`).value);
        if(document.querySelector(`#inputNum`).value != ``){
            if(Number.isInteger(input)){
                
                if(input <= 100 && input != 101){
                    if(input === hardNum){
                        const winnerModal = new bootstrap.Modal(document.getElementById('winnerModal'))
                        document.querySelector("#guesses").innerHTML = ``
                        document.querySelector(`#cardArea`).innerHTML = `
                        <div>
                            <p class="text-center fw-bold mt-4" style="font-size: 3rem;">🎉 You Won!</p>
                            <p class="text-center fw-bold" style="font-size: 10rem;">${input}</p>
                        </div>
                        `;

                        document.querySelector(`#restartBtn`).addEventListener("click", () => {
                            location.href = location.href
                        });

                        winnerModal.show();
                    } else if(input > hardNum){
                        document.querySelector("#guesses").innerHTML = `<p class="fs-5 fw-medium text-center mt-4" id="guesses">Tries Remaining: ${guessCountHard-1}</p>`
                        document.querySelector(`#cardArea`).innerHTML = `
                        <div>
                            <p class="text-center fw-bold mt-4" style="font-size: 3rem;">🔻Lower!</p>
                            <p class="text-center fw-bold" style="font-size: 10rem;">${input}</p>
                        </div>
                        `;
                        document.querySelector(`#inputNum`).value = '';
                        guessCountHard--;
                    } else if(input < hardNum){
                        document.querySelector("#guesses").innerHTML = `<p class="fs-5 fw-medium text-center mt-4" id="guesses">Tries Remaining: ${guessCountHard-1}</p>`
                        document.querySelector(`#cardArea`).innerHTML = `
                        <div>
                            <p class="text-center fw-bold mt-4" style="font-size: 3rem;">🔺Higher!</p>
                            <p class="text-center fw-bold" style="font-size: 10rem;">${input}</p>
                        </div>
                        `;
                        document.querySelector(`#inputNum`).value = '';
                        guessCountHard--;
                    }
                }else{
                    new bootstrap.Modal(document.getElementById('chooseModal')).show(); //modal
                }
            }else{
                new bootstrap.Modal(document.getElementById('letterModal')).show(); //modal
            }
        }else{
            new bootstrap.Modal(document.getElementById('emptyModal')).show(); //modal
        };
    
        if(guessCountHard === 0){
            new bootstrap.Modal(document.getElementById('loseModal')).show();

            document.querySelector(`#loseRestartBtn`).addEventListener("click", () => {
                location.href = location.href
            });

        };
    
        document.querySelector(`#cardArea`).value = '';
        document.querySelector(`#inputNum`).value = '';
    });
});