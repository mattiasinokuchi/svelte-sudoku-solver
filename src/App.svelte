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
			message = "CHECK OK";
			isChecked = true;
		} catch (error) {
			console.log(error);
			message = "CHECK NOT OK";
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

<main>
	<div>
		<form id="sudoku-grid" on:change={getUpdate}>
			{#each numArr as num}
				<input class="cellInput" bind:value={num} />
			{/each}
		</form>
	</div>
	<div>
		<button on:click={getCleared} disabled={isCleared}> Clear </button>
		<button on:click={getChecked} disabled={isChecked}> Check </button>
		<button on:click={getSolved} disabled={isSolved}> Solve </button>
	</div>
	<p>{message}</p>
</main>

<style>
	div,
	p {
		display: flex;
		justify-content: center;
	}

	div {
		margin-top: 10vh;
	}

	#sudoku-grid {
		display: grid;
		grid-template-columns: repeat(9, 1fr);
		height: 50vh;
		width: 50vh;
		border: solid 2px;
		place-items: center;
	}

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

	.cellInput:focus {
		background: black;
		outline: none;
		color: white;
	}

	button,
	p {
		font-size: 3vh;
		margin: 5vh;
	}

	@media (min-width: 800px) {
	}
</style>
