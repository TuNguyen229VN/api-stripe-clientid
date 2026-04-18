import data from "@/data/provinces.json";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function GET() {
  try {
    return Response.json(data, { headers: corsHeaders });
  } catch (error) {
    return Response.json(
      { error: "Lỗi khi đọc dữ liệu" },
      { status: 500, headers: corsHeaders }
    );
  }
}