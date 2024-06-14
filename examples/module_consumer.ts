import { patchQuery, init, runQuery } from './module.ts';

console.log(patchQuery);
console.log(init());
console.log(runQuery('SELECT * FROM USERS')); 