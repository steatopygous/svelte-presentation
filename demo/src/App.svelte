<script>
	export let name;

	function clearName(e) {
	    name = '';
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

Name: <input bind:value={name} />

<button on:click={clearName}>Clear</button>

<h1>Hello {name || 'world'}!</h1>
