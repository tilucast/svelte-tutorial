<script>
import Box from "./Box.svelte";
import ContactCard from "./ContactCard.svelte";


</script>

<!-- <Box>
    <p>Hello</p>
    <p>I can put anything inside.</p>
</Box>

<Box /> -->

<ContactCard>
    <p slot="name">
        Paul Bonzalez
    </p>

    <p slot="address">
        42 wallaby way <br>
        Sydney
    </p>
</ContactCard>