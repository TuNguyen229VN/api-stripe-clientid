import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(
  "sk_test_51P1mNRFhreKVvoIjuz2v0Dp1lPO0Ajp5IdjJ98XeEAZaBB5dkEcg4qT3TUQsPvhnUAdngL2rXqDp5qHpGXkwI3ww00orGNqleg"
);

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const total = url.searchParams.get("total");
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
 
  return NextResponse.json(
    { clientSecret: paymentIntent.client_secret },
    { status: 201 }
  );
}

// export async function GET() {
//   return NextResponse.json({ name: "Teo" });
// }
