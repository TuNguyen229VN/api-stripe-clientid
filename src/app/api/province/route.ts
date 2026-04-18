import fs from "fs";
import path from "path";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
const filePath = path.join(process.cwd(), "src/data", "provinces.json");

export async function GET() {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return Response.json(data, { headers: corsHeaders });
}
