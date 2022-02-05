import { writable } from "svelte/store";

let value = localStorage.getItem("user-token");
if (!value) {
    value = 0;
}

const token = writable(value);

export default token;