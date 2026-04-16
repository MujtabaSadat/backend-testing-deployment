import { Schema, model } from "mongoose";

const nameSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});

export default model("Name", nameSchema);
