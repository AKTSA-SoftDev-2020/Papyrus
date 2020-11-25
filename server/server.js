
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pagesHosting:CQqolVPhpS2ZA5dl@cluster0.tqgec.mongodb.net/papyrus-general?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // c==3 hehe pp
});
