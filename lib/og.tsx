import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export function OgCard(title: string, eyebrow = "Cocoon by Edwisely") {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f5f3ee", padding: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 56, height: 56, borderRadius: 28, background: "#1f3563", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, fontWeight: 700 }}>C</div>
          <div style={{ fontSize: 30, fontWeight: 700, color: "#1c1c1e" }}>cocoon.</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase", color: "#55555b" }}>{eyebrow}</div>
          <div style={{ fontSize: 64, fontWeight: 700, color: "#1c1c1e", lineHeight: 1.1, marginTop: 16 }}>{title}</div>
        </div>
        <div style={{ display: "flex", height: 12, background: "#1f3563", borderRadius: 6 }} />
      </div>
    ),
    size
  );
}
