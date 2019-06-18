<script>
    let framework = 'React';
</script>

<div>
You use {framework}?
{#if framework === 'Elm'}
  Nirvana!
{:else if framework === 'Svelte'}
  <div>Close, but no banana.</div>
{:else}
  <div>Looks like you enjoy working hard :-).</div>
{/if}
</div>
I use
<button on:click={() => framework = 'Elm'}>Elm</button>
<button on:click={() => framework = 'React'}>React</button>
<button on:click={() => framework = 'Svelte'}>Svelte</button>
