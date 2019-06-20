#Parent-Child Property Bindings

Just as we can bind to properties of built-in HTML elements like **<input>**, we can do the same for custom components.

In the following code, we are binding the property **who** of <App> to the property **name** of the child component.

```html
<script>
   import NameInput from './components/name-input.svelte'

   let who = 'Svelte';

   $: greeting = `Hello, ${who}!`;
</script>

<NameInput bind:name={who} />
<br/>
<b>{greeting}</b>
```

So, the initial value the child receives for **name** is the value in **who** and, as the child updates its **name** property, **who** will be updated and cause the parent HTML to re-render appropriately.

```html
<script>
    export let name = '';
</script>

<div>
    Name: <input bind:value={name} />
</div>

```

