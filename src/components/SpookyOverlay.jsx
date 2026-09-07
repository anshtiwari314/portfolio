export default function SpookyOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(123,44,191,0.12)_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,102,0,0.08)_0%,_transparent_50%)]" />
      <div className="fog-layer fog-layer-1" />
      <div className="fog-layer fog-layer-2" />
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="bat"
          style={{
            left: `${8 + i * 12}%`,
            animationDelay: `${i * 1.7}s`,
            animationDuration: `${14 + i * 2}s`,
          }}
        >
          🦇
        </span>
      ))}
    </div>
  );
}
