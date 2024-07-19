import { Schema, Document } from 'mongoose';

export const JokeSchema = new Schema({
  type: String,
  content: String,
  status: String,
});

export interface Joke extends Document {
  type: string;
  content: string;
  status: string;
}
