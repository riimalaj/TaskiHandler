import * as todoService from "../../services/todoService.js";

const listTodos = async ({ token, request, response }) => {
  response.body = await todoService.findAll(token);
};

const addTodo = async ({ token, request, response }) => {
  const body = request.body({ type: "json" });
  const value = await body.value;
  const tehtava = value.tehtava;

  await todoService.create(tehtava, token);

  response.status = 200;
};

const finishTodo = async ({ params, response }) => {
  await todoService.update(params.id);

  console.log("Päivitetään " + params.id + ":n arvo");
  response.status = 200;
};

export { addTodo, finishTodo, listTodos };
