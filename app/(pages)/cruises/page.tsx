import Container from "@/components/Container";
import Link from "next/link";

export default function CruisesPage() {
  return (
    <main>
      <Container>
        <span className="kicker">Cruises</span>
        <h1 className="h1">Set sail — without the spreadsheet headache</h1>
        <p style={{ maxWidth: 860, fontSize: 18 }}>
          I can help match the *right* ship + itinerary to your vibe: adults-only fun, luxury quiet,
          or “we want to see everything.”
        </p>

        <div className="grid grid3" style={{ marginTop: 16 }}>
          <div className="card" style={{ padding: 16 }}>
            <div style={{ fontWeight: 900 }}>Virgin Voyages</div>
            <p>Adults-only, modern, fun — great for friend trips & couples.</p>
          </div>

          <div className="card" style={{ padding: 16 }}>
            <div style={{ fontWeight: 900 }}>Silversea</div>
            <p>All-inclusive luxury with elevated service and itineraries worldwide.</p>
          </div>

          <div className="card" style={{ padding: 16 }}>
            <div style={{ fontWeight: 900 }}>Other lines</div>
            <p>I can also book many other cruise brands through my host network.</p>
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <Link className="btn btnPrimary" href="/contact">Request cruise options</Link>
        </div>
      </Container>
    </main>
  );
}
