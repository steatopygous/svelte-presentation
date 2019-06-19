#Handling Promises

Because promises are such a big part of JavaScript these days, Svelte provides a way to render content that depends on them.

In the following code, the HTML inside the **{#await}** block is rendered while the promise is pending, once it completes, either the **{:then}** or **{:error}** content will be rendered, depending on whether the promise was resolved or rejected.

```javascript
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
		promise = getRandomValueAfterSnoozing(1);
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

```

