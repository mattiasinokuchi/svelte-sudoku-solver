<script>
	import { solver } from "./solve.js";

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
	let message = "";
	const elementIsEmpty = (currentValue) => currentValue === "";
	$: isCleared = numArr.every(elementIsEmpty);
	let isChecked = false;
	let isSolved = false;

	function getCleared() {
		numArr = [
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
		];
		message = "";
		isChecked = false;
		isSolved = false;
	}

	function getChecked() {
		try {
			// clone used not to spoil the sudoku
			const clonedArr = [...numArr];
			solver.solve(clonedArr);
			message = "says 'ok' :-)";
			isChecked = true;
		} catch (error) {
			console.log(error);
			message = "says 'not ok'";
			isChecked = true;
		}
	}

	function getSolved() {
		try {
			numArr = solver.solve(numArr);
			message = "";
			isChecked = true;
			isSolved = true;
		} catch (error) {
			console.log(error);
			message = error;
		}
	}

	function getUpdate() {
		message = "";
		isChecked = false;
		isSolved = false;
	}
</script>

<p>sudoku solver {message} </p>
<div>
	<form id="sudoku-grid" on:change={getUpdate}>
		{#each numArr as num}
			<input type="text" class="cellInput" bind:value={num} />
		{/each}
	</form>
</div>
<div>
	<button on:click={getCleared} disabled={isCleared}> clear </button>
	<button on:click={getChecked} disabled={isChecked}> check </button>
	<button on:click={getSolved} disabled={isSolved}> solve </button>
</div>

<style>
	div,
	p {
		display: flex;
		justify-content: center;
	}

	div,
	p {
		margin-top: 10vh;
	}

	#sudoku-grid {
		display: grid;
		grid-template-columns: repeat(9, 1fr);
		height: 60vh;
		width: 60vh;
		border: solid darkgray 2px;
		place-items: center;
	}

	.cellInput {
		text-align: center;
		width: 100%;
		height: 100%;
		border: solid lightgrey 1px;
		padding: 0%;
		font-size: 3vh;
		border-radius: 0%;
	}

	.cellInput:nth-child(9n + 4) {
		border-left: solid darkgrey 2px;
	}

	.cellInput:nth-child(9n + 7) {
		border-left: solid darkgrey 2px;
	}

	.cellInput:nth-child(n + 28):nth-child(-n + 36) {
		border-top: solid darkgrey 2px;
	}

	.cellInput:nth-child(n + 55):nth-child(-n + 63) {
		border-top: solid darkgrey 2px;
	}

	.cellInput:focus {
		background: black;
		outline: none;
		color: white;
	}

	button {
		font-size: 3vh;
		margin: 0 3vh 0 3vh;
		border: dashed lightgray 1px;
		height: 6vh;
		width: 15vh;
	}

	p {
		font-size: 3vh;
		margin: 3vh;
	}
</style>
