<script>
    const frameworks = ['Angular', 'React', 'Svelte', 'Elm'];
    let framework = '';
</script>

<div>
    <span>
        {#if framework === ''}
            What web framework do you use?
        {:else}
            {#if framework === 'Angular'}
              You have my deepest sympathy.
            {:else if framework === 'React'}
              You obviously have a good work ethic.
            {:else if framework === 'Svelte'}
              You must enjoy your job.
            {:else}
              Nirvana!
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
