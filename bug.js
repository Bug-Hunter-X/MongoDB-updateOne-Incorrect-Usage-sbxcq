```javascript
const MongoClient = require('mongodb').MongoClient;

async function updateDocument() {
  const uri = "mongodb+srv://<username>:<password>@<cluster-address>/<database>?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    // Incorrect update operation. The $set operator should be used to update specific fields.
    const result = await collection.updateOne({ name: "John Doe" }, { age: 30 });
    console.log(result);
  } finally {
    await client.close();
  }
}

updateDocument();
```