import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Mongoose } from 'mongoose';

export type TestdriveDocument = HydratedDocument<Testdrive>;

@Schema()
export class Testdrive {
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
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  })
  dealerID: mongoose.Types.ObjectId;

  @Prop({
    type: Date,
    required: true,
  })
  scheduled_date: Date;

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
export const TestdriveSchema = SchemaFactory.createForClass(Testdrive);
