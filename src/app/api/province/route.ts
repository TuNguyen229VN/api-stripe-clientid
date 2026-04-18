import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/data", "provinces.json");

export async function GET() {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return Response.json(data);
}