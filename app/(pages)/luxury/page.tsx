import Container from "@/components/Container";
import Link from "next/link";

export const metadata = {
  title: "Luxury | Kris’s Passport to Adventure",
};

export default function LuxuryPage() {
  return (
    <main>
      <Container>
        <span className="kicker">Luxury</span>
        <h1 className="h1">Luxury travel, effortlessly planned</h1>
        <p style={{ maxWidth: 860, fontSize: 18 }}>
          Elevated trips with quiet comfort, premium experiences, and
          every detail handled.
        </p>

        <div className="grid grid3" style={{ marginTop: 16 }}>
          <div className="card" style={{ padding: 16 }}>
            <strong>High-end resorts</strong>
            <p>Chosen for vibe, not just star ratings.</p>
          </div>

          <div className="card" style={{ padding: 16 }}>
            <strong>Luxury cruises</strong>
            <p>Upscale ships and thoughtful itineraries.</p>
          </div>

          <div className="card" style={{ padding: 16 }}>
            <strong>Milestone trips</strong>
            <p>Anniversaries, birthdays, and bucket lists.</p>
          </div>
        </div>

        <Link className="btn btnPrimary" href="/contact">
          Request luxury options
        </Link>
      </Container>
    </main>
  );
}
