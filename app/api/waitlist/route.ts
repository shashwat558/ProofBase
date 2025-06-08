import { NextRequest, NextResponse } from "next/server";
import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID!
);

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    await base(process.env.AIRTABLE_TABLE_NAME!).create([{ fields: { Email: email,
          CreatedAt: new Date().toISOString(), } }]);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Airtable error:", err);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
