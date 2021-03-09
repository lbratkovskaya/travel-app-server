import mongoose, { Schema, Document } from 'mongoose'

export interface ISight extends Document {
  countryID: string
  titleEN: string
  titleRU: string
  titleDE: string
  infoEN: string
  infoRU: string
  infoDE: string
}

export const SightSchema: Schema = new Schema({
  countryID: { type: String, required: true },
  titleEN: { type: String, required: true, unique: true },
  titleRU: { type: String, required: true, unique: true },
  titleDE: { type: String, required: true },
  infoEN: { type: String, required: true },
  infoRU: { type: String, required: true },
  infoDE: { type: String, required: true },
})

export const Sights = mongoose.model<ISight>('Sights', SightSchema);
