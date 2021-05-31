<script>
	//const textArea = document.getElementById("text-input");
	let numArr = ["","",9,"","",5,"",1,"",8,5,"",4,"","","","",2,4,3,2,"","","","","","",1,"","","",6,9,"",8,3,"",9,"","","","","",6,"",6,2,"",7,1,"","","",9,"","","","","","",1,9,4,5,"","","","",4,"",3,7,"",4,"",3,"","",6,"",""];
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
<div class="container">
	<div class="form-container">
		<form id="solve-form">
			<textarea rows="10" cols="85" id="text-input" name="puzzle" />
			<br />
			<input type="button" value="Solve" id="solve-button" />
			<div id="error-msg" />
		</form>
		<form id="check-form">
			<p>
				Coordinate (A1): <input
					id="coord"
					class="checker"
					type="text"
				/>
			</p>
			<p>Value (1-9): <input class="checker" type="text" id="val" /></p>
			<input type="button" id="check-button" value="Check Placement" />
		</form>
		<span id="error" />
	</div>
	<div id="sudoku-grid">
		<form action="">
			{#each numArr as num}
				<input
					bind:value={num}
					size="1"
				>
			{/each}
		</form>
		<table class="grid">
			<tbody>
				<tr>
					<td class="A1 sudoku-input" />
					<td class="A2 sudoku-input" />
					<td class="A3 sudoku-input" />
					<td class="A4 sudoku-input" />
					<td class="A5 sudoku-input" />
					<td class="A6 sudoku-input" />
					<td class="A7 sudoku-input" />
					<td class="A8 sudoku-input" />
					<td class="A9 sudoku-input" />
				</tr>
				<tr>
					<td class="B1 sudoku-input" />
					<td class="B2 sudoku-input" />
					<td class="B3 sudoku-input" />
					<td class="B4 sudoku-input" />
					<td class="B5 sudoku-input" />
					<td class="B6 sudoku-input" />
					<td class="B7 sudoku-input" />
					<td class="B8 sudoku-input" />
					<td class="B9 sudoku-input" />
				</tr>
				<tr>
					<td class="C1 sudoku-input" />
					<td class="C2 sudoku-input" />
					<td class="C3 sudoku-input" />
					<td class="C4 sudoku-input" />
					<td class="C5 sudoku-input" />
					<td class="C6 sudoku-input" />
					<td class="C7 sudoku-input" />
					<td class="C8 sudoku-input" />
					<td class="C9 sudoku-input" />
				</tr>
				<tr>
					<td class="D1 sudoku-input" />
					<td class="D2 sudoku-input" />
					<td class="D3 sudoku-input" />
					<td class="D4 sudoku-input" />
					<td class="D5 sudoku-input" />
					<td class="D6 sudoku-input" />
					<td class="D7 sudoku-input" />
					<td class="D8 sudoku-input" />
					<td class="D9 sudoku-input" />
				</tr>
				<tr>
					<td class="E1 sudoku-input" />
					<td class="E2 sudoku-input" />
					<td class="E3 sudoku-input" />
					<td class="E4 sudoku-input" />
					<td class="E5 sudoku-input" />
					<td class="E6 sudoku-input" />
					<td class="E7 sudoku-input" />
					<td class="E8 sudoku-input" />
					<td class="E9 sudoku-input" />
				</tr>
				<tr>
					<td class="F1 sudoku-input" />
					<td class="F2 sudoku-input" />
					<td class="F3 sudoku-input" />
					<td class="F4 sudoku-input" />
					<td class="F5 sudoku-input" />
					<td class="F6 sudoku-input" />
					<td class="F7 sudoku-input" />
					<td class="F8 sudoku-input" />
					<td class="F9 sudoku-input" />
				</tr>
				<tr>
					<td class="G1 sudoku-input" />
					<td class="G2 sudoku-input" />
					<td class="G3 sudoku-input" />
					<td class="G4 sudoku-input" />
					<td class="G5 sudoku-input" />
					<td class="G6 sudoku-input" />
					<td class="G7 sudoku-input" />
					<td class="G8 sudoku-input" />
					<td class="G9 sudoku-input" />
				</tr>
				<tr>
					<td class="H1 sudoku-input" />
					<td class="H2 sudoku-input" />
					<td class="H3 sudoku-input" />
					<td class="H4 sudoku-input" />
					<td class="H5 sudoku-input" />
					<td class="H6 sudoku-input" />
					<td class="H7 sudoku-input" />
					<td class="H8 sudoku-input" />
					<td class="H9 sudoku-input" />
				</tr>
				<tr>
					<td class="I1 sudoku-input" />
					<td class="I2 sudoku-input" />
					<td class="I3 sudoku-input" />
					<td class="I4 sudoku-input" />
					<td class="I5 sudoku-input" />
					<td class="I6 sudoku-input" />
					<td class="I7 sudoku-input" />
					<td class="I8 sudoku-input" />
					<td class="I9 sudoku-input" />
				</tr>
			</tbody>
		</table>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}

	.form-container {
		max-width: 95%;
	}

	textarea {
		width: 100%;
	}

	#error-msg {
		color: red;
		display: inline;
		margin-left: 10px;
	}

	#sudoku-grid {
		margin-left: 20px;
		text-align: center;
		display: inline;
	}

	.grid {
		border: 3px solid;
		border-spacing: 0;
	}

	td {
		border: 1px solid;
		padding: 0.3em;
	}

	.sudoku-input {
		border: 1px solid black;
		width: 2em;
		height: 2em;
		text-align: center;
	}

	.C1,
	.C2,
	.C3,
	.C4,
	.C5,
	.C6,
	.C7,
	.C8,
	.C9,
	.F1,
	.F2,
	.F3,
	.F4,
	.F5,
	.F6,
	.F7,
	.F8,
	.F9 {
		border-bottom: 3px solid;
	}

	.A3,
	.B3,
	.C3,
	.D3,
	.E3,
	.F3,
	.G3,
	.H3,
	.I3,
	.A6,
	.B6,
	.C6,
	.D6,
	.E6,
	.F6,
	.G6,
	.H6,
	.I6 {
		border-right: 3px solid;
	}

	@media (min-width: 800px) {
		.container {
			flex-direction: row;
		}

		.form-container {
			align-self: flex-end;
		}
	}
</style>
