import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<Car>;
@Schema()
export class Car {
  @Prop({
    type: String,
    required: true,
  })
  make: string;

  @Prop({
    type: String,
    required: true,
  })
  model: string;

  @Prop({
    type: String,
    required: true,
  })
  typeofcar: string;

  @Prop({
    type: Number,
    required: true,
  })
  year: number;

  @Prop({
    type: Float64Array,
    required: true,
  })
  price: Float64Array;

  @Prop({
    type: String,
    required: true,
  })
  specification: string;

  @Prop({
    type: String,
    required: true,
  })
  description: string;

  @Prop({
    type: [String],
    required: false,
  })
  images: string[];

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  })
  DealerID: mongoose.Types.ObjectId;

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

  @Prop({
    type: Boolean,
    required: true,
  })
  accidental: boolean;

  @Prop({
    type: Boolean,
    required: true,
    default: false,
  })
  sold: boolean;
}
export const CarSchema = SchemaFactory.createForClass(Car);
