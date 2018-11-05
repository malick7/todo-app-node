const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url, (err, db) => {
    if(err) return console.log('Unable to connect to MongoDb ' + err); 
    console.log('Mongodb connected');

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5be00981dc33850eef99a514")
      }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
      });
    
    db.close();
})

