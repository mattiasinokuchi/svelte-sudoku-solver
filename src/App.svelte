<script>
	//const textArea = document.getElementById("text-input");
	let numArr = [
		"",
		"",
		9,
		"",
		"",
		5,
		"",
		1,
		"",
		8,
		5,
		"",
		4,
		"",
		"",
		"",
		"",
		2,
		4,
		3,
		2,
		"",
		"",
		"",
		"",
		"",
		"",
		1,
		"",
		"",
		"",
		6,
		9,
		"",
		8,
		3,
		"",
		9,
		"",
		"",
		"",
		"",
		"",
		6,
		"",
		6,
		2,
		"",
		7,
		1,
		"",
		"",
		"",
		9,
		"",
		"",
		"",
		"",
		"",
		"",
		1,
		9,
		4,
		5,
		"",
		"",
		"",
		"",
		4,
		"",
		3,
		7,
		"",
		4,
		"",
		3,
		"",
		"",
		6,
		"",
		"",
	];
	/*const coordInput = document.getElementById("coord");
	const valInput = document.getElementById("val");
	const errorMsg = document.getElementById("error");

	document.addEventListener("DOMContentLoaded", () => {
		textArea.value =
			"..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
		fillpuzzle(textArea.value);
	});

	textArea.addEventListener("input", () => {
		fillpuzzle(textArea.value);
	});

	function fillpuzzle(data) {
		let len = data.length < 81 ? data.length : 81;
		for (let i = 0; i < len; i++) {
			let rowLetter = String.fromCharCode(
				"A".charCodeAt(0) + Math.floor(i / 9)
			);
			let col = (i % 9) + 1;
			if (!data[i] || data[i] === ".") {
				document.getElementsByClassName(rowLetter + col)[0].innerText =
					" ";
				continue;
			}
			document.getElementsByClassName(rowLetter + col)[0].innerText =
				data[i];
		}
		return;
	}

	async function getSolved() {
		const stuff = { puzzle: textArea.value };
		const data = await fetch("/api/solve", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-type": "application/json",
			},
			body: JSON.stringify(stuff),
		});
		const parsed = await data.json();
		if (parsed.error) {
			errorMsg.innerHTML = `<code>${JSON.stringify(
				parsed,
				null,
				2
			)}</code>`;
			return;
		}
		fillpuzzle(parsed.solution);
	}

	async function getChecked() {
		const stuff = {
			puzzle: textArea.value,
			coordinate: coordInput.value,
			value: valInput.value,
		};
		const data = await fetch("/api/check", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-type": "application/json",
			},
			body: JSON.stringify(stuff),
		});
		const parsed = await data.json();
		errorMsg.innerHTML = `<code>${JSON.stringify(parsed, null, 2)}</code>`;
	}

	document
		.getElementById("solve-button")
		.addEventListener("click", getSolved);
	document
		.getElementById("check-button")
		.addEventListener("click", getChecked);*/
</script>

<header>
	<h1>Sudoku Solver</h1>
</header>
<form id="sudoku-grid" action="">
	{#each numArr as num}
		<input class="cellInput" bind:value={num} list="defaultNumbers"/>
	{/each}
</form>
<form id="solve-form">
	<!--<textarea rows="10" cols="85" id="text-input" name="puzzle" />-->
	<br />
	<input type="button" value="Solve" id="solve-button" />
	<div id="error-msg" />
</form>
<form id="check-form">
	<!--<p>
				Coordinate (A1): <input
					id="coord"
					class="checker"
					type="text"
				/>
			</p>
			<p>Value (1-9): <input class="checker" type="text" id="val" /></p>-->
	<input type="button" id="check-button" value="Check Placement" />
</form>
<span id="error" />

<style>
	.cellInput {
		text-align: center;
		width: 100%;
		height: 100%;
		border: solid 1px;
		padding: 0%;
		font-size: 4vh;
	}

	.cellInput:nth-child(9n + 4) {
		border-left: solid 2px;
	}

	.cellInput:nth-child(9n + 7) {
		border-left: solid 2px;
	}

	.cellInput:nth-child(n + 28):nth-child(-n + 36) {
		border-top: solid 2px;
	}

	.cellInput:nth-child(n + 55):nth-child(-n + 63) {
		border-top: solid 2px;
	}

	#sudoku-grid {
		display: grid;
		grid-template-columns: repeat(9, 1fr);
		height: 50vh;
		width: 50vh;
		border: solid 2px;
		place-items: center;
	}

	.cellInput:focus {
		background: black;
		outline: none;
		color: white;
	}

	@media (min-width: 800px) {
	}
</style>
