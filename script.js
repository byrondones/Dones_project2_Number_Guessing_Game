let Num = Math.floor(Math.random() * 5);

let guessCountEasy = 15;
let guessCountModerate = 10;
let guessCountHard = 5;

let x = document.querySelector(`#bg-music`);
x.play();

document.querySelector(`#musicOn`).addEventListener("click", () => {
    x.play()
});

document.querySelector(`#musicOff`).addEventListener("click", () => {
    x.pause()
});

//choose Difficulty
//Ease Diff
document.querySelector(`#easyBtn`).addEventListener("click", ()=> {
    document.querySelector(`#inputNum`).disabled = false;
    document.querySelector(`#guessBtn`).disabled = false;
    document.querySelector(`#cardArea`).innerHTML = '';

    document.querySelector(`#guessBtn`).addEventListener("click", () => {
        let input = parseInt(document.querySelector(`#inputNum`).value);
        if(document.querySelector(`#inputNum`).value != ``){
            if(Number.isInteger(input)){
                
                if(input <= 100 || input >= 100){
                    if(input === Num){
                        document.querySelector("#guesses").innerHTML = ``
                        document.querySelector(`#cardArea`).innerHTML = `
                        <div>
                            <p class="text-center fw-bold mt-4" style="font-size: 3rem;">🎉 You Won!</p>
                            <p class="text-center fw-bold" style="font-size: 10rem;">${input}</p>
                        </div>
                        `;
                    } else if(input > Num){
                        document.querySelector("#guesses").innerHTML = `<p class="fs-5 fw-medium text-center mt-4" id="guesses">Tries Remaining: ${guessCountEasy-1}</p>`
                        document.querySelector(`#cardArea`).innerHTML = `
                        <div>
                            <p class="text-center fw-bold mt-4" style="font-size: 3rem;">🔻Lower!</p>
                            <p class="text-center fw-bold" style="font-size: 10rem;">${input}</p>
                        </div>
                        `;
                        document.querySelector(`#inputNum`).value = '';
                        guessCountEasy--;
                    } else if(input < Num){
                        document.querySelector("#guesses").innerHTML = `<p class="fs-5 fw-medium text-center mt-4" id="guesses">Tries Remaining: ${guessCountEasy-1}</p>`
                        document.querySelector(`#cardArea`).innerHTML = `
                        <div>
                            <p class="text-center fw-bold mt-4" style="font-size: 3rem;">🔺Higher!</p>
                            <p class="text-center fw-bold" style="font-size: 10rem;">${input}</p>
                        </div>
                        `;
                        document.querySelector(`#inputNum`).value = '';
                        guessCountEasy--;
                    }
                }else{
                    alert("Choose a number from 0 to 100! ❌"); //modal
                }
            }else{
                alert("Input cannot be a Letter! ❌"); //modal
            }
        }else{
            alert("Field cannot be empty! ❌"); //modal
        };
    
        if(guessCountEasy === 0){
            alert("Game Over!");
            location.href = location.href
        };
    
        document.querySelector(`#cardArea`).value = '';
        document.querySelector(`#inputNum`).value = '';
    });
});


//Moderate Diff
document.querySelector(`#moderateBtn`).addEventListener("click", ()=> {
    document.querySelector(`#inputNum`).disabled = false;
    document.querySelector(`#guessBtn`).disabled = false;
    document.querySelector(`#cardArea`).innerHTML = '';

    document.querySelector(`#guessBtn`).addEventListener("click", () => {
        let input = parseInt(document.querySelector(`#inputNum`).value);
        if(document.querySelector(`#inputNum`).value != ``){
            if(Number.isInteger(input)){
                
                if(input <= 100 || input >= 100){
                    if(input === Num){
                        document.querySelector("#guesses").innerHTML = ``
                        document.querySelector(`#cardArea`).innerHTML = `
                        <div>
                            <p class="text-center fw-bold mt-4" style="font-size: 3rem;">🎉 You Won!</p>
                            <p class="text-center fw-bold" style="font-size: 10rem;">${input}</p>
                        </div>
                        `;
                    } else if(input > Num){
                        document.querySelector("#guesses").innerHTML = `<p class="fs-5 fw-medium text-center mt-4" id="guesses">Tries Remaining: ${guessCountModerate-1}</p>`
                        document.querySelector(`#cardArea`).innerHTML = `
                        <div>
                            <p class="text-center fw-bold mt-4" style="font-size: 3rem;">🔻Lower!</p>
                            <p class="text-center fw-bold" style="font-size: 10rem;">${input}</p>
                        </div>
                        `;
                        document.querySelector(`#inputNum`).value = '';
                        guessCountModerate--;
                    } else if(input < Num){
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
                    alert("Choose a number from 0 to 100! ❌"); //modal
                }
            }else{
                alert("Input cannot be a Letter! ❌"); //modal
            }
        }else{
            alert("Field cannot be empty! ❌"); //modal
        };
    
        if(guessCountModerate === 0){
            alert("Game Over!");
            location.href = location.href
        };
    
        document.querySelector(`#cardArea`).value = '';
        document.querySelector(`#inputNum`).value = '';
    });
});

//Hard Diff
document.querySelector(`#hardBtn`).addEventListener("click", ()=> {
    document.querySelector(`#inputNum`).disabled = false;
    document.querySelector(`#guessBtn`).disabled = false;
    document.querySelector(`#cardArea`).innerHTML = '';
    
    document.querySelector(`#guessBtn`).addEventListener("click", () => {
        let input = parseInt(document.querySelector(`#inputNum`).value);
        if(document.querySelector(`#inputNum`).value != ``){
            if(Number.isInteger(input)){
                
                if(input <= 100 || input >= 100){
                    if(input === Num){
                        document.querySelector("#guesses").innerHTML = ``
                        document.querySelector(`#cardArea`).innerHTML = `
                        <div>
                            <p class="text-center fw-bold mt-4" style="font-size: 3rem;">🎉 You Won!</p>
                            <p class="text-center fw-bold" style="font-size: 10rem;">${input}</p>
                        </div>
                        `;
                    } else if(input > Num){
                        document.querySelector("#guesses").innerHTML = `<p class="fs-5 fw-medium text-center mt-4" id="guesses">Tries Remaining: ${guessCountHard-1}</p>`
                        document.querySelector(`#cardArea`).innerHTML = `
                        <div>
                            <p class="text-center fw-bold mt-4" style="font-size: 3rem;">🔻Lower!</p>
                            <p class="text-center fw-bold" style="font-size: 10rem;">${input}</p>
                        </div>
                        `;
                        document.querySelector(`#inputNum`).value = '';
                        guessCountHard--;
                    } else if(input < Num){
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
                    alert("Choose a number from 0 to 100! ❌"); //modal
                }
            }else{
                alert("Input cannot be a Letter! ❌"); //modal
            }
        }else{
            alert("Field cannot be empty! ❌"); //modal
        };
    
        if(guessCountHard === 0){
            alert("Game Over!");
            location.href = location.href
        };
    
        document.querySelector(`#cardArea`).value = '';
        document.querySelector(`#inputNum`).value = '';
    });
});