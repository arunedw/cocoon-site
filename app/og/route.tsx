import { OgCard } from "@/lib/og";
export const runtime = "edge";
export function GET(req: Request) {
  const t = new URL(req.url).searchParams.get("title") ?? "Cocoon";
  return OgCard(t.slice(0, 90));
}
