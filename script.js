let easyNum = Math.floor(Math.random() * 5);
let moderateNum = Math.floor(Math.random() * 50);
let hardNum = Math.floor(Math.random() * 100);

let guessCountEasy = 10;
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
//Easy Diff
document.querySelector(`#easyBtn`).addEventListener("click", ()=> {
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
                    if(input === easyNum){
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
                    } else if(input > easyNum){
                        document.querySelector("#guesses").innerHTML = `<p class="fs-5 fw-medium text-center mt-4" id="guesses">Tries Remaining: ${guessCountEasy-1}</p>`
                        document.querySelector(`#cardArea`).innerHTML = `
                        <div>
                            <p class="text-center fw-bold mt-4" style="font-size: 3rem;">🔻Lower!</p>
                            <p class="text-center fw-bold" style="font-size: 10rem;">${input}</p>
                        </div>
                        `;
                        document.querySelector(`#inputNum`).value = '';
                        guessCountEasy--;
                    } else if(input < easyNum){
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
                    new bootstrap.Modal(document.getElementById('chooseModal')).show(); //modal
                }
            }else{
                new bootstrap.Modal(document.getElementById('letterModal')).show(); //modal
            }
        }else{
            new bootstrap.Modal(document.getElementById('emptyModal')).show(); //modal
        };
    
        if(guessCountEasy === 0){
            new bootstrap.Modal(document.getElementById('loseModal')).show();

            document.querySelector(`#loseRestartBtn`).addEventListener("click", () => {
                location.href = location.href
            });
        };
    
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