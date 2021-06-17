<script>
import BlueThing from "./BlueThing.svelte";
import GreenThing from "./GreenThing.svelte";

import RedThing from "./RedThing.svelte";



    const options = [
        {color: 'red', component: RedThing},
        {color: 'blue', component: BlueThing},
        {color: 'green', component: GreenThing}
    ]

    let selected = options[0]

</script>

<select bind:value={selected}>
    {#each options as option}
        <option value={option}>{option.color}</option>
    {/each}
</select>

<svelte:component this={selected.component} />