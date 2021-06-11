<script lang="ts">
import { getContext } from "svelte";

import { key, mapbox } from "./mapbox";

    const {getMap} = getContext(key)
    const map = getMap()
    export let lat: number
    export let long: number
    export let label: string

    const popup = new mapbox.Popup({offset: 25})
        .setText(label)

    const marker = new mapbox.Marker()
        .setLngLat([long, lat])
        .setPopup(popup)
        .addTo(map)

</script>