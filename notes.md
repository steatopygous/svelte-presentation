#Handling Promises

Because promises are such a big part of JavaScript these days, Svelte provides a way to render content that depends on them.

In the following code, the HTML inside the **{#await}** block is rendered while the promise is pending, once it completes, either the **{:then}** or **{:error}** content will be rendered, depending on whether the promise was resolved or rejected.

```javascript
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
    .error {
        color: red;
    }
</style>


```

