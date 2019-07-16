<script>
    import Hello from './components/Hello.svelte';
    import Goodbye from './components/Goodbye.svelte';

	export let name;
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<Hello {name} />
<Goodbye {name} />
