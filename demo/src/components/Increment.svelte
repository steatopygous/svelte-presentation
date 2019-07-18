<script>
    import { count } from '../stores';
</script>

<button on:click={count.increment}> + </button>

<style>
    * {
        font-size: 48px;
    }
</style>
