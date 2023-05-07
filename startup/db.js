const mongoose = require('mongoose');

module.exports = () => {
   // mongdb cloud connection is here
  mongoose
    .connect("mongodb+srv://jvitor:vitor88016157@cluster0.6df81mk.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("connected to mongodb cloud! :)");
    })
    .catch((err) => {
      console.log(err);
    }); 
};
