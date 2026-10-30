export const FlakeSpan = ({ weather, item }) => {
  return (
    <span
      className={`flake-wrapper ${weather}`}
      style={{
        "--x": `${item.x}%`,
        "--size": `${item.size}px`,
        "--duration": `${item.duration}s`,
        "--delay": `${item.delay}s`,
        "--opacity": `${item.opacity}`,
      }}
    >
      <span
        className={`flake ${weather}`}
        style={{
          "--drift": `${item.drift}px`,
          "--driftDuration": `${item.driftDuration}s`,
        }}
      />
    </span>
  );
};
