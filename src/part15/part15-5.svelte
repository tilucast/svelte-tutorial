<script>
    let hereKitty = false;

    const handleMouseenter = () => hereKitty = true;
    const handleMouseleave = () => hereKitty = false;
</script>

<svelte:body
    on:mouseenter={handleMouseenter}
    on:mouseleave={handleMouseleave}
/>

<img
	class:curious={hereKitty}
	alt="Kitten wants to know what's going on"
	src="https://lh3.googleusercontent.com/proxy/Wg_CbGT3gCUEtTcsTY7FIGI7hszvKT3mctDO9kwrBQx7fuoktrMvt-wsP-PBKXcH9qibCB7ZWV7ECn7biN2uJEj70jFm4JlYEhvFyNgzxT8QvhPF6HWVbzLmIB_sFR4hUUA"
>

<style>
	img {
		position: absolute;
		left: 0;
		bottom: -60px;
		transform: translate(-80%, 0) rotate(-30deg);
		transform-origin: 100% 100%;
		transition: transform 0.4s;
	}

	.curious {
		transform: translate(-15%, 0) rotate(0deg);
	}

	:global(body) {
		overflow: hidden;
	}
</style>