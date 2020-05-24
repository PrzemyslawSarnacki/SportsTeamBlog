var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:', {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() =>  console.log('Mongodb connection successful'))
  .catch((err) => console.error(err));
