import Container from "@/components/Container";
import Link from "next/link";

export const metadata = {
  title: "Packages | Kris’s Passport to Adventure",
};

export default function PackagesPage() {
  return (
    <main>
      <Container>
        <span className="kicker">Packages</span>
        <h1 className="h1">Easy, all-in-one travel packages</h1>
        <p style={{ maxWidth: 860, fontSize: 18 }}>
          Flights, resorts, transfers — bundled so you don’t have to
          juggle details.
        </p>

        <div className="grid grid3" style={{ marginTop: 16 }}>
          <div className="card" style={{ padding: 16 }}>
            <strong>All-inclusive escapes</strong>
            <p>Relaxation without planning fatigue.</p>
          </div>

          <div className="card" style={{ padding: 16 }}>
            <strong>Family trips</strong>
            <p>Destinations that actually work with kids.</p>
          </div>

          <div className="card" style={{ padding: 16 }}>
            <strong>Romantic getaways</strong>
            <p>Adults-only, honeymoon, and “we need a break” trips.</p>
          </div>
        </div>

        <Link className="btn btnPrimary" href="/contact">
          Request package quotes
        </Link>
      </Container>
    </main>
  );
}
