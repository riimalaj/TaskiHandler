<script>
  import token from "@/stores/tokenStore.js";
  const setToken = () => {
    const t = document.getElementById("token").value;
    $token = t;
    localStorage.setItem("user-token", t);
  }
</script>

<h2>Token: {$token}</h2>

<input type="text" id="token" />
<button on:click={setToken}>Set token</button>