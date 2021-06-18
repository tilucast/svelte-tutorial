<script>
    let user = {
        firstName: 'Loucas',
        lastName: 'Peniano'
    }
</script>

<input type="text" bind:value={user.firstName}>
<input type="text" bind:value={user.lastName}>

{@debug user}

<h1>Hello {user.firstName}</h1>