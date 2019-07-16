<script>
    import { createEventDispatcher } from 'svelte';

    export let name;

    const dispatch = createEventDispatcher();

    function askQuestion() {
        dispatch('areWeThereYet', { name });
    }
</script>

<button on:click={askQuestion}>{name}: Are we there yet?</button>
