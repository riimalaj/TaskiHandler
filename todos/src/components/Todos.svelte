<script>
  // Cypress ajaa testit containerin sisällä -- täällä osoitteina containerien nimet
  // --> annetaan cypressiä varten oikea osoite
  let serverName = "localhost";
  if (window.location.host.includes("todos")) {
    serverName = "api";
  }

  const fetchTodos = async () => {
    const todos = await fetch(`http://${serverName}:4000/todos`);
    console.log(todos);
    return todos.json();
  }

  let todos = fetchTodos();

  const addTodo = async () => {
    const tehtava = document.getElementById("tehtava").value;
    alert("Hei kaikki: " + tehtava);

    const data = {
      tehtava: tehtava
    };

    await fetch(
      `http://${serverName}:4000/todos`,
      {
        method: "POST",
        body: JSON.stringify(data)
      }
    );

    todos = fetchTodos();
  }

  const setFinished = async (id) => {
    alert("Finish what? " + id);

    await fetch(
      `http://${serverName}:4000/todos/${id}/finish`,
      {
        method: "POST"
      }
    );

    todos = fetchTodos();
  }

  let name = "me";
</script>

<h1>Hello {name}!</h1>

<input type="text" id="tehtava" />

<button on:click={addTodo}>Lisää tehtävä</button>

<h2>Tehtävät kannasta</h2>

{#await todos then items}

<ul>
  {#each items as item}
  <li>
    {#if item.finished}
    <del>
      <p on:click={setFinished(item.id)}>
        {item.description}
      </p>
    </del>
    <button on:click={remove(item.id)}>
      poista
    </button>
    {/if}

    {#if !item.finished}
    <p on:click={setFinished(item.id)}>
      {item.description}
    </p>
    {/if}
  </li>
  {/each}
</ul>

{/await}


<h2>Tehtävät</h2>

<ul>
  <li>Muokkaa sovellusta siten, että sovelluksessa on erillinen otsakekomponentti "Header". Lisää otsakekomponentti osaksi App-komponenttia.</li>
  <li>Lisää tekstikenttä uuden tehtävän kuvauksen kirjoittamista varten.</li>
  <li>Lisää nappi tehtävän lähettämistä varten.</li>
  <li>Muokkaa sovellusta siten, että napin painaminen tulostaa kirjoitetun tekstin konsoliin.</li>
  <li>Muokkaa sovellusta siten, että napin painaminen lähettää tekstin palvelimelle (tässä <code>fetch</code>-funktio hyvä). Huom! Tarvitset tätä varten myös palvelinpään toiminnallisuutta.</li>
  <li>Muokkaa sovellusta siten, että palvelimelta haettavat tehtävät näytetään tällä sivulla. Vinkki: odota että tehtävät on haettu, käy ne sitten läpi yksi kerrallaan tulostaen.</li>
  <li>Lisää mahdollisuus tehtävän tehdyksi (tai tekemättömäksi) merkitsemiseen. Tarvitset tätä varten sekä selainpään että palvelinpään toiminnallisuuden.</li>
  <li>Lisää mahdollisuus tehtävän poistamiseen. Tarvitset tätä varten sekä selainpään että palvelinpään toiminnallisuuden.</li>
  <li>Kirjoita sovellukselle testejä.</li>
</ul>