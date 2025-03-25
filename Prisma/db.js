import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // ----------------------------------------CREATE--------------------------------------------
  //!---- SINGLE ----
  // const user = await prisma.user.create({
  //   data: {
  //     name: "RakeshSimp",
  //     email: "Bokachoda@gmail.com",
  //   },
  // });
  //!---- Multiple ----
  // await prisma.user.createMany({
  //   data: [
  //     { name: "DSA_king", email: "ghhh@gmail.com" },
  //     { name: "SystemDesign_King", email: "hi@gmail.com" },
  //   ],
  // });
  //-----------------------------------------------READ------------------------------------------
  //! ---- Fetch all users ----
  // const allUsers = await prisma.user.findMany();
  // console.log(allUsers);
  //! ---- Get by ID ----
  // const user = await prisma.user.findUnique({
  //   where:{id:8},
  // })
  // console.log(user);
  // ----------------------------------------------Update------------------------------------------
  //! ----update single user ----
  // const updatedUser = await prisma.user.update({
  //   where:{id:9},
  //   data:{name:"NishiKIng"},
  // })
  //! and for update multiple users ,use updateMany and in where clause we can pass anything not necesserily id , same goes for delete->deletemany->where :[{id:1},{id:7},{name:email}] (anything)
};
main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
