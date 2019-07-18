<script>
    import SlotButton from './components/SlotButton.svelte';

    const frameworks = [
        { name: 'Angular', colour: 'red'    },
        { name: 'React',   colour: 'green'  },
        { name: 'Svelte',  colour: 'yellow' },
        { name: 'Vue',     colour: 'orange' }
    ];
</script>

<style>
    .red    { color: red;        }
    .green  { color: lightgreen; }
    .yellow { color: yellow;     }
    .orange { color: orange;     }
</style>

{#each frameworks as { name, colour }}
    <SlotButton on:slotClicked={() => alert(`Don't click that button again!`)}>
        <span class={colour}>{name}</span>
    </SlotButton>
{/each}
