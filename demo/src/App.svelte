<script>
   import NameInput from './components/name-input.svelte'

   let who = '';

   $: greeting = `Hello, ${who}!`;
</script>

<div>

<NameInput bind:name={who} />

{#if who.length > 0}
<b>{greeting}</b>
{/if}

</div>
