document.getElementById('btn').addEventListener('click', calculateInsurance);

function calculateInsurance() {
	//FETCH DATA FROM INPUT FIELDS
	var name = document.getElementById('name').value;
	var country = document.getElementById('country').value;
	var age = Number(document.getElementById('age').value);
	var horse_power = Number(document.getElementById('ps').value);

	//DEFAULT TEXT IF INVALID INPUT
	var text = "Please fill all input fields"

	if (age && country && horse_power && name) { //Check whether all values are "truthy" i.e. not empty or 0
		var insurance;
		switch(country) {
			case "Austria": insurance = horse_power*100/age+50; break;
			case "Hungary": insurance = horse_power*120/age+100; break;			
			case "Greece": insurance = horse_power*150/(age+3)+50; //no break needed for the last case. Code breaks here anyway.
		}
		insurance = Math.round(insurance*100)/100;
		text = name + ", your insurance costs " + insurance + " €";
	}
	document.getElementById('result').innerHTML = text;
}