<script>
import count from "@/stores/countStore.js";    
    const up = () => {
        $count++;
    }
</script>

<h3>Klikkailu: {$count}</h3>
<button on:click={up}>Lisaa</button>


