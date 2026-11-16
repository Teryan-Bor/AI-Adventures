export const FlakeSpan = ({ className="", item }) => {
  return (
    <span
      className={`flake-wrapper`}
      style={{
        "--x": `${item.x}%`,
        "--size": `${item.size}px`,
        "--duration": `${item.duration}s`,
        "--delay": `${item.delay}s`,
        "--opacity": `${item.opacity}`,
      }}
    >
      <span
        style={{
          "--drift": `${item.drift}px`,
          "--driftDuration": `${item.driftDuration}s`
        }}
        className={className}
      />
    </span>
  );
};
