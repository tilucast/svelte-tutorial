<script>
import Keypad from "./Keypad.svelte";

    let pin;
    $: view = pin ? pin.replace(/\d(?!$)/g, '.') : 'enter your pin'

    function handlesubmit(){
        alert(`submitted ${pin}`)
    }
</script>

<h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>

<Keypad bind:value={pin} on:submit={handlesubmit} />