<script>
    const setText = () => {
        if (document.getElementById("otsikko").innerHTML == "") {
            document.getElementById("otsikko").innerHTML = "Hei";
        } else {
            document.getElementById("otsikko").innerHTML = "";
        }
    }
</script>

<h1 id="otsikko">Hei tehtävät</h1>

<button on:click={setText}>Aseta teksti</button>