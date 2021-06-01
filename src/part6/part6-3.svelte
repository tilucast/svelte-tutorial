<script>
    //import marked from 'marked'

    let value = `some words are *italic* some are **bold**`


    let questions = [
		{ id: 1, text: `Where did you go to school?` },
		{ id: 2, text: `What is your mother's name?` },
		{ id: 3, text: `What is another personal fact that an attacker could easily find with Google?` }
	];

    let selected 
    let answer = ""

    function handleSubmit(){
        alert(`answered question ${selected.id} (${selected.text} with "${answer}")`)
    }
</script>

<style>
    textarea { width: 100%; height: 200px; }
</style>

<main>
    <!-- <textarea bind:value></textarea>

    {@html value} -->

    <h2>Insecurity questions</h2>

    <form on:submit|preventDefault={handleSubmit}>
        <select bind:value={selected} on:blur={() => answer = ""}>
            {#each questions as question}
                <option value={question}>
                    {question.text}
                </option>
            {/each}
        </select>

        <input type="text" bind:value={answer}>

        <button type="submit" disabled={!answer}>Submit</button>
    </form>

    <p>selected question {selected ? selected.id : 'waiting ...'}</p>
</main>