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

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: { type: String, required: true },
  team: { type: String, required: true },
  position: { type: String, required: true },
  player_id: Number,
  team_id: Number,
  season_id: Number,
  appearances: Number,
  starting_lineup: Number,
  minutes_played: Number,
  goals: Number,
  shots_total: Number,
  shots_on_target: Number,
  total_crosses: Number,
  dribbles_attempted: Number,
  successful_dribbles: Number,
  big_chances_created: Number,
  total_duels: Number,
  duels_won: Number,
  tackles: Number,
  fouls: Number,
  blocked_shots: Number,
  interceptions: Number,
  clearances: Number,
  dribbled_past: Number,
  aerials_won: Number,
  total_passes: Number,
  accurate_passes: Number,
  key_passes: Number,
  long_balls_played: Number,
  long_balls_won: Number,
  fouls_drawn: Number,
  yellowcards: Number,
});

const Player = mongoose.model('player', playerSchema);

const teamSchema = new Schema({
  name: { type: String, required: true },
  team_id: Number,
  country_id: Number,
});

const Team = mongoose.model('team', teamSchema);

export { Player, Team };
