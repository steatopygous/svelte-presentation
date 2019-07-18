<script>
    import Hello from './components/Hello.svelte';
    import Goodbye from './components/Goodbye.svelte';

	export let name;
</script>

<style>
	h1 {
		color: purple;
		font-size: 40px;
	}
</style>
<h1>Switching Gears...</h1>

<Goodbye name="Virtual DOM" />
<Hello {name} />
