import { Schema, Document } from 'mongoose';

export const TypeSchema = new Schema({
  type: String,
});

export interface Type extends Document {
  type: string;
}
