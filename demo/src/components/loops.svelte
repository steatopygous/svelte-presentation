<script>
    const frameworks = ['Angular', 'React', 'Svelte', 'Elm'];
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
    {#each frameworks as f}
        <button on:click={() => framework = f}>{f}</button>
    {/each}
</div>
