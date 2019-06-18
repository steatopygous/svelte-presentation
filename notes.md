#Dynamic Rendering

The Svelte approach to generating dynamic HTML is similar to Angular's, in that it uses special syntax, as opposed to JavaScript code.

However, rather than adding pseudo properties to the HTML, it uses a separate syntax that separates things a bit more cleanly.

### Conditional Code

To have HTML rendered based on data, we use code like the following:

```javascript
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
    <button on:click={() => framework='Svelte'}>Svelte</button>
    <button on:click={() => framework='React'}>React</button>
    <button on:click={() => framework='Elm'}>Elm</button>
</div>

 
```

### Loops

Svelte provides an **{#each}** construct for generating separate elements for each value in a collection. For example, let's clean up the set of buttons above a little:

```javascript
<script>
  const frameworks = ['Angular', 'React', 'Svelte', 'Elm'];
  let framework = '';
</script>

<div>
  {#each frameworks as f}
      <button on:click={() => framework = f}>{f}</button>
  {/each}
</div>

```

### Conditional CSS

The syntax **class:name=condition** allows us to add classes to an element dynamically.  For example, in the following HTML, the **nice** class would be added whenever the value of **behaviour** is "Nice".  The **naughty** class would be added whenever behaviour *isn't* "Nice".

Note the shortcut when giving the CSS class the same name as the predicate.  We don't need to say **class:nice={nice}**, just **class:nice**.

```html
<script>
    let behaviour = '';

    $: nice = behaviour == 'Nice';
</script>

<style>
    .naughty { color: red;   }
    .nice    { color: green; }
</style>

<div>
    {#if behaviour === ''}
        Have you been naughty or nice this year?
    {:else}
        You were <span class:naughty={!nice} class:nice>{behaviour.toLowerCase()}.</span>
    {/if}
</div>

<br/>

<div>
    <button on:click={() => behaviour = 'Naughty'}>Naughty</button>
    <button on:click={() => behaviour = 'Nice'}>Nice</button>
</div>
```

