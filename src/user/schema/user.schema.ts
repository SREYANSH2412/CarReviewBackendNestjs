import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Mongoose } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    type: String,
    required: true,
  })
  Name: string;

  @Prop({
    type: String,
    required: true,
  })
  email: string;

  @Prop({
    type: Number,
    required: true,
  })
  phone: number;

  @Prop({
    type: String,
    required: true,
  })
  address: string;

  @Prop({
    type: [String],
    required: false,
  })
  userprefrences: string[];
}
export const UserSchema = SchemaFactory.createForClass(User);
