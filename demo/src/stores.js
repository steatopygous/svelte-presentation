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
