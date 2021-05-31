<script>
    let count = 0;
    const handleClick = () => {
        count += 1
    }
    let doubled = 0
    $: {
        doubled = count * 2
        console.log(`count is now ${count}`)
    }

    let nums = [1,4,2,3,4,9]

    function push(){
        nums.push(nums.length + 1)
        nums = nums
        //nums = [...nums, nums.length + 1]

        // reactivity on svelte is triggered by assignments, hence why we need to either make redundant assignments, or use idiomatic solutions, like the one showed above.
    }

    $: sum = nums.reduce((accumulator, current) => accumulator + current, 0)

</script>

<main>
    <button on:click={handleClick}>
        Clicked {count} {count == 1 ? 'time' : 'times'}
    </button>
    <p>{count} doubled is {doubled}</p>


    <p>{nums.join(' + ')} = {sum}</p>

    <button on:click={push}>
        Add a number
    </button>
</main>