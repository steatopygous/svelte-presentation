#Custom Stores

The only requirement for an object to be a store is that it provides a **subscribe()** method.  So, we can create custom stores that encapsulate business logic, by defining a set of methods that form the interface hrough which the state is modified.

For example, we could model a counter that can only be incremented and decremented in multiples of five, using something like the following, where the writable and its update() method are hidden inside the scope of the **createCounter()** function.

```javascript
import { writable } from 'svelte/store';

export const count = createCount();

function createCount() {
    const { subscribe, update } = writable(0);

    return {
        subscribe,

        increment() { update(n => n + 5) },
        decrement() { update(n => n - 5) }
    };
}
```

The <Increment> and <Decrement> components from the previous example can be implemented as:

```javascript
<script>
    import { count } from '../stores';
</script>

<button on:click={count.increment}> + </button>
```

and

```javascript
<script>
    import { count } from '../stores';
</script>

<button on:click={count.decrement}> - </button>
```

Note that if we were to export **createCount()**, rather than a count instance, we could construct any number of counters.