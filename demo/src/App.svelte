<script>
    let framework  = 'React';

    $: src = `/Svelte.png`;
</script>

<style>
    .container {
        text-align: center;
        height: 90vh;
        width: auto;
    }

    .Svelte {
        /*width: 100%;*/
        height: 100%;
    }

    .React {
        width: 50%;
        height: 100%;
    }

</style>

<div class="container">
    <input type="radio" bind:group={framework} value="React"> Non-Svelte
    <input type="radio" bind:group={framework} value="Svelte"> Svelte

    <p/>

    <img {src} class={framework} alt="Steatopygous" />
</div>
