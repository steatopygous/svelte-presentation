<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
</script>
<style>
    button {
        background-color: blue;
        margin: 2px;
    }
</style>

<button on:click={() => dispatch('slotClicked')}>
    <slot />
</button>
