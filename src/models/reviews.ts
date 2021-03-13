import mongoose, { Schema, Document } from 'mongoose';

export interface IReview extends Document {
  user: string,
  rate: number,
  sightId: string,
  review: string
}

export const ReviewsSchema: Schema = new Schema({
  user: { type: String, required: true },
  rate: { type: Number, required: true },
  sightId: { type: String, required: true },
  review: { type: String, required: false }
})

export const Reviews = mongoose.model<IReview>('Reviews', ReviewsSchema)
