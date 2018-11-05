// const {MongoClient, ObjectID} = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const test = require('assert');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err) return console.log('Unable to connect to MongoDb ' + err); 
    console.log('MongoDb connected!');

    /*db.collection('Todos').insertOne({
        text: 'Do that', completed: false
    }, (err, result) => {
        if(err) return console.log('Error inserting todo item', err);
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'Malick', age: 25, location: 'Bangalore'
    }, (err, result) => {
        if(err) return console.log('Error inserting user item', err);
        console.log(JSON.stringify(result.ops, undefined, 2));
    });*/

    /*db.collection('Users').insertOne({
        name: 'Aman S', age: 26, location: 'Bangalore', _id: 133
    }, (err, result) => {
        if(err) return console.log('Error inserting user item', err);
        // console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
        console.log(JSON.stringify(ObjectID(result.ops[0]._id).getTimestamp(), undefined, 2));
    });*/


  // Insert some docs
  var collection = db.collection('cursor_count_collection');
  collection.insertMany([{a:1}, {a:2},{a:3}, {a:4},{a:5}, {a:6},{a:7}, {a:8}], {w:1}, function(err, docs) {
        test.equal(null, err);

        // Do a find and get the cursor count
        collection.find().count(function(err, count) {
            test.equal(null, err);
            test.equal(3, count);
        });        
    });

    db.close();    
});