<script>
    let yes = false


    let scoops = 1;
    let flavours = []
    let menu = [
        'Cookies and cream',
        'mint choc chip',
        'raspberry ripple'
    ]

    function joinflavours(flavours){
        console.log(flavours);
        if(flavours.length === 1) return flavours[0]

        return `${flavours.slice(0,-1).join(', ')} and ${flavours[flavours.length - 1]}`
    }
</script>

<main>
    <!-- <label for="">
        <input type="checkbox" bind:checked={yes}>
        Yes! Send me emails
    </label>

    {#if yes}
        <p>Thank you. We will spam your email inbox.</p>
    {:else}
        <p>You MUST opt in to continue.</p>    
    {/if}

    <button on:click={e => alert("Boi")} disabled={!yes}>Subscribe to spam</button> -->

    <h2>Size</h2>

    <label>
        <input type="radio" bind:group={scoops} value={1}>
        One scoop
    </label>

    <label>
        <input type="radio" bind:group={scoops} value={2}>
        Two scoops
    </label>

    <label>
        <input type="radio" bind:group={scoops} value={3}>
        Three scoops
    </label>

    <h2>Flavours</h2>

    <!-- {#each menu as flavour}
        <label>
            <input type="checkbox" bind:group={flavours} value={flavour}>
            {flavour}
        </label>
    {/each} -->

    <select multiple bind:value={flavours}>
        {#each menu as flavour}
        <option value={flavour}>
            {flavour}
        </option>
        {/each}
    </select>

    {#if flavours.length === 0}
        <p>Please select at least one flavour</p>
    {:else if flavours.length > scoops}
        <p>Can't order more flavours than scoops!</p>
    {:else}
        <p>
            You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
            of {joinflavours(flavours)}
        </p>
    {/if}

</main>