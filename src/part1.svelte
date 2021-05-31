<script>
    const src = "https://i.ytimg.com/vi/mfJC34tOZms/maxresdefault.jpg"
    const hello = "Hello Lucas"
    let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<style>
    
</style>

<main>
    <p>{hello}</p>
    <img {src} alt="">
    <p>{@html string}</p>
</main>