#Stores

Svelte has a mechanism for handling global state called **stores**.

A store holds a single piece of (potentially complex) data that can be referenced from any component.  It can also be accessed from non-Svelte JavaScript code.

A store can be writeable, or readonly.  The latter is intended for holding data that updates without user interaction, but that require changes to your views as the data updates; for example a clock.

###A Writeable Store

Here's a simple example of a writeable store; a counter that can be read and written from any component that references it. In the file **stores.js**, we would have the following

```javascript
import { writable } from 'svelte/store';

export const count = writable(0);
```

A component can access this counter by importing it

```javascript
<script>
  import { count } from './stores.js';
</script>

Count: {count}
```

A writeable store provides two methods: **update()**, which takes  a function that's similar to a Redux reducer, receiving the current state and returning an updated version. Any content that references the store will be re-rendered with the updated value.  For example

```javascript
import { count } from './stores.js';

function increment() {
  count.update(current => current + 1);
}
```

and **set()**, which takes a single parameter, the new value for the state.

```javascript
import { count } from './stores.js';

function reset() {
  count.set(0);
}
```

### Shorthand

However, Svelte also provides a more succinct way to work with a store. Prefixing its name with a dollar sign automatically calls update() whenever the value is modified.

```javascript
import { count } from './stores.js';

function increment() {
  $count += 1;
}
```

### Derived Stores

It is possible to create stores that are based on values from other stores:

```javascript
import { writable, derived } from 'svelte/store';

export const count   = writable(0);
export const doubled = derived(count, count => 2 * count);
```

If a derived store depends on more than one other store, we can provide an array for the first argument, and the update function will be passed the values in that order, when any of them changes.

