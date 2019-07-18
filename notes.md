#Dynamic Rendering

Svelte's approach to generating dynamic HTML is similar to Angular's; it uses some special syntax, as opposed to pure JavaScript code.

However, rather than adding pseudo properties to HTML tags, it separates the conditional code from the markup.

```javascript
<script>
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
        {:else if framework === 'Svelte'}
            You're obviously a lean, mean coding machine!
        {:else if framework === 'Vue'}
            For coders who can't spell.
        {/if}
    </div>
</div>
```

### Loops

Svelte provides an **{#each ... as ...}** construct for generating separate elements for each value in a collection. For example, let's clean up the set of buttons above a little:

```javascript
<script>
	  let frameworks = [
      { name: 'Angular', creator: 'Adam Abrons'  },
      { name: 'React',   creator: 'Jordan Walke' },
      { name: 'Vue',     creator: 'Evan You'     },
      { name: 'Svelte',  creator: 'Rich Harris'  }
    ];
</script>

{#each frameworks as f}
    <button on:click={() => framework = f.name}>{f.name}</button>
{/each}
```

Loop items can be destructured:

```javascript
{#each frameworks as { name, creator }}
   <div>{creator} created {name}</div>
{/each}
```

