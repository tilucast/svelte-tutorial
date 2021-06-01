<script>
    let name = "world"
    let a = 1;
    let b = 2;
</script>

<main>
    <h1>Part 6 - 1</h1>

    <input type="text" bind:value={name}>

    <p>Hello {name}</p>

    <label for="">
        <input type="number" bind:value={a} min=0 max=10>
        <input type="number" bind:value={b} min=0 max=10>
    </label>

    <label for="">
        <input type="range" bind:value={a} min=0 max=10>
        <input type="range" bind:value={b} min=0 max=10>
    </label>

    <p>{a} + {b} = {a + b}</p>
</main>