import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  username: string
  password: string
  image: string
}

export const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
})

export const Users = mongoose.model<IUser>('Users', UserSchema)
