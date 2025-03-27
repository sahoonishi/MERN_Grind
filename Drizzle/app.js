import { eq } from "drizzle-orm";
import { db } from "./config/db.js";
import { usersTable } from "./src/db/schema.js";

const main = async () => {
  //! INSERT
  // const user = await db.insert(usersTable).values({
  //   name:"Nisi",
  //   age:"32",
  //   email:"Hi"
  // })
  // console.log(user);
  //!MULTIPLE
  // const users = await db.insert(usersTable).values([
  //   {name:"Tinu",age:22,email:"hhh"},
  //   {name:"kuna",age:12,email:"aahhh"},
  //   {name:"kunaa",age:12,email:"aahhhqq"},
  // ])
  // console.log(users);
  //!READ
  // const users = await db.select().from(usersTable).where({
  //   email:"aahhh"
  // });
  // console.log(users)
  //!UPDATE
  // const updatedUser = await db
  //   .update(usersTable)
  //   .set({ email: "hello123", age: 2 })
  //   .where(eq(usersTable.email, "hello"));
  // console.log(updatedUser);
  //!DELETE (use eq while updating and deleting (RECOMMENDED));
  await db.delete(usersTable).where(eq(usersTable.email,"hello123"));
};
main().catch((error) => console.log(error));
