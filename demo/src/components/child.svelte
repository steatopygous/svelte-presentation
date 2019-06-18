<script>
    import { createEventDispatcher } from 'svelte';

    export let name;

    const dispatch = createEventDispatcher();

    function askQuestion() {
        dispatch('areWeThereYet', { name });
    }
</script>

{name} <button on:click={askQuestion}>Are we there yet?</button>
<br/>
