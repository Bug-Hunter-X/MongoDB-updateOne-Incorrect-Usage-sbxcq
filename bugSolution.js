```javascript
const MongoClient = require('mongodb').MongoClient;

async function updateDocument() {
  const uri = "mongodb+srv://<username>:<password>@<cluster-address>/<database>?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    // Correct update operation using $set to update only the age field.
    const result = await collection.updateOne({ name: "John Doe" }, { $set: { age: 30 } });
    console.log(result);
  } finally {
    await client.close();
  }
}

updateDocument();
```