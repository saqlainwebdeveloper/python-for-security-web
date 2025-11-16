import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fileName = searchParams.get("fileName");

  if (!fileName) return NextResponse.json({ error: "No fileName provided" }, { status: 400 });

  const { data, error } = await supabase.storage
    .from("pdfs")
    .download(fileName);

  if (error || !data) return NextResponse.json({ error: "File not found" }, { status: 404 });

  const arrayBuffer = await data.arrayBuffer();
  const fileBuffer = Buffer.from(arrayBuffer);

  return new Response(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}"`,
    },
  });
}
