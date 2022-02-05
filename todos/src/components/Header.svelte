<script>
    const haeMieteLause = async () => {
        const lause = await fetch("http://localhost:4000/haeLause");
        return lause.json();
    };

    const lause = haeMieteLause();
</script>

<button on:click={haeMieteLause}>Hae mietelause</button>

{#await lause then l}
    {l.quote}
{/await} 
