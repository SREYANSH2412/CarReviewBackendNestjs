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
    // unique: true,
  })
  email: string;

  @Prop({
    type: Number,
    required: true,
    // unique: true,
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

  @Prop({
    type: String,
    required: true,
  })
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
