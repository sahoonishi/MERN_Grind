import mysql from "mysql2/promise";

// connect to mysql server
const mysql_db_new = await mysql.createConnection({
  host:'localhost',
  user:'root',
  password:"Nishi@1234",
  database:"heello",
});
console.log("Connected");
// CREATE TABLE
// console.log(await mysql_db_new.execute("show databases"));
// await mysql_db_new.execute(`CREATE TABLE user(
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   username VARCHAR(100) NOT NULL,
//   email VARCHAR(100) NOT NULL UNIQUE

//   );`);

// INSERT
// await mysql_db_new.execute(`
//   insert into user(username,email) values('Nishi','tinu')
//   `)