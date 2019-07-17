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

<svg viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
	{#if visible}
		<path
					d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
					fill="none"
					stroke="blue"
					stroke-width="0.1px"
					stroke-linejoin="round"
		/>
	{/if}
</svg>

<!-- transition:draw="{{duration: 3000, delay: 200, easing: quintOut}}" -->
