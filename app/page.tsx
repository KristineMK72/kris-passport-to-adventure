import Container from "@/components/Container";
import LeadForm from "@/components/LeadForm";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <Container>
        <div style={{ display: "grid", gap: 18, paddingTop: 24 }}>
          <span className="kicker">Travel planning • Hosted by Yeti Travel</span>

          <h1 className="h1">
            {SITE.tagline}
          </h1>

          <p style={{ maxWidth: 820, fontSize: 18 }}>
            I plan trips that feel effortless: Disney magic, adults-only cruises, luxury escapes,
            and “I don’t want to think” all-inclusive packages.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className="btn btnPrimary" href="/contact">Start Planning</Link>
            <Link className="btn" href="/cruises">Browse Cruises</Link>
            <Link className="btn" href="/disney">Disney Trips</Link>
          </div>

          <div className="grid grid3" style={{ marginTop: 10 }}>
            <div className="card" style={{ padding: 16 }}>
              <div style={{ fontWeight: 900 }}>Disney Destinations</div>
              <p>Resorts, park plans, dining, Genie strategy, and room recommendations.</p>
              <Link className="btn" href="/disney">Explore</Link>
            </div>

            <div className="card" style={{ padding: 16 }}>
              <div style={{ fontWeight: 900 }}>Cruises</div>
              <p>Virgin Voyages, Silversea, and other cruise lines I can book through my network.</p>
              <Link className="btn" href="/cruises">Explore</Link>
            </div>

            <div className="card" style={{ padding: 16 }}>
              <div style={{ fontWeight: 900 }}>Custom Packages</div>
              <p>Flights + resorts + transfers + excursions — bundled and stress-free.</p>
              <Link className="btn" href="/packages">Explore</Link>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 16, alignItems: "start", marginTop: 10 }}>
            <div className="card" style={{ padding: 18 }}>
              <div style={{ fontWeight: 900, fontSize: 18 }}>How it works</div>
              <ol style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.8 }}>
                <li>Tell me what you want (or what you *don’t* want).</li>
                <li>I build options + compare value.</li>
                <li>You pick your favorite. I handle the details.</li>
              </ol>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
                {SITE.disclaimer}
              </p>
            </div>

            <LeadForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
