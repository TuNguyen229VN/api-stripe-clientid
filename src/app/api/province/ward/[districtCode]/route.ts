import fs from "fs";
import path from "path";
const filePath = path.join(process.cwd(), "src/data", "wards.json");

export async function GET(
  req: Request,
  { params }: { params: { districtCode: string } }
) {
  const { districtCode } = params;

  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const result = data.filter(
    (d: any) => d.district_code == districtCode
  );

  return Response.json(result);
}