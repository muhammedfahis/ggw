"use client";

import { useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="mx-auto flex max-w-4xl items-start gap-3 rounded border border-charcoal/10 bg-white/95 p-3 text-xs text-charcoal/80 shadow-lg">
        <div className="flex-1">
          <p className="font-semibold text-charcoal">This website uses cookies.</p>
          <p className="mt-1">
            We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies,
            your data will be aggregated with all other user data.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="btn-primary btn-sm mt-1"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
