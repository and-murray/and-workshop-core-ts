const patchQuery = "INSERT into USERS ...";

const init = () => {
  return runQuery(patchQuery);
};

const runQuery = (query: string) => {
  return `Running query: ${query}`;
};

export { patchQuery, init, runQuery };
