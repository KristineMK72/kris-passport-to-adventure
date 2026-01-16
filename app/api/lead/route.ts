import { NextResponse } from "next/server";

type Lead = {
  name?: string;
  email?: string;
  destination?: string;
  dates?: string;
  budget?: string;
  travelers?: string;
  notes?: string;
};

export async function POST(req: Request) {
  const lead = (await req.json()) as Lead;

  // Basic validation
  if (!lead?.email || !lead?.name) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  // TODO: send to email provider (Resend) or save to DB (Supabase)
  console.log("NEW LEAD:", lead);

  return NextResponse.json({ ok: true });
}
