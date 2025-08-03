import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  name: { type: String, required: true },
  Image: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  description: { type: String },
  off: { type: Number, required: false }, // add offer property
  specialOffer: {desc: String, validUntil: Date}, // add special offer property
});
