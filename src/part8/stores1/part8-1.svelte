<script>
import { onDestroy } from "svelte";

import Decrementer from "./Decrementer.svelte";
import Incrementer from "./Incrementer.svelte";
import Resetter from "./Resetter.svelte";
import { count, elapsed, time, name, greetings } from "./stores";

    const formatter = new Intl.DateTimeFormat('en', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
    })

    onDestroy($count)
</script>

<h1>The time is {formatter.format(($time))}</h1>

<p>This page has been opened for <strong>{$elapsed}</strong> {$elapsed === 1 ? 'second' : 'seconds'}</p>

<h1>The count is {$count}</h1>

<Incrementer/>
<Decrementer />
<Resetter />

<h1>{$greetings}</h1>

<input type="text" bind:value={$name}>

<button on:click={() => $name += '!'}>Add an exclamation mark tho.</button>