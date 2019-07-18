#Dynamic Styling

### Conditional CSS

There are two ways to add a CSS class dynamically.

The syntax **class:name={condition}** specifies that the given class should be included only if the condition evaluates to **true**.

 For example, in the following HTML, the **nice** class would be added whenever the value of **behaviour** is "Nice".  The **naughty** class would be added whenever behaviour *isn't* "Nice".

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

### Shortcuts

Note the shortcut when the CSS class name is the same as the variable.  We don't need to say **class:nice={nice}**, simply **class:nice**.  Similar shorthand can be used for any property of a tag whose value is in a variable of the same name , eg **<Person {name} {age} />**.

You can also spread the contents of an object to provide a tag's properties, eg 

```html
<script>
  import Framework from './components/Framework.svelte';

  let svelte = {
    name: 'Svelte',
    version: 3,
    creator: 'Rich Harris'
  }
</script>

<Framework {...svelte} />
```

### Reactive Data

You may have noticed the  syntax "**$: behaviourText =…**".  This is normal JavaScript; something like "**toHere:** ..." is a label for a line of code.  While it's very seldom required, one use case is where you have nested loops that you want to abort.  You could jump directly to that line using "**break toHere**" or "**continue toHere**".

The Svelte compiler coopts the specific label **$** to mean "*This variable is a derived value that should be recalculated if anything on the right hand side changes.*"

So, in the code above, when clicking one of the buttons updates the value of **behaviour**, the two labeled assignments will be re-executed, causing **behaviourText** and **nice** to be recalculated.  Any markup that references them will be re-rendered.

Note that the order of the two statements isn't actually important.  All updates are performed in topological order, rather than order of appearance on the code. In other words, Svelte keeps track of the fact that **nice** depends on **behaviourText**, so the latter will be updated first.  

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

