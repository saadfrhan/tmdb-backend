import mongoose, { Schema, Document } from "mongoose";

interface IPreferences extends Document {
  user_id: string;
  genres?: string[];
  rating?: number;
}

// genres schema
const GenreSchema: Schema = new Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true },
});

const PreferencesSchema: Schema = new Schema({
  user_id: { type: String, required: true },
  genres: [
    {
      type: {
        name: { type: String, required: true },
        id: { type: Number, required: true },
      },
    },
  ],
  rating: { type: Number },
});

const Preferences = mongoose.model<IPreferences>(
  "Preferences",
  PreferencesSchema
);

export default Preferences;
