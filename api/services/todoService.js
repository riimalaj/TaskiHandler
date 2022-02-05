import { executeQuery } from "../database/database.js";

const findAll = async (token) => {
  const res = await executeQuery(`SELECT * FROM todos WHERE user_token = $1 ORDER BY id`, token);
  return res.rows;
};

const create = async (description, token) => {
  const res = await executeQuery(
    `INSERT INTO todos (description, user_token) VALUES ($1, $2)`,
    description,
    token
  );
  return res.rows;
};

const update = async (id) => {
  const res = await executeQuery(
    `UPDATE todos SET finished = NOT finished WHERE id = $1`,
    id
  );

  return res.rows;
};

const remove = async (id) => {
  const res = await executeQuery(`DELETE FROM todos WHERE id = $1`, id);

  return res.rows;
};

export { create, findAll, remove, update };
