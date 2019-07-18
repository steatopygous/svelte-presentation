<script>
	import { onMount } from 'svelte';

	import * as d3 from 'd3';

	export let size = 650;
	export let favourite;
	export let title;
	export let data;

	let chart;
	let distortionFactor = 11;

	$: distortedData = distort(data, distortionFactor);
	$: createSvg(distortedData);

	function distort(data, distortionFactor) {
	    if (!data) {
	        return;
	    }

	    const factor = (distortionFactor * 36 / 11) / 100;
	    const keys = Object.keys(data);
	    const distorted = {};

	    for (const key of keys) {
	        const value = data[key];

	        if (key === favourite) {
        	    distorted[key] = (1 + factor) * value;
	        } else {
        	    distorted[key] = (1 - factor) * value;
	        }
	    }

        return distorted;
	}

	let svg;

	onMount(() => {
        createSvg(distort(data, distortionFactor));
	});

	function createSvg(distortedData) {
	    if (!distortedData) {
	        return;
	    }

	    d3.select('svg').remove();

        svg = d3.select(".chart")
          .append("svg")
            .attr("width", size)
            .attr("height", size)
          .append("g")
            .attr("transform", "translate(" + size / 2 + "," + size / 2 + ")");

        const width = size;
        const height = size;
        const margin = 40;

        // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.

        const radius = Math.min(width, height) / 2 - margin;

        // append the svg object to the div called 'chart'

        // Set the color scale

        const color = d3.scaleOrdinal()
          .domain(distortedData)
          .range(d3.schemeSet2);

        // Compute the position of each group on the pie:

        const pie = d3.pie()
          .value(function(d) {return d.value; });

        const data_ready = pie(d3.entries(distortedData));

        // Now I know that group A goes from 0 degrees to x degrees and so on.

        // Shape helper to build arcs:

        const arcGenerator = d3.arc()
          .innerRadius(0)
          .outerRadius(radius);

        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.

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

        // Now add the annotation. Use the centroid method to get the best coordinates
        svg
          .selectAll('mySlices')
          .data(data_ready)
          .enter()
          .append('text')
          .text(function(d){ return d.data.key})
          .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
          .style("text-anchor", "middle")
          .style("font-size", 24)
          .style("font-weight", "bold");
	}
</script>

<style>
    .container {
        text-align: center;
    }

    .distortion {
        font-size: 12px;
        font-weight: bold;
    }

    .slider {
        corner-radius: 5px;
    }
</style>

<div class="container">
    <h2>{title}</h2>

    <input type="range" min="0" max="11" bind:value={distortionFactor} class="slider">
    {distortionFactor}
    <br/>

    <span class="distortion">Reality Distortion Field</span>

    <div bind:this={chart} class="chart" />
</div>

