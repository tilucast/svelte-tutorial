<script>
	let w;
	let h;
	let size = 42;
	let text = 'edit me';
</script>

<main>
    <input type="range" bind:value={size}>
    <input type="text" bind:value={text}>

    <p>size: {w}px x {h}px</p>

    <div bind:clientHeight={h} bind:clientWidth={w}>
        <span style="font-size: {size}px">{text}</span>
    </div>
</main>

<style>
	input { display: block; }
	div { display: inline-block; }
	span { word-break: break-all; }
</style>