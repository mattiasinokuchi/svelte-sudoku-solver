<script>
	import { solver } from "./lib/solve.js";

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
	let message = '';
	/*const coordInput = document.getElementById("coord");
	const valInput = document.getElementById("val");
	const errorMsg = document.getElementById("error");*/

	function getSolved() {
		try {
			numArr = solver.solve(numArr);			
		} catch (error) {
			console.log(error);
			message = error;
		}
	}

	async function getChecked() {
		console.log("Sudoku should be checked");
		/*const stuff = {
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
		errorMsg.innerHTML = `<code>${JSON.stringify(parsed, null, 2)}</code>`;*/
	}

	/*document
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
		<input class="cellInput" bind:value={num} list="defaultNumbers" />
	{/each}
</form>
<br />
<button on:click={getSolved}> Solve </button>
<button on:click={getChecked}> Check placement </button>
<p>{message}</p>
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
