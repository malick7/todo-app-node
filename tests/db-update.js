const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url, (err, db) => {
    if(err) return console.log('Unable to connect to MongoDb ' + err); 
    console.log('Mongodb connected');

    db.collection('Todos').findOneAndUpdate(
        {
            _id: new ObjectID("5be007d6d323b906ef5bc1c3")
        },
        {
            $set: {
                completed: false
            }
        },
        {
            returnOriginal: false
        }
    
    ).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
      });
    
    db.close();
})

