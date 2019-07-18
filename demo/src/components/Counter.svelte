<script>
    import { count, doubled } from '../stores';
</script>

<span class="counter">{$count}</span>
<span class="doubled">{$doubled}</span>

<style>
    span {
        padding: 5px;
    }

    .counter {
        color: red;
    }

    .doubled {
        color: blue;
    }

    * {
        font-size: 48px;
    }
</style>
