<script>
    import {tweened} from 'svelte/motion'
    import {cubicOut} from 'svelte/easing'

    const progress = tweened(0, {
        duration: 600,
        easing: cubicOut
    })
</script>

<progress value={$progress}></progress>

<button on:click={() => progress.set(0)}>0%</button>
<button on:click={() => progress.set(0.25)}>25%</button>
<button on:click={() => progress.set(0.50)}>50%</button>
<button on:click={() => progress.set(0.75)}>75%</button>
<button on:click={() => progress.set(1)}>100%</button>

<style>
    progress{
        display: block;
        width: 100%;
    }
</style>