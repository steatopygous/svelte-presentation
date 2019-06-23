#Stores

Svelte has a mechanism for handling global state called **stores**.

A store holds a single piece of (potentially complex) data that can be referenced from any component.  It can also be referenced from non-Svelte JavaScript code.

A store can be writeable, or readonly.  The latter is intended for holding data that updates without user interaction, but that require changes to your views as the data updates; for example a clock.

Here's a simple example of a writeable store; a counter that can be read and written from any component that references it. In the file **stores.js**, we would have the following

```javascript
import { writable } from 'svelte/store';

export const count = writable(0);
```

A component can access this counter by importing it

```javascript
import { count } from './stores.js';
```

A writeable store provides to functions: **update()**, which registers a function that acts like a Redux reducer, receiving the current state and returning an updated state. For example

```javascript
import { count } from './stores.js';

function increment() {
  count.update(current => current + 1);
}
```

