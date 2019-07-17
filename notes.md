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

There are two ways to add a CSS class dynamically.

The syntax **class:name={condition}** allows us to add classes based on a boolean value.  For example, in the following HTML, the **nice** class would be added whenever the value of **behaviour** is "Nice".  The **naughty** class would be added whenever behaviour *isn't* "Nice".

Note the shortcut when giving the CSS class the same name as the predicate.  We don't need to say **class:nice={nice}**, just **class:nice**.

```html
<script>
    let behaviour = '';

    $: behaviourText = behaviour.toLowerCase();
    $: nice = behaviour == 'Nice';
    $: behaviourClass = nice ? 'nice' : 'naughty';
</script>

<style>
    .nice    { color: green; }
    .naughty { color: red;   }
</style>

<div>
    {#if behaviour === ''}
        Have you been naughty or nice this year?
    {:else}
        You were <span class:nice class:naughty={!nice}>{behaviourText}.</span>
        Really <span class={behaviourClass}>{behaviourText}!</span>
    {/if}
</div>

<br/>

<div>
    <button on:click={() => behaviour = 'Naughty'}>Naughty</button>
    <button on:click={() => behaviour = 'Nice'}>Nice</button>
</div>
```

You may have noticed the weird syntax "**$: behaviourText =…**".  This is actually normal JavaScript; "**label:** ..." defines a label for a line of code; you could jump to that line using **break label;**" or "**continue label**;".  However, it's something that's rarely used.

So, the Svelte compiler coopts it to mean "*This variable is a derived value that should be recalculated if anything on the right hand side changes.*"

So, whenever we update the value of **behaviour**, this assignment will be re-executed and any markup that references **behaviourText** will be re-rendered.

Given that the classes **naughty** and **nice** are mutually exclusive, it's a little messy to reference them both in the span; it would be nicer if we could just decide which one is required. We can use variable interpolation to achieve this:

```html
<script>
    let behaviour = '';

    $: behaviourText = behaviour.toLowerCase();
    $: nice = behaviour == 'Nice';
    $: behaviourClass = nice ? 'nice' : 'naughty';
</script>

<div>
  You were <span class={behaviourClass}>{behaviourText}.</span>
</div>

```

