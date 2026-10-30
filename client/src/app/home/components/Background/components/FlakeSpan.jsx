export const FlakeSpan = ({ ownType, item }) => {
  return (
    <span
      className={`flake-wrapper ${ownType}`}
      style={{
        "--x": `${item.x}%`,
        "--size": `${item.size}px`,
        "--duration": `${item.duration}s`,
        "--delay": `${item.delay}s`,
        "--opacity": `${item.opacity}`,
      }}
    >
      <span
        className={`flake ${ownType}`}
        style={{
          "--drift": `${item.drift}px`,
          "--driftDuration": `${item.driftDuration}s`,
        }}
      />
    </span>
  );
};
