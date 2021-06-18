<script>
import AudioPlayer, { stopAll } from "./AudioPlayer.svelte";

</script>

<button on:click={stopAll}>Stop all audio</button>
<AudioPlayer 
    src="https://sveltejs.github.io/assets/music/strauss.mp3"
    title="The Blue Danube Waltz"
    composer="Johann Strauss"
    performer="European Archive"
/>

<AudioPlayer 
    src="https://sveltejs.github.io/assets/music/holst.mp3"
    title="Mars, the Bringer of War"
    composer="Gustav Holst"
    performer="USAF Heritage of America Band"
/>

<AudioPlayer 
    src="https://sveltejs.github.io/assets/music/satie.mp3"
    title="Gymnopédie no. 1"
    composer="Erik Satie"
    performer="Prodigal Procrastinator"
/>

<AudioPlayer 
    src="https://sveltejs.github.io/assets/music/beethoven.mp3"
    title="Symphony no. 5 in Cm, Op. 67 - I. Allegro con brio"
    composer="Ludwig van Beethoven"
    performer="European Archive"
/>

<AudioPlayer
	src="https://sveltejs.github.io/assets/music/mozart.mp3"
	title="Requiem in D minor, K. 626 - III. Sequence - Lacrymosa"
	composer="Wolfgang Amadeus Mozart"
	performer="Markus Staab"
/>