"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { MARKETS, ORIGIN } from "@/lib/constants";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const ARCS_DATA = MARKETS.map((market) => ({
  startLat: ORIGIN.lat,
  startLng: ORIGIN.lng,
  endLat: market.lat,
  endLng: market.lng,
  label: market.label,
}));

const POINTS_DATA = [
  { lat: ORIGIN.lat, lng: ORIGIN.lng, label: ORIGIN.label, size: 0.6 },
  ...MARKETS.map((m) => ({ lat: m.lat, lng: m.lng, label: m.label, size: 0.4 })),
];

export default function GlobeVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    function updateSize() {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setDimensions({ width: w, height: Math.min(w, 500) });
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (!mounted) {
    return (
      <div ref={containerRef} className="w-full flex items-center justify-center" style={{ height: 500 }}>
        <div className="w-48 h-48 rounded-full border border-gold/30 animate-pulse" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full flex items-center justify-center">
      <Globe
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        atmosphereColor="#C9A96E"
        atmosphereAltitude={0.2}
        arcsData={ARCS_DATA}
        arcColor={() => "#C9A96E"}
        arcStroke={0.5}
        arcDashLength={0.5}
        arcDashGap={0.3}
        arcDashAnimateTime={3000}
        arcAltitudeAutoScale={0.4}
        pointsData={POINTS_DATA}
        pointColor={() => "#C9A96E"}
        pointAltitude={0.01}
        pointRadius="size"
        pointsMerge={true}
        animateIn={true}
        enablePointerInteraction={true}
      />
    </div>
  );
}
