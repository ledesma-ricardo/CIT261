
function populateSelect() {
  
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "nbateams.json", true);
    xhttp.onreadystatechange = function() {
        console.log("f");
      if (this.readyState == 4 && this.status == 200) {
          var teamnba = JSON.parse(this.responseText);
         
          var ele = document.getElementById('sel');
          for (var i = 0; i < teamnba.length; i++) {
              console.log(i);
              // BIND DATA TO <select> ELEMENT.
              ele.innerHTML = ele.innerHTML +
                  '<option value="' + teamnba[i].abbreviation + '">' + teamnba[i].teamName + '</option>';
          }
      }


  }
  xhttp.send();
}

 function nbaJSON(value) {
     console.log(value);
 var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "nbateams.json", true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
          
          var image = '<img src="' + response[value].picURL + '" />';

        //   document.getElementById("jsonTitle").innerHTML = response[value].teamName;
          document.getElementById("teamArena").innerHTML = "<b>Team Stadium Name: </b>" + response[value].arena;
          document.getElementById("teamlogo").innerHTML = image;
          
          var jsonString = JSON.stringify(response[value], null, 4);
          document.getElementById("jsonStringOutput").innerHTML = "<hr \><p><b>JSON converted to a string</b></p><pre>" + jsonString + "</pre>";
      }
    }
xhttp.send();   
}