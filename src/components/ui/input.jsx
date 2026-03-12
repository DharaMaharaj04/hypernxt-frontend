import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`border border-slate-300 rounded-xl px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
      {...props}
    />
  );
}
