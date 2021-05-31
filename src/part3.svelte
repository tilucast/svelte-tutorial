<script lang="typescript">
    interface componentProps{
        name: string
        surname: string
        age: string | number
    }
    export let properties: componentProps = {
        name: "default name",
        surname: "default surname",
        age: 0
    }
</script>

<main>
    <p>
        the property passed in is 
        '{properties.name}'
        '{properties.surname}'
        '{properties.age}'
    </p>
</main>