import mysql from "mysql2/promise";

//----------------------------------- connect to mysql server


const mysql_db_new = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nishi@1234",
  database: "heello",
});
console.log("Connected");

//----------------------------------- CREATE DATABASE


//await mysql_db_new.execute("create database heello");

// console.log(await mysql_db_new.execute("show databases"));

// -------------------------------------CREATE TABLE


// await mysql_db_new.execute(`CREATE TABLE user(
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   username VARCHAR(100) NOT NULL,
//   email VARCHAR(100) NOT NULL UNIQUE

//   );`);

// ---------------------------------------------CRUD


//!------------------------------ INSERT (using inline values) Not recommended


// await mysql_db_new.execute(`
//   insert into user(username,email) values('Nishi','tinu')
//   `)
//* ---------------------------- Prepared statements(single) (recommended)
// await mysql_db_new.execute(`insert into user(username,email) values(?,?)`,

//   ["Nishi","hello",]
// );
//*---------------------------------------- Prepared statements (multiple)

// const values = [
//   ["ro","ro1"],
//   ["pn","pn1"],
// ];
// await mysql_db_new.query("insert into user(username,email) values ?",[values]); // here instead of execute we will write query

//* ----------------------------------------  READ


const [rows] = await mysql_db_new.execute("select * from user");
//? here the right side return two things [rows,fields]; thats why we destructure only rows here , fields is the metadata like  
// [  id INT AUTO_INCREMENT PRIMARY KEY,
//    username VARCHAR(100) NOT NULL,
//    email VARCHAR(100) NOT NULL UNIQUE
// ]
console.log(rows);


//! -------------------------------------------- UPDATE (Not recommended)
// every time you do something run the previous code i.e READ code to get values in console , thts why i left that read part code uncommented
// try {
//   await mysql_db_new.execute("update user set username='Bitch' where email='ro1'");
// } catch (error) {
//   console.log(error);
// }
// *-----------------------------------------UPDATE (Recommended)
// try {
//   await mysql_db_new.execute("update user set username=? where email=?",["Randi","ro1"])
// } catch (error) {
//   console.log(error);
// }

//!-----------------------------------------DELETE
// try {
//   await mysql_db_new.execute("DELETE FROM user where email='ro1'"); // or we can do email=? then , ["email"] , like above recommended update process
// } catch (error) {
//   console.log(error);
// }
