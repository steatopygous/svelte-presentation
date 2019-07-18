<script>
    import SlotButton from './components/SlotButton.svelte';

    const frameworks = [
        { name: 'Angular', colour: 'red'    },
        { name: 'React',   colour: 'green'  },
        { name: 'Svelte',  colour: 'yellow' },
        { name: 'Vue',     colour: 'orange' }
    ];

    function clicked() {
        alert(`Please don't click that button again!`);
    }
</script>

<style>
    span {
        font-size: 24px;
    }

    .red { color: red; }
    .green { color: lightgreen; }
    .yellow { color: yellow; }
    .orange { color: orange; }
</style>

{#each frameworks as { name, colour }}
    <SlotButton on:slotClicked={clicked}>
        <span class={colour}>{name}</span>
    </SlotButton>
{/each}
