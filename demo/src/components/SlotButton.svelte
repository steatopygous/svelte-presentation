<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
</script>
<style>
    button {
        background-color: blue;
        margin: 2px;
        width: 180px;
    }

    * {
        font-size: 48px;
    }
</style>

<button on:click={() => dispatch('slotClicked')}>
    <slot />
</button>
