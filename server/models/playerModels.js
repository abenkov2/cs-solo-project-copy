import mongoose from 'mongoose';

const MONGO_URI =
  'mongodb+srv://cwmiles18:b0eDU7Wr9jrzwNjV@cluster0.8jguozp.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'playerData',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));
