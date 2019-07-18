#Initialising A Svelte App

###Clone An Empty Svelte Repository

npx degit sveltejs/template demo

###Building The Application

The default Svelte template uses **rollup** for building, but there are variants for webpack and parcel.

Here's the **package.json** file.

```json
{
	"name": "svelte-app",
  "version": "1.0.0",
  "devDependencies": {
    "npm-run-all": "^4.1.5",
    "rollup": "^1.10.1",
    "rollup-plugin-commonjs": "^9.3.4",
    "rollup-plugin-livereload": "^1.0.0",
    "rollup-plugin-node-resolve": "^4.2.3",
    "rollup-plugin-svelte": "^5.0.3",
    "rollup-plugin-terser": "^4.0.4",
    "svelte": "^3.0.0"
  },
  "dependencies": {
    "sirv-cli": "^0.4.4"
  },
  "scripts": {
    "build": "rollup -c",
    "autobuild": "rollup -c -w",
    "dev": "run-p start:dev autobuild",
    "start": "sirv public --single",
    "start:dev": "sirv public --single --dev"
  }
}
```

Note, as mentioned, there is almost nothing in the dependencies section; most packages are in **devDependencies**.  The single **sirv-cli** item imports a static web server, similar to http-server, that provides browser access to the app during development.

###Running

All we need is an initial **npm i** to install the dependencies and then we can execute **npm run  dev** to watch the source code, rebuilding and live reloading as needed.

Pointing our browser to <http://localhost:5000> will display the app.

### Bootstrapping

The file **main.js** is our starting point.

```javascript
import App from './App.svelte';

const app = new App({
	target: document.body,

	props: {
		name: 'Svelte'
	}
});

export default app;
```

The **target** field specifies where in the HTML the <App> component will be mounted.  The default is to replace the entire <body>, but you can use **document.querySelector()** to mount at a specific location.

The **props** field provides the properties for the top-level tag. So, the code here will effectively insert <App name="Svelte"> into the body of our HTML.

### Components

Note that we're importing **App** from **App.svelte**; this is our first component.  The  contents of that file are:

```html
<script>
	export let name;
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>

```

Note that a Svelte component provides the entire definition of the component within a single file: HTML, CSS and JavaScript.  The sections can be in any order.

### Properties

Any variable that is defined using **export let** becomes a property, that can be set by the HTML that references the component.  In this case, the initialisation code in **main.js** passes a value of "**Svelte**" for the single property **name**.

### Styling

Svelte automatically adds a hash to CSS classes defined within in a component, so styles do not leak out; neither into HTML that references the component, nor to any other components.

### Templating

Svelte uses single braces... eg **{name}** ... to reference variable values, which could be properties passed in or other variables defined within the <script> tag.

