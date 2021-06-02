<script>
    async function getSolved() {
        console.log("Solution should appear");
        /*const stuff = { puzzle: textArea.value };
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
		fillpuzzle(parsed.solution);*/
    }
</script>

<button on:click={getSolved}> Solve </button>
