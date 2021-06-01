<script>
    let html = "<p>Write here boi</p>"


    let todos = [
		{ done: false, text: 'finish Svelte tutorial' },
		{ done: false, text: 'build an app' },
		{ done: false, text: 'world domination' }
	];

    function addtodo(){
        todos = todos.concat({done: false, text: ""})
    }

    function cleartodos(){
        todos = todos.filter(t => !t.done)
    }

    $: remaining = todos.filter(t => !t.done).length
</script>

<style>
    .done{
        opacity: 0.4;
    }
</style>

<main>

    <div bind:innerHTML={html} contenteditable="true"></div>
    <pre>{html}</pre>



    <h1>Todos</h1>

    {#each todos as todo}
        <div class:done={todo.done}>
            <input type="checkbox" bind:checked={todo.done}>

            <input type="text" placeholder="what needs to be done?" bind:value={todo.text}>
        </div>
    {/each}

    <p>Remaining {remaining}</p>

    <button on:click={addtodo}>Add new</button>
    <button on:click={cleartodos}>Clear completed</button>

</main>