<script>
	import PieChart from './components/PieChart.svelte';

	const data = {
	    Angular: 10,
	    React:   35,
	    Svelte:  55,
	};
</script>

<PieChart title="Developer Happiness" {data} size="800"/>

