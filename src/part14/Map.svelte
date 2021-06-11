<script lang="ts">
import { onMount, setContext } from "svelte";
import { key, mapbox } from "./mapbox";

    setContext(key, {
        getMap: () => map
    })

    export let lat: number
    export let long: number
    export let zoom: number

    let container;
    let map;

    onMount(() => {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/mapbox-gl/dist/mapbox-gl.css'

        link.onload = () => {
            map = new mapbox.Map({
                container,
                style: 'mapbox://styles/mapbox/streets-v9',
                center: [long, lat],
                zoom
            })
        }

        document.head.appendChild(link)

        return () => {
            map.remove()
            link.parentNode.removeChild(link)
        }
    })
</script>

<div bind:this={container}>
    {#if map}
        <slot></slot>
    {/if}
</div>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>