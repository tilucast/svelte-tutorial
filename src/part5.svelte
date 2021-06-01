<script lang="typescript">
    import { createEventDispatcher } from "svelte";

    let x = {x: 0, y: 0}

    // function mousePosition(event: MouseEvent){
    //     x.x = event.clientX;
    //     x.y = event.clientY;
    // }

    const dispatch = createEventDispatcher()

    function say(){
        dispatch('message', {text: 'Hi, hello there.'})
    }

</script>

<style>
    main{
        width: 100%;
        height: 100%;
    }
</style>

<main on:mousemove={e => x = {x: e.clientX, y: e.clientY}}>
    <h1>x = {x.x}, y = {x.y}</h1>

    <button on:click|once={e => alert("clicked")}>Alert me only once please.</button>

    <button on:click={say}>Event dispatcher</button>

    <button on:click>Click me to foward event.</button>
</main>