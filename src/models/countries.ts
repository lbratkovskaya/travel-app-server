import mongoose, { Schema, Document } from 'mongoose';

export interface ICountry extends Document {
  id: string;
  nameEN: string;
  nameRU: string;
  nameDE: string;
  capitalEN: string;
  capitalRU: string;
  capitalDE: string;
  capitalLatLng: [Number, Number];
  infoEN: string;
  infoRU: string;
  infoDE: string;
  currency: string;
  pictureURL: string;
  videoURL: string;
  capitalTimeZone: string;
}

export const CountrySchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  nameEN: { type: String, required: true, unique: true },
  nameRU: { type: String, required: true, unique: true },
  nameDE: { type: String, required: true, unique: true },
  capitalEN: { type: String, required: true, unique: true },
  capitalRU: { type: String, required: true, unique: true },
  capitalDE: { type: String, required: true, unique: true },
  capitalLatLng: { type: Array, required: true, unique: true },
  infoEN: { type: String, required: true },
  infoRU: { type: String, required: true },
  infoDE: { type: String, required: true },
  currency: { type: String, required: true },
  pictureURL: { type: String, required: true },
  videoURL: { type: String, required: true },
  capitalTimeZone: { type: String, required: true },
});

export const Countries = mongoose.model<ICountry>('Countries', CountrySchema);
