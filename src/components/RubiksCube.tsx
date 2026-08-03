const cubeFaces = [
  { cls: "front", color: "var(--cube-red)" },
  { cls: "back", color: "var(--cube-orange)" },
  { cls: "left", color: "var(--cube-green)" },
  { cls: "right", color: "var(--cube-blue)" },
  { cls: "top", color: "var(--cube-yellow)" },
  { cls: "bottom", color: "var(--cube-white)" },
];

export function RubiksCube() {
  return (
    <div className="cube-scene" aria-hidden="true">
      <div className="cube">
        {cubeFaces.map(({ cls, color }) => (
          <div key={cls} className={`cube-face cube-face--${cls}`}>
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="sticker" style={{ background: color }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}