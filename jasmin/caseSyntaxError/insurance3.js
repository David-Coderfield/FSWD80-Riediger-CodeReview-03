function calculateInsurance() {
	var name = "Dave";
	var country = "Austria";
	var age = 3;
	var horse_power = 200;

	var text = "Please fill all input fields"

	if (age && country && horse_power && name) { //Check whether all values are "truthy" i.e. not empty or 0
		var insurance;
		switch: country { //TEST MISTAKE HERE
			case "Austria": insurance = horse_power*100/age+50; break;
			case "Hungary": insurance = horse_power*120/age+100; break;			
			case "Greece": insurance = horse_power*150/(age+3)+50; //no break needed for the last case. Code breaks here anyway.
		}
		insurance = Math.round(insurance*100)/100;
		text = name + ", your insurance costs " + insurance + " €";
	}
	return text;
}

//"Dave, your insurance costs 6716.67 €"