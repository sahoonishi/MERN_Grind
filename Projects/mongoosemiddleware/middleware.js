import mongoose from "mongoose";

try {
  await mongoose.connect("MongoDBURI");
} catch (error) {
  console.log(error);
  process.exit();
}

// SCHEMA

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true, min: 18 },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
  },
  {
    timestamps: true, // if you write this line then there is no need to write createdAt and updatedAt field and the middleware function , it automatically do all things
  }
);

// MIDDLW WARE <<<<<<<<<<<IMPORTANT>>>>>>>>>>>>>>>> It should be before creating model
userSchema.pre(
  ["updateOne", "updateMany", "findOneAndUpdate"],
  function (next) {
    this.set({ updatedAt: Date.now() });
    next();
  }
);

// MODEL

export const Users = mongoose.model("Users", userSchema);

// INSERT DATA

await Users.create({ username: "Nishi", email: "Nishi@gmail.com", age: 22 });
await mongoose.connection.close();
