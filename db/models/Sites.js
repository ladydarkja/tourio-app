import mongoose from "mongoose";
const { Schema } = mongoose;

const siteSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String },
  image: { type: String },
  mapURL: { type: String },
  description: { type: String },
});

const Site = mongoose.models.Site || mongoose.model("Site", siteSchema);

export default Site;
