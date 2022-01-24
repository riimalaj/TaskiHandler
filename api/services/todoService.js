import { executeQuery } from "../database/database.js";

const findAll = async () => {
  const res = await executeQuery(`SELECT * FROM todos ORDER BY id`);

  return res.rows;
};

const create = async (description) => {
  const res = await executeQuery(
    `INSERT INTO todos (description) VALUES ($1)`,
    description
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
