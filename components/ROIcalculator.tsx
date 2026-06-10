"use client";

import { useState } from "react";

export default function ROIcalculator() {
  const [price, setPrice] = useState(2300000);
  const [depositPct, setDepositPct] = useState(30);
  const [termMonths, setTermMonths] = useState(12);
  const [monthlyRent, setMonthlyRent] = useState(17000);

  const deposit = Math.round((depositPct / 100) * price);
  const balance = price - deposit;
  const monthlyBalance = Math.round(balance / termMonths);
  const annualRentalIncome = monthlyRent * 12;
  const grossYield = (annualRentalIncome / price) * 100;

  return (
    <div className="rounded-2xl border border-[#f08a24]/18 bg-[linear-gradient(160deg,rgba(22,13,9,0.96),rgba(40,23,15,0.90))] p-4 text-white/92 shadow-xl shadow-black/14">
      <div className="space-y-3">
        <label className="text-sm text-white/92">
          Purchase Price (KSh)
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border border-[#f08a24]/18 bg-white/10 p-2 text-white outline-none placeholder:text-white/36"
          />
        </label>

        <label className="text-sm text-white/92">
          Deposit %
          <input
            type="range"
            min={10}
            max={60}
            value={depositPct}
            onChange={(e) => setDepositPct(Number(e.target.value))}
            className="w-full accent-[#f08a24]"
          />
          <div className="text-sm text-[#ffbf7a]">{depositPct}%</div>
        </label>

        <label className="text-sm text-white/92">
          Balance Term (months)
          <input
            type="number"
            value={termMonths}
            onChange={(e) => setTermMonths(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border border-[#f08a24]/18 bg-white/10 p-2 text-white outline-none placeholder:text-white/36"
          />
        </label>

        <label className="text-sm text-white/92">
          Estimated Monthly Rent (KSh)
          <input
            type="number"
            value={monthlyRent}
            onChange={(e) => setMonthlyRent(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border border-[#f08a24]/18 bg-white/10 p-2 text-white outline-none placeholder:text-white/36"
          />
        </label>

        <div className="mt-2 rounded-xl border border-[#f08a24]/14 bg-white/8 p-3 text-white/88">
          <div>Deposit: KSh {deposit.toLocaleString()}</div>
          <div>
            Monthly balance payment: KSh {monthlyBalance.toLocaleString()}
          </div>
          <div>
            Annual rental income: KSh {annualRentalIncome.toLocaleString()}
          </div>
          <div className="text-[#ff9f43]">
            Gross yield: {grossYield.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
}
