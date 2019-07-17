<script>
    let frameworks = [
        { name: 'Angular', creator: 'Adam Abrons'  },
        { name: 'React',   creator: 'Jordan Walke' },
        { name: 'Svelte',  creator: 'Rich Harris'  },
        { name: 'Vue',     creator: 'Evan You'     }
    ];

    let framework = '';
</script>

<div class="container">
    <div>
        {#if framework === ''}
            What's your web framework of choice?
        {:else if framework === 'Angular'}
            I prefer my frameworks to have a few curves.
        {:else if framework === 'React'}
            Looks like you've been hooked.
        {:else if framework === 'Vue'}
            For coders who can't spell.
        {:else if framework === 'Svelte'}
          You're obviously a lean, mean coding machine!
        {/if}
    </div>

    <br/>

    <div>
        {#each frameworks as f}
            <button on:click={() => framework = f.name}>{f.name}</button>
        {/each}
    </div>

    <br />

    {#each frameworks as { name, creator }}
        <div>
            <span class="creator">{creator}</span> created <span class="framework">{name}</span>
        </div>
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .framework {
        color: red;
    }

    .creator {
        color: blue;
    }

    div {
        color: purple;
    }

    button {
        color: blue;
        margin: 3px;
    }
</style>
