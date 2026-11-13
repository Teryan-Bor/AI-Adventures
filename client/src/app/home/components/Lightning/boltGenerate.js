// helper.js

// 1. Построение центрального хребта (без изменений)
function generateSpine(p1, p2, displace, depth) {
  if (depth === 0) return [p1, p2];

  const midX = (p1.x + p2.x) / 2 + (Math.random() - 0.5) * displace;
  const midY = (p1.y + p2.y) / 2;
  const mid = { x: midX, y: midY };

  const left = generateSpine(p1, mid, displace * 0.55, depth - 1);
  const right = generateSpine(mid, p2, displace * 0.55, depth - 1);

  return [...left.slice(0, -1), ...right];
}

// 2. Превращение хребта в строку CSS clip-path (без изменений)
function spineToPolygon(spine, maxThickness) {
  const leftEdge = [];
  const rightEdge = [];

  spine.forEach((pt, i) => {
    const progress = i / (spine.length - 1);
    const currentHalfWidth = (maxThickness * (1 - progress)) / 2;

    leftEdge.push(`${(pt.x - currentHalfWidth).toFixed(2)}% ${pt.y.toFixed(2)}%`);
    rightEdge.unshift(`${(pt.x + currentHalfWidth).toFixed(2)}% ${pt.y.toFixed(2)}%`);
  });

  return `polygon(${[...leftEdge, ...rightEdge].join(', ')})`;
}

// 3. Генератор данных одного разряда (вместо манипуляций с DOM)
export function generateLightningStrike() {
  const bolts = [];

  // Главный ствол
  const start = { x: 30 + Math.random() * 40, y: 0 };
  const end = { x: 20 + Math.random() * 60, y: 100 };
  const mainSpine = generateSpine(start, end, 22, 5);

  bolts.push({
    id: 'main',
    clipPath: spineToPolygon(mainSpine, 0.45),
    opacity: 1,
  });

  // Ответвление
  const forkOrigin = mainSpine[Math.floor(mainSpine.length * 0.35)];
  const forkDirection = Math.random() > 0.5 ? 1 : -1;
  const forkEnd = {
    x: forkOrigin.x + forkDirection * (10 + Math.random() * 15),
    y: forkOrigin.y + 25 + Math.random() * 20,
  };
  const branchSpine = generateSpine(forkOrigin, forkEnd, 10, 4);

  bolts.push({
    id: 'branch-1',
    clipPath: spineToPolygon(branchSpine, 0.22),
    opacity: 0.75,
  });

  return {
    id: Date.now() + Math.random(), // Уникальный ключ для перезапуска CSS-анимации в React
    bolts,
  };
}