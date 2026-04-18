import fs from "fs";
import path from "path";
const filePath = path.join(process.cwd(), "src/data", "districts.json");

export async function GET(
  req: Request,
  { params }: { params: { provinceCode: string } }
) {
  const { provinceCode } = params;

  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const result = data.filter(
    (d: any) => d.province_code == provinceCode
  );

  return Response.json(result);
}