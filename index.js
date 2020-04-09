const oracledb = require('oracledb');
const dbConfig = require('./dbconfig.js');

const run = async () => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    console.log('Connection was successful!');
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
};

run();
