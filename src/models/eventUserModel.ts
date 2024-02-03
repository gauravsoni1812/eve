import { Schema, model, models } from "mongoose";

const EventUserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: {type: String, required: true },
  photo: { type: String, required: true },
})

const EventUser = models.User || model('EventUser', EventUserSchema);

export default EventUser;