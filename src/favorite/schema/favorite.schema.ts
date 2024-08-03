import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Mongoose } from 'mongoose';

export type FavoriteDocument = HydratedDocument<Favorite>;

@Schema()
export class Favorite {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  })
  userID: mongoose.Types.ObjectId;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
  })
  carID: mongoose.Types.ObjectId[];

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
export const FavoriteSchema = SchemaFactory.createForClass(Favorite);
