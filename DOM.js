function start(){
    document.getElementById('addPlayer').innerHTML = "Select Players";
            var bugsBunny = document.createElement("button");
                var t = document.createTextNode("Bugs Bunny");
                bugsBunny.appendChild(t);
                bugsBunny.addEventListener ("click", function() {
                var newItem = document.createElement("LI");
                var imagen1 = new Image(100, 100);
                imagen1.src = 'https://orig00.deviantart.net/ff42/f/2018/191/f/d/1996___01___bugs_bunny_by_boscoloandrea-dcgt8g6.png';
                newItem.appendChild(imagen1);

            var list = document.getElementById("selectPlayers");
                list.insertBefore(newItem, list.childNodes[0]);
                });
    
            var daffyDuck = document.createElement("input");
                daffyDuck.type = "button";
                daffyDuck.value = "Daffy Duck";
                daffyDuck.addEventListener ("click", function() {
                var newItem = document.createElement("LI");
                var imagen1 = new Image(100, 100);
                imagen1.src = 'http://pluspng.com/img-png/daffy-duck-png-daffy-duck-psd43636-png-345.png';
                newItem.appendChild(imagen1);

            var list = document.getElementById("selectPlayers");
                list.insertBefore(newItem, list.childNodes[0]);
                });
    
            var yosemiteSam = document.createElement("input");
                yosemiteSam.type = "button";
                yosemiteSam.value = "Yosemite Sam";
                yosemiteSam.addEventListener ("click", function() {
                var newItem = document.createElement("LI");
                var imagen1 = new Image(100, 100);
                imagen1.src = 'https://pre00.deviantart.net/f0b2/th/pre/i/2017/104/3/5/yosemite_sam_by_4eyez95-db5tspa.png';
                newItem.appendChild(imagen1);

            var list = document.getElementById("selectPlayers");
                list.insertBefore(newItem, list.childNodes[0]);
                });
                
            var tweety = document.createElement("input");
                tweety.type = "button";
                tweety.value = "Tweety Bird";
                tweety.addEventListener ("click", function() {
                var newItem = document.createElement("LI");
                var imagen1 = new Image(100, 100);
                imagen1.src = 'https://pre00.deviantart.net/1416/th/pre/f/2018/189/6/0/1996___01___tweety_by_boscoloandrea-dcgm8sh.png';
                var textnode = document.createTextNode("Tweety Bird");
                newItem.appendChild(imagen1);

            var list = document.getElementById("selectPlayers");
                list.insertBefore(newItem, list.childNodes[0]);
                });
                
            var lolaBunny = document.createElement("input");
                lolaBunny.type = "button";
                lolaBunny.value = "Lola Bunny";
                lolaBunny.addEventListener ("click", function() {
                var newItem = document.createElement("LI");
                var imagen1 = new Image(100, 100);
                imagen1.src = 'https://pre00.deviantart.net/ef2f/th/pre/f/2018/172/7/2/1996___01___lola_bunny_by_boscoloandrea-dcf0bys.png';
                newItem.appendChild(imagen1);

            var list = document.getElementById("selectPlayers");
                list.insertBefore(newItem, list.childNodes[0]);
                });
                
            var michaelJordan = document.createElement("input");
                michaelJordan.type = "button";
                michaelJordan.value = "Michael Jordan";
                michaelJordan.addEventListener ("click", function() {
                var newItem = document.createElement("LI");
                var imagen1 = new Image(100, 100);
                imagen1.src = 'http://www.stickpng.com/assets/thumbs/5841b09ba6515b1e0ad75a75.png';
                var textnode = document.createTextNode("Michael Jordan");
                newItem.appendChild(imagen1);

            var list = document.getElementById("selectPlayers");
                list.insertBefore(newItem, list.childNodes[0]);
                });
                
            var remove = document.createElement("input");
                remove.type = "button";
                remove.value = "Remove Last Player Added";
                remove.addEventListener ("click", function() {
                var list = document.getElementById("selectPlayers");
                list.removeChild(list.childNodes[0]);
                });
    document.getElementById('players').appendChild(bugsBunny);
    document.getElementById('players').appendChild(daffyDuck);
    document.getElementById('players').appendChild(yosemiteSam);
    document.getElementById('players').appendChild(tweety);
    document.getElementById('players').appendChild(lolaBunny);
    document.getElementById('players').appendChild(michaelJordan);
    document.getElementById('players').appendChild(remove);
       }
       
        function game() {
       
            if (list.childNodes < 5) {
                document.getElementById('outputDiv2').innerHTML = "Not enough, add at least 5 players to start the game.";
            } else 	{
                document.getElementById('outputDiv2').innerHTML = "Yupii!!! - The Nerdlucks got scared and don't want to play!";
            }
        }