import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Mongoose } from 'mongoose';

export type MaintenanceDocument = HydratedDocument<Maintenance>;

@Schema()
export class Maintenance {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  })
  carID: mongoose.Types.ObjectId;

  @Prop({
    type: Date,
    required: true,
  })
  service_date: Date;

  @Prop({
    type: String,
    required: true,
  })
  details: string;

  @Prop({
    type: Number,
    required: true,
  })
  cost: number;

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
export const MaintenanceSchema = SchemaFactory.createForClass(Maintenance);
