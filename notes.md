#Using NPM Modules

The following app uses a **PieChart** component, implemented using D3, to display the results of a totally scientific investigation into the happiness of front-end developers when using various frameworks :wink:.

```javascript
<script>
	import PieChart from './components/PieChart.svelte';

	const data = {
	    Angular: 10,
	    React:   35,
	    Svelte:  55,
	};
</script>

<PieChart title="Developer Happiness" {data} favourite="Svelte"/>


```

Here are the gory details.  Don't worry, I didn't write this, just wrapped it up in a Svelte component.

```javascript
<script>
	import { onMount } from 'svelte';

	import * as d3 from 'd3';

  export let size;
	export let title;
	export let data;

	let chart;

	onMount(() => {
        const width  = size;
        const height = size;
        const margin = 40;

        // The radius of the pie plot is half the width or half the height, whichever
        // is smaller. We subtract a bit for the margin.

        const radius = Math.min(width, height) / 2 - margin

        // Append the <svg> object to the div with class 'chart'

        const svg = d3.select(".chart")
          .append("svg")
            .attr("width", width)
            .attr("height", height)
          .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        // Set the color scale

        const color = d3.scaleOrdinal()
          .domain(data)
          .range(d3.schemeSet2);

        // Compute the position of each group on the pie:

        const pie = d3.pie()
          .value(function(d) {return d.value; });

        const data_ready = pie(d3.entries(data));

        // Now we know that group A goes from 0 degrees to x degrees and so on.

        // Shape helper to build arcs:

        const arcGenerator = d3.arc()
          .innerRadius(0)
          .outerRadius(radius);

        // Build the pie chart

        svg
          .selectAll('mySlices')
          .data(data_ready)
          .enter()
          .append('path')
            .attr('d', arcGenerator)
            .attr('fill', function(d){ return(color(d.data.key)) })
            .attr("stroke", "black")
            .style("stroke-width", "2px")
            .style("opacity", 0.7);

        // Add the annotations, using the centroid() method to get the best coordinates

        svg
          .selectAll('mySlices')
          .data(data_ready)
          .enter()
          .append('text')
          .text(function(d){ return d.data.key})
          .attr("transform", d => "translate(" + arcGenerator.centroid(d) + ")")
          .style("text-anchor", "middle")
    			.style("font-weight", "bold")
          .style("font-size", 24);
	});
</script>

<style>
    .container {
        text-align: center;
    }
</style>

<div class="container">
    <h2>{title}</h2>

    <div bind:this={chart} class="chart" />
</div>
```

