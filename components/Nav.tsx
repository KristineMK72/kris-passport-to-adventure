import Link from "next/link";
import Container from "./Container";
import { SITE } from "@/lib/site";

const navLinkStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.06)",
  color: "rgba(255,255,255,0.86)",
  fontWeight: 700,
  fontSize: 14,
};

export default function Nav() {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 50, backdropFilter: "blur(10px)", background: "rgba(5,11,18,0.55)", borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
      <Container>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
          <Link href="/" style={{ fontWeight: 900, letterSpacing: "-0.02em" }}>
            {SITE.name}
          </Link>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/disney" style={navLinkStyle}>Disney</Link>
            <Link href="/cruises" style={navLinkStyle}>Cruises</Link>
            <Link href="/luxury" style={navLinkStyle}>Luxury</Link>
            <Link href="/packages" style={navLinkStyle}>Packages</Link>
            <Link href="/contact" className="btn btnPrimary">Start Planning</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
