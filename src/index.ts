import { Client } from 'pg'
//You are importing the Client class from the pg (node-postgres) library.
//This allows you to connect and interact with a PostgreSQL database.
 

// Async function to insert data into a table
async function insertData(username: string, email: string, password: string) {
 //You are creating a new instance of Client and passing a configuration object to it
  const client = new Client({
   connectionString:"postgresql://test_owner:U0FP1OaMDSrg@ep-weathered-salad-a57r8uxw.us-east-2.aws.neon.tech/test?sslmode=require"
   //All he credential of username passsword 
   //orv you can gave individual username passsword
  });

  try {
    await client.connect(); // The client.connect() method is used to establish a connection to the PostgreSQL server.
  
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)"; // this is whole sql query $1, $2, and $3 are placeholders for the actual values that will be passed when executing the query.
    //defining an SQL INSERT query to add a new row to the users table
    const values = [username , email, password];//The values array contains the actual values for the username, email, and password fields. These values are passed to replace the placeholders in the query.
    const res = await client.query(insertQuery, values);
    //This line executes the SQL query using client.query(). It takes the query string (insertQuery) and the array of values (values), which are injected into the query's placeholders.
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection

  }
}

// Example usage
insertData('username5', 'user5@example.com', 'user_password').catch(console.error);