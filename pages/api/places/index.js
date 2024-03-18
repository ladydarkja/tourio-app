import dbConnect from "@/db/connect";
import Site from "@/db/models/Sites";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const sites = await Site.find();
    return response.status(200).json(sites);
  }

  if (request.method === "POST") {
    try {
      const siteData = request.body;
      // const site = new Site(siteData);
      await Site.create(siteData);

      response.status(201).json({ status: "Site created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
