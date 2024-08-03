import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Mongoose } from 'mongoose';

export type ReviewDocument = HydratedDocument<Review>;

@Schema()
export class Review {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  })
  userID: mongoose.Types.ObjectId;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  })
  carID: mongoose.Types.ObjectId;

  @Prop({
    type: Number,
    required: true,
  })
  rating: number;

  @Prop({
    type: String,
    required: true,
  })
  reviewtext: string;

  @Prop({
    type: Date,
    required: true,
    default: Date.now,
  })
  created_at: Date;

  @Prop({
    type: Date,
    required: true,
    default: Date.now,
  })
  updated_at: Date;
}
export const ReviewSchema = SchemaFactory.createForClass(Review);
