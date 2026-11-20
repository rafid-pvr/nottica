"use client";

import { useEffect, useState, type FormEvent } from "react";

export function AddToBag({ item }: { item: string }) {
  const [added, setAdded] = useState(false);
  return <div className="demo-cart-control"><button type="button" onClick={() => setAdded(true)}>{added ? "Added to concept bag ✓" : "Add to bag"}</button>{added && <span role="status">{item} · demo interaction only</span>}</div>;
}

export function Countdown({ date }: { date: string }) {
  const [remaining, setRemaining] = useState([0, 0, 0, 0]);
  useEffect(() => {
    const target = new Date(date).getTime();
    const update = () => {
      const delta = Math.max(0, target - Date.now());
      setRemaining([Math.floor(delta / 86_400_000), Math.floor(delta / 3_600_000) % 24, Math.floor(delta / 60_000) % 60, Math.floor(delta / 1_000) % 60]);
    };
    update();
    const timer = window.setInterval(update, 1_000);
    return () => window.clearInterval(timer);
  }, [date]);
  return <div className="demo-countdown" aria-label="Countdown to the event">{remaining.map((value, index) => <span key={index}><b>{String(value).padStart(2, "0")}</b><small>{["Days", "Hours", "Minutes", "Seconds"][index]}</small></span>)}</div>;
}

export function DemoRSVP({ eventName }: { eventName: string }) {
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Thank you. This sample reply is only shown in this browser and is not sent to the family.");
  }
  return <form className="demo-rsvp-form" onSubmit={submit}>
    <label>Your name<input required maxLength={80} autoComplete="name" name="name" /></label>
    <label>Will you join us?<select required name="attendance" defaultValue=""><option value="" disabled>Choose one</option><option>Joyfully accepts</option><option>Regretfully declines</option></select></label>
    <button type="submit">Send demo RSVP <span aria-hidden="true">↗</span></button>
    <p role="status" aria-live="polite">{message || `${eventName} · sample invitation only. Your reply is not sent or saved.`}</p>
  </form>;
}
