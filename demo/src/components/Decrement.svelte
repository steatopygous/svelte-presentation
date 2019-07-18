<script>
    import { count } from '../stores';
</script>

<button on:click={count.decrement}> - </button>

<style>
    * {
        font-size: 48px;
    }
</style>
