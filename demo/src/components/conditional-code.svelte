<script>
    let framework = '';
</script>

<div>
    <span>
        {#if framework === ''}
            What web framework do you use?
        {:else}
            {framework}, eh?
            {#if framework === 'Elm'}
              Nirvana!
            {:else if framework === 'Svelte'}
              You must enjoy your work.
            {:else}
              Looks like you are happy to work hard :-).
          {/if}
        {/if}
    </span>
</div>

<br/>

<div>
    <button on:click={() => framework='React'}>React</button>
    <button on:click={() => framework='Svelte'}>Svelte</button>
    <button on:click={() => framework='Elm'}>Elm</button>
</div>
