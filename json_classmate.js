var ClassmateJson = [
			{
				"FirstName":"Vanessa",
				"LastName":"Marcos",
				"Sex":"Female",
				"Country":"Peru",

			},
			{
				"FirstName":"Alfredo",
				"LastName":"Guerra",
				"Sex":"Male",
				"Country":"Chile",

			},
			{
				"FirstName":"Amaro",
				"LastName":"Filho",
				"Sex":"Male",
				"Country":"Brazil",

			},
			{
				"FirstName":"Carlos",
				"LastName":"Alonzo",
				"Sex":"Male",
				"Country":"Colombia",

			},
			{
				"FirstName":"Elias",
				"LastName":"Monzon",
				"Sex":"Male",
				"Country":"Uruguay",

			},
			{
				"FirstName":"Jean",
				"LastName":"Oliveira",
				"Sex":"Male",
				"Country":"Brazil",

			},
			{
				"FirstName":"Marcelo",
				"LastName":"Rodriguez",
				"Sex":"Male",
				"Country":"Argentina",

			},
			{
				"FirstName":"Ricardo",
				"LastName":"Ledesma",
				"Sex":"Male",
				"Country":"Dominican Republic",

			},
		];


        var i = 0;
        var classmate = "";

        function findClassmate() {

        classmate = document.getElementById("ClassName").value;

        document.getElementById("message").innerHTML = "Please check your spelling and try again.";
        document.getElementById("first").innerHTML = "<br>";
        document.getElementById("last").innerHTML = "<br>";
        document.getElementById("sex").innerHTML = "<br>";
        document.getElementById("country").innerHTML = "<br>";


        for (i = 0; i < ClassmateJson.length; i++) {

            if	(ClassmateJson[i].FirstName == classmate) {
                document.getElementById("message").innerHTML = "Here is some information about my Classmate:"
                document.getElementById("first").innerHTML = "First name: <b>" + ClassmateJson[i].FirstName + "</b>";
                document.getElementById("last").innerHTML = "Last name: <b>" + ClassmateJson[i].LastName + "</b>";
                document.getElementById("sex").innerHTML = "Sex: <b>" + ClassmateJson[i].Sex + "</b>";
                document.getElementById("country").innerHTML = "Country: <b>" + ClassmateJson[i].Country + "</b>";
                } 

            }

        }