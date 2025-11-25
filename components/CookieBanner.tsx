"use client";

import { useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="mx-auto flex max-w-4xl items-start gap-3 rounded-2xl border border-ggwDark/10 bg-white/95 p-3 text-xs text-ggwDark/80 shadow-lg shadow-ggwGreen/30">
        <div className="flex-1">
          <p className="font-semibold text-ggwDark">This website uses cookies.</p>
          <p className="mt-1">
            We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies,
            your data will be aggregated with all other user data.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="mt-1 inline-flex items-center justify-center rounded-full bg-ggwGreen px-4 py-1.5 text-[11px] font-semibold text-ggwDark shadow-sm shadow-ggwGreen/40 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-ggwGreen/60"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
