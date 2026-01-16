import Container from "./Container";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.10)", marginTop: 40 }}>
      <Container>
        <div style={{ display: "grid", gap: 10 }}>
          <div style={{ color: "rgba(255,255,255,0.85)", fontWeight: 800 }}>
            {SITE.name}
          </div>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
            {SITE.disclaimer}
          </div>
          <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>
            © {new Date().getFullYear()} • All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
