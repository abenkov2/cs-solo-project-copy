import mongoose from 'mongoose';

const MONGO_URI =
  'mongodb+srv://cwmiles18:b0eDU7Wr9jrzwNjV@cluster0.8jguozp.mongodb.net/?retryWrites=true&w=majority';

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error('Error connecting to database:', err);
    throw err;
  }
};

export default connectToDB;
