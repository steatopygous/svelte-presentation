#Dynamic Styling

### Conditional CSS

There are two ways to add a CSS class dynamically.

The syntax **class:name={condition}** specifies that the given class should be included only if the condition evaluates to **true**.

 For example, in the following HTML, the **nice** class would be added whenever the value of **behaviour** is "Nice".  The **naughty** class would be added whenever behaviour *isn't* "Nice".

Note the shortcut when giving the CSS class the same name as the predicate.  We don't need to say **class:nice={nice}**, just **class:nice**.

```html
<script>
    let behaviour = '';

    $: behaviourText = behaviour.toLowerCase();
    $: nice = behaviour == 'Nice';
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
    {/if}
</div>

<br/>

<div>
    <button on:click={() => behaviour = 'Naughty'}>Naughty</button>
    <button on:click={() => behaviour = 'Nice'}>Nice</button>
</div>
```

You may have noticed the weird syntax "**$: behaviourText =…**".  This is normal JavaScript; "**toHere:** ..." labels a line of code.  While it's seldom necessary, one use case is where you have nested loops that you want to abort.  You can jump directly to that line using "**break toHere**" or "**continue toHere**".

The Svelte compiler coopts the specific label **$** to mean "*This variable is a derived value that should be recalculated if anything on the right hand side changes.*"

So, in the code above, when clicking one of the buttons updates the value of **behaviour**, the labeled assignment will be re-executed and any markup that references **behaviourText** will be re-rendered.  The value of **nice** will also be recalculated.

### Specifying A Class Name Dynamically

Given that the classes **naughty** and **nice** are mutually exclusive, it's a little messy to reference them both in the span.  Rather than adding them both conditionally, we can use define a variable that's set to the appropriate class name and use variable interpolation to add it:

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

