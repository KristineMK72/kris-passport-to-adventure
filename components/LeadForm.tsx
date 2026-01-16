"use client";

import { useState } from "react";

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setStatus(res.ok ? "sent" : "error");
    if (res.ok) (e.target as HTMLFormElement).reset();
  }

  return (
    <form onSubmit={onSubmit} className="card" style={{ padding: 18, display: "grid", gap: 12 }}>
      <div style={{ fontWeight: 900, fontSize: 18 }}>Trip Request</div>

      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <input name="name" required placeholder="Your name" style={inputStyle} />
        <input name="email" type="email" required placeholder="Email" style={inputStyle} />
      </div>

      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <input name="destination" placeholder="Destination / vibe (e.g., Disney, Caribbean, Alaska)" style={inputStyle} />
        <input name="dates" placeholder="Target dates (or flexible?)" style={inputStyle} />
      </div>

      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <input name="budget" placeholder="Budget range" style={inputStyle} />
        <input name="travelers" placeholder="# of travelers (adults/kids)" style={inputStyle} />
      </div>

      <textarea name="notes" placeholder="Anything important? (mobility needs, celebrations, must-do’s, room type, etc.)" rows={4} style={inputStyle} />

      <button className="btn btnPrimary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send request"}
      </button>

      {status === "sent" && <div style={msgOk}>Got it! I’ll reach out soon with next steps.</div>}
      {status === "error" && <div style={msgErr}>Something went wrong. Try again or use the Contact page.</div>}
    </form>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 12px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.06)",
  color: "rgba(255,255,255,0.92)",
  outline: "none",
};

const msgOk: React.CSSProperties = { color: "rgba(125, 211, 252, 0.95)", fontWeight: 800 };
const msgErr: React.CSSProperties = { color: "rgba(248, 113, 113, 0.95)", fontWeight: 800 };
