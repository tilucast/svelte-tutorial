<script lang="ts">
import Map from "./Map.svelte";
import MapMarker from "./MapMarker.svelte";


</script>

<Map 
    lat={35} long={-84} zoom={3.5}
>
    <MapMarker 
        lat={37.8225} 
        long={-122.0024} 
        label="Svelte Penis Hair"
    />
    <MapMarker lat={33.8981} long={-118.4169} label="Svelte Barbershop & Essentials"/>
</Map>