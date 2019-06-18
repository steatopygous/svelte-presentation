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
  
  function askQuestion(event) {
    dispatch('areWeThereYet');
  }
</script>

<button on:click={askQuestion}>Are we there yet?<button>

```

The **dispatch()** call generates a custom event, in this case **areWeThereYet** and passes it to the parent, which can receive it as follows:

```html
<script>
  let answer = '';
  
  function areWeThereYet(event) {
    answer = 'No';
  }
</script>

<Child name="Mary" on:areWeThereYet={sayNo}></Child>

<div>
  {answer}
</div>
```

