#Interpolating Children

We can use the **<slot>**  tag to include arbitrary content within a component.  This is similar to **children** in React.

This component creates a button whose inner HTML is whatever child content is supplied. It dispatches a **slotClicked** event when clicked:

```html
<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch('slotClicked')}>
    <slot />
</button>

<style>
    button {
        width: 80px;
        background-color: blue;
        margin: 2px;
    }
</style>
```

Here's a somewhat contrived example usage, where the content of each button is a <span> containing text of some colour

```html
<script>
    import SlotButton from './components/SlotButton.svelte';

    const frameworks = [
        { name: 'Angular', colour: 'red'    },
        { name: 'React',   colour: 'green'  },
        { name: 'Svelte',  colour: 'yellow' },
        { name: 'Vue',     colour: 'orange' }
    ];
</script>

{#each frameworks as { name, colour }}
    <SlotButton on:slotClicked={() => alert(`Don't click that button again!`)}>
        <span class={colour}>{name}</span>
    </SlotButton>
{/each}

<style>
    .red   { color: red;        }
    .green { color: lightgreen; }
    .yellow { color: yellow;    }
    .orange { color: orange;    }
</style>
```

