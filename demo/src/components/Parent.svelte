<script>
    import Child from './Child.svelte';

    let answer = '';

    function reply({ detail: { name } }) {
        answer = `We'll be there soon, ${name}.`;
    }
</script>

<Child name="Mary" on:areWeThereYet={reply} />
<Child name="Jim" on:areWeThereYet={reply} />

<div>{answer}</div>
