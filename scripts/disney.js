/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function populateSelect() {

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "scripts/nbateams.json", true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var teamnba = JSON.parse(this.responseText);

          var ele = document.getElementById('sel');
          for (var i = 0; i < teamnba.length; i++) {
              // BIND DATA TO <select> ELEMENT.
              ele.innerHTML = ele.innerHTML +
                  '<option value="' + teamnba[i].abbreviation + '">' + teamnba[i].movie + '</option>';
          }
      }
  }
  xhr.send();
}





 function disneyJSON(value) {
 var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "scripts/nbateams.json", true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
          
          var image = '<img src="' + response[value].picURL + '" />';
          

          
          document.getElementById("jsonTitle").innerHTML = (Number(value) + 1) + " - " + response[value].movie;
          document.getElementById("jsonPic").innerHTML = image;
          
          var jsonString = JSON.stringify(response[value], null, 4);
          document.getElementById("jsonStringOutput").innerHTML = "<hr \><p><b>JSON converted to a string</b></p><pre>" + jsonString + "</pre>";
      }
    }
xhttp.send();   
}