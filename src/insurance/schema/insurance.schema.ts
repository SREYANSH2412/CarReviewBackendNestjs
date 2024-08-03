import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Mongoose } from 'mongoose';

export type InsuranceDocument = HydratedDocument<Insurance>;

@Schema()
export class Insurance {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  })
  carID: mongoose.Types.ObjectId;

  @Prop({
    type: String,
    required: true,
  })
  provider: string;

  @Prop({
    type: String,
    required: true,
  })
  policy_no: string;

  @Prop({
    type: String,
    required: true,
  })
  coveragedetails: string;

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
    type: Date,
    required: true,
  })
  expiration_date: Date;
}
export const InsuranceSchema = SchemaFactory.createForClass(Insurance);
