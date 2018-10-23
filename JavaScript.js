
function greetings(){

		var name= prompt("What is your name?");
		alert("Hello " + name + ", nice to see you!");
    }

	
var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

    function datemonth() {

        var d = new Date();
        var m = month[d.getMonth()];
        alert(m);
     }

    function displayarray() {

        alert(Object.values(month));
     }
	 
	 
function age() {
      var age = prompt("Please enter your age?");
	
      if (age >= 18) {
		alert("You are an adult");} 
      else{
      	alert("You are NOT an adult");}
       }

function DayName(){
    switch (new Date().getDay()) 
      { case 0: day = "Sunday";
            break;
        case 1: day = "Monday";
            break;
        case 2: day = "Tuesday";
            break;
        case 3: day = "Wednesday";
            break;
        case 4: day = "Thursday";
            break;
        case 5: day = "Friday";
            break;
        case 6: day = "Saturday"; 
	  }
    
        alert("Today is " + day); 
	}
	
	
function ClassmatesForLoop() {
		var names = ["Elias", "Marcelo", "Vanessa", "Jean", "Alfredo", "Carlos"];
		var classMate = "";
			for (var i = 0; i < names.length; i++) {
				classMate += names[i] + "<br>";
			}
				document.getElementById("MatesNames").innerHTML = classMate;
		}
		
		
function ClassmatesWhileLoop() {
        var names = ["Elias", "Marcelo", "Vanessa", "Jean", "Alfredo", "Carlos"];
        var i = 0;
        var classMate = "";
        while (names[i]){
            classMate += names[i] + "<br>";
            i++;
        }
            document.getElementById("MatesNames_while").innerHTML = classMate;
        }
		
		
function randomPass(length) {
        var char = "oscvtesbwd!@#$%^*()-+PLKMNYRWBCF1981";
        var pass = "";
        for (var x = 0; x < length; x++) {
            var i = Math.floor(Math.random() * char.length);
            pass += char.charAt(i);
        }
			return pass;
        }

function generatePass() {

        passform.row_pass.value = randomPass(passform.length.value);
            
	}