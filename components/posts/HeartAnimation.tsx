"use client";

import { useState } from "react";

export default function HeartAnimation() {
  const [isAnimating, setAnimating] = useState(false);

  return (
    <div
      onClick={() => setAnimating(!isAnimating)}
      className={`HeartAnimation${isAnimating ? " animate" : ""}`}
    />
  );
}
