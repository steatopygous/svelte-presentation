<script>
	import PieChart from './components/PieChart.svelte';

	const data = {
	    Angular: 13,
	    React:   32,
	    Svelte:  43,
	};
</script>

<PieChart
    title="Developer Happiness"
    size="700"
    favourite="Svelte"
    {data}
/>

