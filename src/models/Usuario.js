import { Schema, model } from "mongoose";

const UsuarioSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    online: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const UsuarioModel = model("Usuario", UsuarioSchema);
