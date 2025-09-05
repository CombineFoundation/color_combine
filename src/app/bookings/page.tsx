"use client";

import { useEffect, useState } from "react";

type CellValue = string | number | null;
type RowData = CellValue[];

export default function BookingsPage() {
  const staticHeaders = ["DAY", "DATE", "DAY", "NIGHT"];
  const [rows, setRows] = useState<RowData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const SHEET_ID = "11TlSm5ip3Gv6OTIBa-9VgNBRuAGP6gBDPkYRzpe5Z3g";
  const API_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

  const formatDate = (value: CellValue): string | number | null => {
    if (typeof value === "string" && value.startsWith("Date(")) {
      const parts = value.match(/\d+/g);
      if (parts) {
        const year = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        const day = parseInt(parts[2]);

        const date = new Date(year, month, day);
        return date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
      }
    }
    return value;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const text = await response.text();

        const json = JSON.parse(text.substr(47).slice(0, -2));
        const dataRows: RowData[] = json.table.rows
          .slice(1)
          .map((row: { c: { v: CellValue }[] }) =>
            row.c.map((cell) => (cell ? cell.v : ""))
          );

        setRows(dataRows.map((r) => r.map(formatDate)));
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load booking data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL]);

  return (
    <section className="py-10 px-4 md:py-20 md:px-6 lg:px-20">
      <h1 className="text-3xl md:text-5xl font-bold text-green-900 text-center mb-6 md:mb-10">
        Farmhouse Booking Status
      </h1>

      {loading && (
        <p className="text-center text-sm md:text-lg text-gray-600">Loading...</p>
      )}
      {error && (
        <p className="text-center text-sm md:text-lg text-red-600">{error}</p>
      )}
      {!loading && !error && (
        <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-green-800 text-white">
              <tr>
                {staticHeaders.map((header, index) => (
                  <th
                    key={index}
                    className="py-2 px-4 md:py-3 md:px-6 border border-gray-300 text-left font-semibold text-xs md:text-base"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-100">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="py-2 px-4 md:py-3 md:px-6 border border-gray-300 text-gray-700 text-xs md:text-base"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}