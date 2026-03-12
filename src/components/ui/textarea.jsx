import React from "react";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`border border-slate-300 rounded-xl px-3 py-2 text-sm w-full resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
      rows={4}
      {...props}
    />
  );
}
