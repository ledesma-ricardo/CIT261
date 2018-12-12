// Create variables for the Game
var arr_memory = [];
var arr_emojis = [];
var memory_values = [];
var memory_match_ids = [];
var cards_flipped = 0;
var moves = 0;
var seconds = 0;

//Create emojis array from AJAX requestio to a JSON webservice
var xmlhttp = new XMLHttpRequest();
var url = "https://unpkg.com/emoji.json/emoji-compact.json";
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        arr_emojis = JSON.parse(this.responseText);
        //remove all non emoji characters
        for (k = 0; k < arr_emojis.length; k++) {
            switch (arr_emojis[k]) {
                case "🥰":
                    arr_emojis.splice(k, 1);
                case "🥵":
                    arr_emojis.splice(k, 1);
                case "🥶":
                    arr_emojis.splice(k, 1);
                case "🥳":
                    arr_emojis.splice(k, 1);
                case "🥴":
                    arr_emojis.splice(k, 1);
                case "🥺":
                    arr_emojis.splice(k, 1);
            }
        }
        newBoard();
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

//select random playful emojis
function loadEmojis() {
    arr_emojis.splice(140);
    arr_emojis.memory_card_shuffle();
    for (j = 0; j < arr_emojis.length; j++) {
        arr_memory[j] = arr_emojis[j];
    }
    arr_memory.splice(8);
    arr_memory = arr_memory.concat(arr_memory);
}


//Shuffle arr_memory values
Array.prototype.memory_card_shuffle = function () {
    let i = this.length, j, temp;
    for (i = this.length - 1; i > 0; --i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

//Create new board
function newBoard() {
    cards_flipped = 0;
    moves = 0;
    memory_values = [];
    memory_match_ids = [];
    document.getElementById('moves').innerHTML = moves;
    document.getElementById('timer').innerHTML = 0;
    var output = '';
    loadEmojis();
    arr_memory.memory_card_shuffle();
    //output = '<table>';
    for (let i = 0; i < arr_memory.length; ) {
        output += '<tr>';
        for (let j = 0; j < 4; j++) {
            output += '<div class="front" id="card_' + i + '" ontouchend="memoryFlipcard(this,\'' + arr_memory[i] + '\')" " onclick="memoryFlipcard(this,\'' + arr_memory[i] + '\')"></div>';
            output += '</td>';
            i++;
        }
    }
    //output += '</table>';
    document.getElementById('memory_board').innerHTML = output;
    Timer();
}

function memoryFlipcard(card, val) {
    if (card.innerHTML == "" && memory_values.length < 2) {
        moves++;
        document.getElementById('moves').innerHTML = moves;
        card.className = "back";
        card.innerHTML = val;


        if (memory_values.length == 0) {
            memory_values.push(val);
            memory_match_ids.push(card.id);
        } else if (memory_values.length == 1) {
            memory_values.push(val);
            memory_match_ids.push(card.id);
            if (memory_values[0] == memory_values[1]) {
                cards_flipped += 2;
                //Clear both arrays
                memory_values = [];
                memory_match_ids = [];
                if (cards_flipped == arr_memory.length) {                    
                    clearInterval(nowTime);
                    document.getElementById('timer').innerHTML = seconds;
                    //Congratulation Alert
                    document.getElementById('memory_board').innerHTML = "<div class= 'alert'><h2>Well done! <br/>You took " + moves + " moves and " + seconds + " seconds.<br/>Press 'Restart' to Play Again!<br/><div class = 'congrat'><img src='http://www.stickpng.com/assets/images/5863ef547d90850fc3ce296f.png' width='250' height='250'/></div></h2></div>";
                    
                }
            } else { setTimeout(flip2Back, 400);}
        }
    }
}

function flip2Back() {
    //Flip the 2 cards back over
    var card_1 = document.getElementById(memory_match_ids[0]);
    var card_2 = document.getElementById(memory_match_ids[1]);
    card_1.className = "front";
    card_2.className = "front";
    card_1.innerHTML = "";
    card_2.innerHTML = "";
    //Clear both arrays
    memory_values = [];
    memory_match_ids = [];
}

function Timer() {
    seconds = 0;
    nowTime = setInterval(function () {
        document.getElementById('timer').innerHTML = seconds;
        seconds++;
    }, 1000)
}