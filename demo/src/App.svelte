<script>
   import NameInput from './components/name-input.svelte'

   let who = 'Svelte';

   $: greeting = `Hello, ${who}!`;
</script>

<div>
<NameInput bind:name={who} />
<b>{greeting}</b>
</div>
