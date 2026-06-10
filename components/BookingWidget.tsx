"use client";

import { useState } from "react";

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [type, setType] = useState("Studio");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ checkIn, checkOut, guests, type }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Booking request received. We will confirm shortly.");
        setCheckIn("");
        setCheckOut("");
        setGuests(1);
        setType("Studio");
      } else {
        setMessage(data.error || "Failed to create booking");
      }
    } catch (err) {
      setMessage("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-white/92">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2">
        <label className="text-sm">
          Check-in
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="mt-1 block w-full rounded-md border border-[#f08a24]/18 bg-white/10 p-2 text-white outline-none"
            required
          />
        </label>
        <label className="text-sm">
          Check-out
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="mt-1 block w-full rounded-md border border-[#f08a24]/18 bg-white/10 p-2 text-white outline-none"
            required
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2">
        <label className="text-sm">
          Guests
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border border-[#f08a24]/18 bg-white/10 p-2 text-white outline-none"
          >
            <option className="text-black" value={1}>
              1
            </option>
            <option className="text-black" value={2}>
              2
            </option>
            <option className="text-black" value={3}>
              3
            </option>
          </select>
        </label>
        <label className="text-sm">
          Apartment Type
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 block w-full rounded-md border border-[#f08a24]/18 bg-white/10 p-2 text-white outline-none"
          >
            <option className="text-black">Studio</option>
            <option className="text-black">One Bedroom</option>
          </select>
        </label>
      </div>

      <button
        className="w-full rounded-md bg-[#d97706] py-3 font-semibold text-white transition hover:bg-[#c96a04]"
        disabled={loading}
      >
        {loading ? "Sending..." : "Request Booking"}
      </button>
      {message && <p className="text-sm text-[#ffe5c8]">{message}</p>}
    </form>
  );
}
