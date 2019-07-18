<script>
	export let name = '';

	function clearName(e) {
	    name = '';
	}
</script>

<style>
    * {
        font-size: 48px;
    }

	h1 {
		color: purple;
	}
</style>

<input bind:value={name} placeholder="Enter a name"/>

<button on:click={clearName}>Clear</button>

<h1>Hello {name || '... is anybody out there?'}</h1>
