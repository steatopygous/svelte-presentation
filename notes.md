#Transitions

One nice feature that's built into Svelte is CSS based transitions.  A few are provided out of the box, along with the ability to create custom ones.

The following are usable with zero coding:

- **fade**,  which fades items in and out
- **fly**, which displays an item a distance away and then animates it to its final location
- **slide**, which makes the item slide in and out of view
- **scale**, which zooms teh item
- **draw**, which animates the stroke of an SVG

Here's an example that draws a cross when the  button is pressed:

```javascript
<script>
	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let visible = false;
	let label = 'Show';

	function toggle() {
	    label = label === 'Show' ? 'Hide' : 'Show';
	    visible = !visible;
	}
</script>

<button on:click={toggle}>{label}</button>

<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
	{#if visible}
		<path transition:draw="{{duration: 3000, delay: 200, easing: quintOut}}"
					d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
					fill="none"
					stroke="blue"
					stroke-width="0.1px"
					stroke-linejoin="round"
		/>
	{/if}
</svg>
```

