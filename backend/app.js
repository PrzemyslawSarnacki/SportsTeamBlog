var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mongodb:mongodb@cluster0-9aikq.mongodb.net/test?retryWrites=true&w=majority', {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() =>  console.log('Mongodb connection successful'))
  .catch((err) => console.error(err));
