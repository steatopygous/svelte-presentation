<script>
    import Child from './child.svelte';

    let answer = '';

    function answerNo({ detail: { name } }) {
        answer = `No, we aren't, ${name}.`;
    }
</script>

<Child name="Fred" on:areWeThereYet={answerNo}></Child>
<Child name="Mary" on:areWeThereYet={answerNo}></Child>

<div>{answer}</div>
