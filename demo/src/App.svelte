<script>
	let promise = getRandomValueAfterSnoozing(1);

	async function getRandomValueAfterSnoozing(seconds) {
	    return new Promise((resolve, reject) => {
    	    function getRandomNumber() {
    	        const value = Math.random();

                if (value > 0.5) {
                    resolve(value);
                } else {
                    reject(new Error(`Value too small ... ${value}`));
                }
    	    }

	        setTimeout(getRandomNumber, seconds * 1000);
	    });
	}

	function handleClick() {
		$: promise = getRandomValueAfterSnoozing(1);
	}
</script>

<button on:click={handleClick}>
	generate random number
</button>

{#await promise}
	<p>Waiting...</p>
{:then number}
	<p>Value is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
