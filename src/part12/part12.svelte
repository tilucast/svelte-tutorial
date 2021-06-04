<script>
    let current = 'foo'
    let big = false
</script>

<button 
    class:selected={current === 'foo'} 
    on:click={() => current = 'foo'}
>
    foo
</button>

<button 
    class:selected={current === 'bar'} 
    on:click={() => current = 'bar'}
>
    bar
</button>

<button 
    class:selected={current === 'baz'} 
    on:click={() => current = 'baz'}
>
    baz
</button>

<label>
    <input type="checkbox" bind:checked={big}>
    big
</label>

<div class:big>
    some {big ? 'big' : 'small'} text
</div>

<style>
	button {
		display: block;
	}

	.selected {
		background-color: #ff3e00;
		color: white;
	}

    .big {
		font-size: 4em;
	}
</style>