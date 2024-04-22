import mongoose, { Schema, Document } from "mongoose";

interface IPreferences extends Document {
  user_id: string;
  genres?: string[];
  rating?: number;
}

const PreferencesSchema: Schema = new Schema({
  user_id: { type: String, required: true },
  genres: [{ type: String }],
  rating: { type: Number },
});

const Preferences = mongoose.model<IPreferences>(
  "Preferences",
  PreferencesSchema
);

export default Preferences;
