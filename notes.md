#onMount()

Svelte has a similar set of lifecycle methods to React.  The one that's likely to be used most often is **onMount()**, which is executed after a component's initial render.

In the following, we start with an empty array of photo items.  The onMount() initiates a call to the JSON placeholder site, to retrieve 10 random images and captions.

Another convenience that Svelte supplies, used here, is that an **{#each}** can have an **{:else}** clause that's rendered when the collection is empty.  It saves having to nest the {#each} inside an {#if photos.length === 0} in this case, making the code a little easier to read.

If onMount() returns a function, that will be called when the component is destroyed.

```html
<script>
	import { onMount } from 'svelte';

	let photos = [];

	onMount(async () => {
	  const url = `https://jsonplaceholder.typicode.com/photos?_limit=10`;
		const res = await fetch(url);

		photos = await res.json();
	});
</script>

<h1>Photo album</h1>

<div class="photos">
	{#each photos as photo}
		<figure>
			<img src={photo.thumbnailUrl} alt={photo.title}>
			<figcaption>{photo.title}</figcaption>
		</figure>
	{:else}
		<p>Loading...</p>
	{/each}
</div>

<style>
	.photos {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 8px;
	}

	figure, img {
		width: 100%;
		margin: 0;
	}
</style>

```

