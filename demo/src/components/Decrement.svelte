<script>
    import { count } from '../stores';
</script>

<button on:click={() => $count -= 1}> - </button>

<style>
    * {
        font-size: 48px;
    }
</style>
