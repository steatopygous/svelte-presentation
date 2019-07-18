<script>
    import { Router, Link, Route } from "svelte-routing";
    import Frameworks from './components/Frameworks.svelte';
    import Angular from './components/Angular.svelte';
    import React from './components/React.svelte';
    import Svelte from './components/Svelte.svelte';

    export let url = "";

	export let name;
</script>

<Router url="{url}">
  <nav>
    <Link to="/">Frameworks</Link>
    <Link to="angular">Angular</Link>
    <Link to="react">React</Link>
    <Link to="svelte">Svelte</Link>
  </nav>

  <div>
    <Route path="angular" component={Angular} />
    <Route path="react" component={React} />
    <Route path="svelte" component={Svelte} />
    <Route path="/"><Frameworks /></Route>
  </div>
</Router>
