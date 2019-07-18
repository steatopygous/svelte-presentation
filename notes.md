#Inter-Component Communication

###Parent to Child

A parent component controls the rendering of its children by providing values for their properties.  For example, if we had

```html
<div>
  <Greeter name="fred" />
</div>
```

then we would expect <Greeter> to have a property called **name**:

```html
<script>
  export let name;
</script>

<b>Hello {name}</b>
```

### Child to Parent

The simplest way for a child to communicate with its parent is to dispatch a message.  This is achieved using the **createEventDispatcher()** function provided by the svelte module.

```html
<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatcher = createEventDispatcher();

  function askQuestion() {
     dispatch('areWeThereYet', { name });
  }
</script>

<button on:click={askQuestion}>Are we there yet?<button>

```

The **dispatch()** call generates a custom event, in this case **areWeThereYet** and passes it to the parent, which can receive it as follows:

```html
<script>
  let answer = '';
  
  function reply({ detail: { name } }) {
    answer = `We'll be there soon, ${name}.`;
  }
</script>

<Child name="Mary" on:areWeThereYet={reply}></Child>
<Child name="Jim" on:areWeThereYet={reply}></Child>

<div>
  {answer}
</div>
```

### Events Don't Bubble

In Svelte, an event only passes to the immediate parent of the component that dispatches it. 

To have it go further, the parent component can include an **on:eventX** property, but without a handler.

So, for example, if the <Parent> component above didn't need to handle the **areWeThereYet** event itself, it could simply say

```html
<Child name="Mary" on:areWeThereYet></Child>
```

and that event would be passed to its parent.

If a parent component doesn't have an **on** property for a given event, tht event is simply discarded.

We will discuss how Svelte approaches non-local state shortly.

