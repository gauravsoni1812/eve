
import { Document, Schema, model, models } from "mongoose";

export interface ICart extends Document {
  userId: string;
  eventId: string;
}

const CartSchema = new Schema({
  userId: { type: String, required: true },
  eventId: { type: String, required: true, unique: true },
})

const Cart = models.Cart || model('Cart', CartSchema);

export default Cart;