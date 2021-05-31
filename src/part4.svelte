<script>
    let user = {loggedIn: false}

    function toggle(){
        user.loggedIn = !user.loggedIn
    }

    let x =10

    let listofcats = [
        {id: 1, name:"Penis the cat"},
        {id: 2, name:"Julio the cat"},
        {id: 3, name:"Benis the cat"},
        {id: 4, name:"Denis the cat"},
    ]

    function splice(index){
        listofcats.splice(index, 1)
        listofcats = listofcats
    }

    async function api(){
        try{
            const x = await fetch('https://ghibliapi.herokuapp.com/films')
            const res = x.json()
            return res
        }catch(error){
            //console.error(error)
            throw new Error(error)
        }
    }
</script>

<main>
    <button on:click={toggle}>{user.loggedIn ? 'Log out' : 'log in'}</button>

    {#if user.loggedIn}
        User is logged in
    {:else}
        User is not logged in
    {/if}

    {#if x > 10}
        <p>{x} is greater than 10 </p>
    {:else if x > 5}
        <p>{x} is less than 5 </p>
    {:else}
        <p>{x} is something else boi</p>
    {/if}

    <ul>
        
        {#each listofcats as {id, name}, index (id)}
            <li on:click={() => splice(index)} >{name}</li>
        {/each}
        
    </ul>

    {#await api()}
        <p>... waiting</p>
    {:then something}
        <pre>{JSON.stringify(something[0], null, 4)}</pre>    
    {:catch error}
        {error}
    {/await}
</main>