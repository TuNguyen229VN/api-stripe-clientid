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
const filePath = path.join(process.cwd(), "src/data", "wards2.json");

export async function GET(
  req: Request,
  { params }: { params: { provinceCode: string } },
) {
  const { provinceCode } = params;

  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const result = data.filter((d: any) => d.province_code == provinceCode);

  return Response.json(result, { headers: corsHeaders });
}
