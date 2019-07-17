<script>
    let framework = '';
</script>

<div>
    <span>
        {#if framework === ''}
          What web framework do you use?
        {:else if framework === 'React'}
          I guess you've been hooked.
        {:else if framework === 'Svelte'}
          Keeping it lean!
        {:else if framework === 'Elm'}
          Nirvana!
        {/if}
    </span>
</div>

<br/>

<div>
    <button on:click={() => framework='React'}>React</button>
    <button on:click={() => framework='Svelte'}>Svelte</button>
    <button on:click={() => framework='Elm'}>Elm</button>
</div>
