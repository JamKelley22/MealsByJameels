import { connection } from "./config";
import { ErrorCode } from "./constants";
import { Error } from "./types";

export async function runQuery(sqlQuery: string, values?: any): Promise<any> {
  return new Promise((resolve, reject) => {
    connection.query(sqlQuery, values, (err, result, fields) => {
      if (err) {
        reject(
          new Error({
            error: true,
            mySQLError: err,
            message: err.message,
          })
        );
        return;
      }
      resolve(result);
    });
  });
}

export async function getAll<T>(
  tableName: string,
  dataType: new (data: any) => T
): Promise<T> {
  const sqlQuery = `SELECT * FROM ${tableName}`;

  let queryResults;
  try {
    queryResults = await runQuery(sqlQuery);
    const ret = await queryResults.map((result: any) => new dataType(result));
    return Promise.resolve(ret);
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function getById<T>(
  tableName: string,
  id: number,
  dataType: new (data: any) => T
): Promise<T> {
  const sqlQuery = `SELECT * FROM ${tableName} WHERE id = ${connection.escape(
    id
  )}`;

  let queryResults;
  try {
    queryResults = await runQuery(sqlQuery);

    if (queryResults.length === 0) {
      return Promise.reject(
        new Error({
          error: true,
          code: ErrorCode.NOT_FOUND,
          message: `No item with id ${connection.escape(id)} in ${tableName}`,
        })
      );
    }

    return Promise.resolve(new dataType(queryResults[0]));
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function create<T>(
  tableName: string,
  body: any, //Todo: update this (and update) to T
  dataType: new (data: any) => T
): Promise<T> {
  const bodyNoId: any = Object.keys(body)
    .filter((key) => key !== "id" && body[key])
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: body[key],
      };
    }, {});

  let sqlQuery = `INSERT INTO ${tableName} SET ?`;
  let queryResults;
  try {
    queryResults = await runQuery(sqlQuery, bodyNoId);

    sqlQuery = `SELECT * FROM ${tableName} WHERE id = ${connection.escape(
      queryResults.insertId
    )}`;
    queryResults = await runQuery(sqlQuery);
    if (queryResults.length === 0) {
      return Promise.reject(
        new Error({
          error: true,
          code: ErrorCode.NOT_FOUND,
          message: `Create Failed`,
        })
      );
    }
    return Promise.resolve(new dataType(queryResults[0]));
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function deleteAll<T>(
  tableName: string,
  dataType: new (data: any) => T
): Promise<T> {
  let sqlQuery = `SELECT * FROM ${tableName}`;

  let queryResults;
  try {
    queryResults = await runQuery(sqlQuery);

    const all = queryResults.map((result: any) => new dataType(result));

    sqlQuery = `DELETE FROM ${tableName}`;
    queryResults = await runQuery(sqlQuery);

    return Promise.resolve(all);
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function deleteById<T>(
  tableName: string,
  id: number,
  dataType: new (data: any) => T
): Promise<T> {
  let sqlQuery = `SELECT * FROM ${tableName} WHERE id = ${connection.escape(
    id
  )}`;

  let queryResults;
  try {
    queryResults = await runQuery(sqlQuery);

    if (queryResults.length === 0) {
      return Promise.reject(
        new Error({
          error: true,
          code: ErrorCode.NOT_FOUND,
          message: `No item with id ${connection.escape(id)} in ${tableName}`,
        })
      );
    }

    const match = new dataType(queryResults[0]);

    sqlQuery = `DELETE FROM ${tableName} WHERE id = ${connection.escape(id)}`;
    queryResults = await runQuery(sqlQuery);
    return Promise.resolve(match);
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function updateById<T>(
  tableName: string,
  id: number,
  body: any,
  dataType: new (data: any) => T
): Promise<T> {
  const cleanId = connection.escape(id);
  const bodyNoId: any = Object.keys(body)
    .filter((key) => key !== "id" && body[key])
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: body[key],
      };
    }, {});

  let sqlQuery = `UPDATE ${tableName} SET ? WHERE id = ${cleanId}`;

  let queryResults;
  try {
    queryResults = await runQuery(sqlQuery, bodyNoId);

    sqlQuery = `SELECT * FROM ${tableName} WHERE id = ${cleanId}`;
    queryResults = await runQuery(sqlQuery);

    if (queryResults.length === 0) {
      return Promise.reject(
        new Error({
          error: true,
          code: ErrorCode.NOT_FOUND,
          message: `Update Failed: No item with id ${cleanId} in ${tableName}`,
        })
      );
    }

    return Promise.resolve(new dataType(queryResults[0]));
  } catch (e) {
    return Promise.reject(e);
  }
}
