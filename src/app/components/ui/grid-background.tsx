import React from "react";

export default function GridBackground() {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundSize: "15px 15px",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          maskImage: `radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 75%)`,
          WebkitMaskImage: `radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 75%)`,
        }}
        aria-hidden="true"
      />
    </div>
  );
}
