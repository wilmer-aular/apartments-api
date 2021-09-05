import { Schema, model } from "mongoose";

const apartmentSchema = new Schema(
  {
    Address: String,
    squareMeter: Number,
    price: Number,
    bedrooms: Number,
    toilets: Number,
    Terrace: Boolean,
    owners: {
      name: String,
      email: String,
      phoneNumber: String,
    },
    sale: Boolean,
    rental: Boolean,
    imageUrl: [String],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Apartment", apartmentSchema);
