<script>
import { createEventDispatcher } from "svelte";

    export let value = ""
    const dispatch = createEventDispatcher()

    const select = num => () => value += num
    // we are passing the arguments through an anonymous function here because it avoids explicitly having to make every definition of select down on the buttons an arrow function that calls select. Obs: if we are passing a argument to a function, we need to call it through and arrow function, otherwise, we will be calling the function with the given arguments the moment the compoment mounts and the piece of code that has the functions actually runs.
    const clear = () => value = ''
    const submit = () => dispatch('submit')
</script>

<div class="keypad">
    <button on:click={select(1)}>1</button>
	<button on:click={select(2)}>2</button>
	<button on:click={select(3)}>3</button>
	<button on:click={select(4)}>4</button>
	<button on:click={select(5)}>5</button>
	<button on:click={select(6)}>6</button>
	<button on:click={select(7)}>7</button>
	<button on:click={select(8)}>8</button>
	<button on:click={select(9)}>9</button>

    <button disabled={!value} on:click={clear}>clear</button>
    <button on:click={select(0)}>0</button>
    <button disabled={!value} on:click={submit}>submit</button>
</div>

<style>
	.keypad {
		display: grid;
		grid-template-columns: repeat(3, 5em);
		grid-template-rows: repeat(4, 3em);
		grid-gap: 0.5em
	}

	button {
		margin: 0
	}
</style>