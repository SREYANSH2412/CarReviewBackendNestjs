import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type DealerDocument = HydratedDocument<Dealer>;
@Schema()
export class Dealer {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
  })
  location: string;

  @Prop({
    type: Number,
    required: true,
    unique: true,
  })
  phone: number;

  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    type: String,
    required: false,
  })
  description: string;

  @Prop({
    type: String,
    required: false,
  })
  images: string;

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
    required: false,
    default: false,
  })
  is_deleted: boolean;

  @Prop({
    type: String,
    required: true,
  })
  password: string;
}
export const DealerSchema = SchemaFactory.createForClass(Dealer);
