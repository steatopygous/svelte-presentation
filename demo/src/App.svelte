<script>
	let promise = resolveAfterSnoozing(5);

	async function resolveAfterSnoozing(seconds) {
	    return new Promise((resolve, reject) => {
    	    function getRandomNumber() {
    	        console.log(`getRandomNumber()`);

    	        const value = Math.random();

                if (value > 0.5) {
                    resolve(value);
                } else {
                    throw new Error('Random value too small');
                }
    	    }

	        setTimeout(getRandomNumber, seconds * 1000);
	    });
	}

	function handleClick() {
		$: promise = getRandomNumber(5);
	}
</script>

<button on:click={handleClick}>
	generate random number
</button>

{#await promise}
	<p>...waiting</p>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
