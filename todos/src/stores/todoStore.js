import {writable} from "svelte/store";

const todos = writable([
    {
    description: "Hae kahvia Apista"
}
]);

export default todos;