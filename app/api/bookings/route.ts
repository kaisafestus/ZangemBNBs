import fs from "fs/promises";
import path from "path";

function isValidDate(value: unknown) {
  return typeof value === "string" && !Number.isNaN(Date.parse(value));
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { checkIn, checkOut, guests, type } = body ?? {};

    if (!isValidDate(checkIn)) {
      return new Response(
        JSON.stringify({ error: "A valid checkIn date is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    if (!isValidDate(checkOut)) {
      return new Response(
        JSON.stringify({ error: "A valid checkOut date is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      return new Response(
        JSON.stringify({ error: "checkOut must be after checkIn" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    if (!Number.isInteger(guests) || guests < 1) {
      return new Response(
        JSON.stringify({ error: "guests must be a positive whole number" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    if (typeof type !== "string" || !type.trim()) {
      return new Response(JSON.stringify({ error: "type is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "bookings.json");

    await fs.mkdir(dataDir, { recursive: true });

    let bookings: Array<Record<string, unknown>> = [];
    try {
      const raw = await fs.readFile(filePath, "utf-8");
      const parsed = JSON.parse(raw);
      bookings = Array.isArray(parsed) ? parsed : [];
    } catch {
      bookings = [];
    }

    const newBooking = {
      id: Date.now(),
      checkIn,
      checkOut,
      guests,
      type: type.trim(),
      createdAt: new Date().toISOString(),
    };

    bookings.push(newBooking);

    await fs.writeFile(filePath, JSON.stringify(bookings, null, 2), "utf-8");

    return new Response(
      JSON.stringify({ success: true, booking: newBooking }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
