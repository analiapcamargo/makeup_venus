import mongoose from "mongoose";

const dbURL = "mongodb+srv://Venus:123@cluster0.urtqsuk.mongodb.net/";

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Connected to the DB");
  })
  .catch((e) => {
    console.log("error: ", e);
  });

const logInSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: Number, required: true },
});

const LogInCollection = new mongoose.model("LogInCollection", logInSchema);

export const checkUser = async (email, password) => {
  try {
    const user = await LogInCollection.findOne({ email: email });
    console.log(user)
    if(user){
      if (user.password === password) {
        console.log(user.email + " " + user.password);
      } else {
        console.log("incorrect password");
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (name, sname, email, password) => {
  const data = {
    name: name,
    sname: sname,
    email: email,
    password: password,
  };

  const userExists = await LogInCollection.findOne({ email: email });
  if (userExists) {
    console.log("email already in use");
    console.log(userExists.email)
  } else {
    LogInCollection.insertMany([data]);
  }
};
