<script lang="ts">
	import Part1 from './part1.svelte'
	import Part2 from './part2.svelte';
	import Part3 from './part3.svelte';
	import Part4 from './part4.svelte';
import Part5_2 from './part5-2.svelte';
	import Part5 from './part5.svelte';

	function capturingeventdispatcher(event){
		alert(event.detail.text)
	}
</script>

<style>
	main{
        background-color: cadetblue;
		width: 100%;
		height: 100%;
    }

    p{
        font-weight: 600;
    }
</style>

<main>
	<h1>Main file svelte</h1>
	<p>I am here</p>

	<!-- <Part1 /> -->
	<!-- <Part2 /> -->
	<!-- <Part3 properties={part3obj}/> -->
	<!-- <Part4 /> -->
	<!-- <Part5 on:message={capturingeventdispatcher} /> -->
	<!-- <Part5_2 on:message={capturingeventdispatcher} /> -->
</main>