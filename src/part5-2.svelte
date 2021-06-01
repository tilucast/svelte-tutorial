<script>
    import Part5 from "./part5.svelte";

    function fowardedevent(){
        alert("fowarded.")
    }

</script>

<Part5 on:message on:click={fowardedevent} />