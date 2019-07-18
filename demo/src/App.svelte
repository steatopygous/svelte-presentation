<script>
   import NameInput from './components/NameInput.svelte';

   let who = '';

   $: greeting = `Hello, ${who}`;
</script>

<div>
    <NameInput bind:name={who} />

    {#if who.length > 0}
        <b>{greeting}</b>
    {/if}
</div>

<style>
    * {
        font-size: 48px;
    }
</style>
