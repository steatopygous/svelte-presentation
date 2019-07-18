<script>
	let promise = getRandomValueAfterSnoozing(1);

	async function getRandomValueAfterSnoozing(seconds) {
	    return new Promise((resolve, reject) => {
	        setTimeout(getRandomNumber, seconds * 1000);

    	    function getRandomNumber() {
    	        const value = ~~(10 * Math.random());

                if (value >= 5) {
                    resolve(value);
                } else {
                    reject(new Error(`Received a dud... ${value}`));
                }
    	    }
	    });
	}

	function regenerate() {
		promise = getRandomValueAfterSnoozing(1);
	}
</script>

{#await promise}
	<p>Thinking...</p>
{:then number}
	<p>Your lucky number is... {number}</p>
{:catch error}
	<p class="error">{error.message}</p>
{/await}

<button on:click={regenerate}>
	New Number
</button>

<style>
    * {
        font-size: 48px;
    }

    .error {
        color: red;
    }
</style>
