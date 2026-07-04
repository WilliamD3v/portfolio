"use client";

import { ReactNode } from "react";

interface PreviewShellProps {
  children: ReactNode;
}

export default function PreviewShell({ children }: PreviewShellProps) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950 shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
      </div>

      <div className="h-[290px] overflow-hidden">
        <div className="pointer-events-none origin-top scale-[0.48] sm:scale-[0.52] lg:scale-[0.5]">
          <div className="min-w-[1200px]">{children}</div>
        </div>
      </div>
    </div>
  );
}