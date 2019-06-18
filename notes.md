#Conditional Code & Loops

The Svelte approach to generate dynamic HTML is similar to Angular, in that it uses special syntax, rather than JavaScript code.  However, rather than adding pseudo properties to the HTML, it uses a separate syntax that (I believe) separates things more cleanly.

### Conditional Code

To have HTML rendered based on data, we use code like the following:

```javascript
<script>
  let framework = 'Svelte';
</script>

{#if framework === 'Elm'}
  <div>Perfection!</div>
{:else if framework === 'Svelte'}
  <div>Looks like you are on your way to Nirvana.</div>
{:else}
  <div>Looks like you enjoy working hard :-)</div>
{/if}
```

