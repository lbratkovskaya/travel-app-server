import mongoose, { Schema, Document } from 'mongoose';

interface ISight extends Document {
  titleEN: string,
  titleRU: string,
  titleDE: string,
  infoEN: string,
  infoRU: string,
  infoDE: string,
  pictureURL: string,
  rate: number,
  countryId: string
}

export const SightSchema: Schema = new Schema({
  countryId: { type: String, required: true },
  titleEN: { type: String, required: true, unique: true },
  titleRU: { type: String, required: true, unique: true },
  titleDE: { type: String, required: true, unique: true },
  infoEN: { type: String, required: true },
  infoRU: { type: String, required: true },
  infoDE: { type: String, required: true },
  pictureURL: { type: String, required: true },
  rate: { type: Number, required: true },
})

export const Sights = mongoose.model<ISight>('Sights', SightSchema)
