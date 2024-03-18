import dbConnect from "@/db/connect";
import Site from "@/db/models/Sites";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (request.method === "GET") {
    const site = await Site.findById(id);

    if (!site) {
      return response.status(404).json({ status: "Not found" });
    }

    response.status(200).json(site);
  }
}
