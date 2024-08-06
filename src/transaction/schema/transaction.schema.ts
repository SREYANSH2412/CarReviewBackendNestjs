import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Mongoose } from 'mongoose';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema()
export class Transaction {
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
  price: number;

  @Prop({
    type: String,
    required: true,
  })
  paymentmethod: string;

  @Prop({
    type: String,
    required: true,
    default: 'pending',
  })
  status: string;

  @Prop({
    type: Date,
    required: true,
    default: Date.now,
  })
  created_at: Date;
}
export const TransactionSchema = SchemaFactory.createForClass(Transaction);
