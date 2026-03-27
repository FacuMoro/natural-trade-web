"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { MARKETS, ORIGIN } from "@/lib/constants";
import type { MarketId } from "@/lib/constants";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const DEFAULT_ALTITUDE = 2.5;
const ZOOM_ALTITUDE = 1.4;
const TRANSITION_MS = 800;

const ARCS_DATA = MARKETS.map((market) => ({
  startLat: ORIGIN.lat,
  startLng: ORIGIN.lng,
  endLat: market.lat,
  endLng: market.lng,
  id: market.id,
  label: market.label,
}));

interface GlobeVisualizationProps {
  hoveredMarket: MarketId | null;
}

export default function GlobeVisualization({ hoveredMarket }: GlobeVisualizationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
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

  useEffect(() => {
    if (!globeRef.current) return;

    if (hoveredMarket) {
      const market = MARKETS.find((m) => m.id === hoveredMarket);
      if (market) {
        globeRef.current.pointOfView(
          { lat: market.lat, lng: market.lng, altitude: ZOOM_ALTITUDE },
          TRANSITION_MS
        );
      }
    } else {
      globeRef.current.pointOfView(
        { lat: ORIGIN.lat, lng: ORIGIN.lng, altitude: DEFAULT_ALTITUDE },
        TRANSITION_MS
      );
    }
  }, [hoveredMarket]);

  const pointsData = [
    { lat: ORIGIN.lat, lng: ORIGIN.lng, label: ORIGIN.label, id: "origin", size: 0.6 },
    ...MARKETS.map((m) => ({ lat: m.lat, lng: m.lng, label: m.label, id: m.id, size: 0.4 })),
  ];

  const ringsData = hoveredMarket
    ? MARKETS.filter((m) => m.id === hoveredMarket).map((m) => ({
        lat: m.lat,
        lng: m.lng,
        maxR: 6,
        propagationSpeed: 2,
        repeatPeriod: 800,
      }))
    : [];

  const getPointColor = useCallback(
    (point: any) => {
      if (point.id === "origin") return "#C9A96E";
      if (hoveredMarket && point.id === hoveredMarket) return "#FFD700";
      if (hoveredMarket && point.id !== hoveredMarket) return "rgba(201,169,110,0.3)";
      return "#C9A96E";
    },
    [hoveredMarket]
  );

  const getPointRadius = useCallback(
    (point: any) => {
      if (hoveredMarket && point.id === hoveredMarket) return 0.8;
      return point.size;
    },
    [hoveredMarket]
  );

  const getArcColor = useCallback(
    (arc: any) => {
      if (!hoveredMarket) return "#C9A96E";
      return arc.id === hoveredMarket ? "#FFD700" : "rgba(201,169,110,0.15)";
    },
    [hoveredMarket]
  );

  const getArcStroke = useCallback(
    (arc: any) => {
      if (hoveredMarket && arc.id === hoveredMarket) return 1.2;
      return 0.5;
    },
    [hoveredMarket]
  );

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
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        atmosphereColor={hoveredMarket ? "#FFD700" : "#C9A96E"}
        atmosphereAltitude={0.2}
        arcsData={ARCS_DATA}
        arcColor={getArcColor}
        arcStroke={getArcStroke}
        arcDashLength={0.5}
        arcDashGap={0.3}
        arcDashAnimateTime={hoveredMarket ? 1500 : 3000}
        arcAltitudeAutoScale={0.4}
        pointsData={pointsData}
        pointColor={getPointColor}
        pointAltitude={0.01}
        pointRadius={getPointRadius}
        pointsMerge={false}
        ringsData={ringsData}
        ringColor={() => (t: number) => `rgba(255, 215, 0, ${1 - t})`}
        ringMaxRadius="maxR"
        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"
        animateIn={true}
        enablePointerInteraction={false}
      />
    </div>
  );
}
