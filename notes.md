#Other Lifecycle Methods

The other provided lifecycle methods are:

- **onDestroy()**, called when a component is removed from the DOM
- **beforeUpdate()**, called immediately before each DOM update
- **afterUpdate()**, called immediately after each DOM update
- **tick()**, which allows code to be run at the start of the next cycle

You would use **onDestroy()** to clean up any resources that would otherwise cause a memory leak, or residual behaviour.  For example, if you create a recurring timer when your component mounts, you'd want to cancel it when unmounted, demonstrated here: https://svelte.dev/tutorial/ondestroy.

**beforeUpdate()** and **afterUpdate()** are useful for things like updating the scroll position when you programmatically add content to the page. See this example: https://svelte.dev/tutorial/update.

For an example of where **tick()** is useful, see the corresponding page in the Svelte tutorial: https://svelte.dev/tutorial/tick, where it's used to avoid the cursor jumping when programmatic updates are made to the content of a <textarea>.

