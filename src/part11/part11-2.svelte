<script>
import { press } from "./press";


    let pressed = false
    let duration = 2000
</script>

<label>
    <input type="range" bind:value={duration} max=2000 step=100>
    {duration}ms
</label>

<button 
    use:press={duration}
    on:press={() => pressed = true}
    on:mouseenter={() => pressed = false}
>
Press and hold
</button>

{#if pressed}
    <p>congratulations. You pressed and held for {duration}ms</p>
{/if}