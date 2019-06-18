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

