const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3000;
const urlMongoDb = "mongodb+srv://admin:admin123456@johnnydb.gqzhj8i.mongodb.net/mydb"

mongoose.connect(
  urlMongoDb,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true    
  },)
  .then (() => console.log('Connected Successfully'))
  .catch((err) => {console.error(err);
  });
  app.listen(port, () => {
  console.log(
  `Servidor API REST funcionando en http://localhost:${port}`
  );
  });




