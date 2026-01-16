import Container from "@/components/Container";
import Link from "next/link";

export const metadata = {
  title: "Disney | Kris’s Passport to Adventure",
};

export default function DisneyPage() {
  return (
    <main>
      <Container>
        <span className="kicker">Disney</span>
        <h1 className="h1">Disney trips, minus the overwhelm</h1>
        <p style={{ maxWidth: 860, fontSize: 18 }}>
          I help you plan a Disney vacation that feels smooth — resort options,
          park strategy, dining ideas, and the little details that make the whole
          trip feel magical.
        </p>

        <div className="grid grid3" style={{ marginTop: 16 }}>
          <div className="card" style={{ padding: 16 }}>
            <strong>Resort match-making</strong>
            <p>Best value vs. vibes, room types, and location.</p>
          </div>

          <div className="card" style={{ padding: 16 }}>
            <strong>Park strategy</strong>
            <p>A realistic plan without line stress.</p>
          </div>

          <div className="card" style={{ padding: 16 }}>
            <strong>Dining & extras</strong>
            <p>Recommendations that fit your family.</p>
          </div>
        </div>

        <Link className="btn btnPrimary" href="/contact">
          Request Disney planning
        </Link>
      </Container>
    </main>
  );
}
