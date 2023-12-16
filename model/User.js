import { Schema, model } from "mongoose";
import Joi from "joi";
import jwtPkg from "jsonwebtoken";
const { sign } = jwtPkg;

const userScheme = Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    minlength: 5,
    maxlength: 1024,
    required: true,
  },
  category: {
    type: String,
    enum: ["admin", "vendor", "user"],
    default: "user",
  },
});

userScheme.methods.generateToken = function () {
  return sign({ _id: this._id, email: this.email }, "jwt-private-key", {
    expiresIn: "24h",
  });
};

export const User = model("Users", userScheme);

export function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().min(5).max(50).required(),
    password: Joi.string().min(5).max(1024).required(),
    category: Joi.string().required(),
  });

  //   return schema.validate(user, { abortEarly: false });
  return schema.validate(user);
}
