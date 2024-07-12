function changeMode(size, weight, transform, background, color) {
	return function () {
		const body = document.body;
		body.style.color = color;
		body.style.backgroundColor = background;
		body.style.fontSize = size;
		body.style.fontWeight = weight;
		body.style.textTransform = transform;
		return body
	}
}

function main() {
	spooky = changeMode(9, "bold", "uppercase", "pink", "green");
	darkMode = changeMode(12, "bold", "capitalize", "black", "white");
	screamMode = changeMode(12, "normal", "uppercase", "white", "black");

	// Select Body
	let body = document.body;

	// Add a paragraph to the body of the page with the text Welcome Holberton!
	let node1 = document.createElement('p');
	body.appendChild(node1);
	node1.insertAdjacentText('beforeend', 'Welcome Holberton!');

	// Add a button to the body with the text Spooky
	let button_spooky = document.createElement('button');
	body.appendChild(button_spooky);
	button_spooky.textContent = 'Spooky';
	button_spooky.onclick = spooky;

	//Add a button to the body with the text Dark mode
	let button_DarkMode = document.createElement('button');
	body.appendChild(button_DarkMode);
	button_DarkMode.textContent = 'Dark mode';
	button_DarkMode.onclick = darkMode;

	//Add a button to the body with the text Scream mode
	let button_ScreamMode = document.createElement('button');
	body.appendChild(button_ScreamMode);
	button_ScreamMode.textContent = 'Scream mode';
	button_ScreamMode.onclick = screamMode;

}

main()
