import mongoose from "mongoose";
const { Schema } = mongoose;

const siteSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String, required: true },
  description: { type: String, required: true },
});

const Site = mongoose.models.Site || mongoose.model("Site", siteSchema);

export default Site;
