#Binding Data and Events

###Binding Data

Like in "*the good old days*" of **Angular 1.x**, Svelte supports two-way binding of HTML with variables.

For example, in our  <App> component, we could bind the value of an input field to the **name** property that was passed in and have the text change as we type new values.

```html
Name: <input bind:value={name} />
```

Note that this is local to the component, and would not change a variable in the parent component that's being used to set the property.  We'll discuss how to handle that case later.

### Binding Events

Any event emitted by an HTML element can be bound to a handler that is a normal JavaScript function (*a la*  vanilla **addEventListener()**).  Here's how we might add a button to clear the input field.

```javascript
<button on:click={clearName}>Clear</button>
```

Since the binding is two-way, the handler code would be as simple as

```javascript
function clearName(event) {
  name = '';
}
```

In this case, we're ignoring the event that is passed in the call, but other handlers can obviously use it.  For example, in an **onChange** event handler might retrieve the content of an <input> or <textarea> using **e.target.value**.

