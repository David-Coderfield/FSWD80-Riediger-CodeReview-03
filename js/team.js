function createTeamTable() {
	const team = JSON.parse(teamMembers);

	var htmlcont = document.getElementById('byJSON');
	table = document.createElement('table');
	table.id = "leTable"; //not needed for the code to work, just for my css
	htmlcont.appendChild(table);
	
	for (let i = 0; i<team.length; i++) {
		table.innerHTML+=`<tr><td>${team[i].name}</td><td><a href="mailto:${team[i].email}" target="_top">${team[i].email}</a></td>
		<td><img src=${team[i].image} alt="${team[i].name}-pic"></td></tr>` //multiline string using ${var} instead of + + ...
	}
}
createTeamTable();