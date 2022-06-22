export const getVelocity = (radius) => {
  if (radius < 0.5) return Math.floor(Math.random() * 1) - 0.2;
  return Math.floor(Math.random() * 8) - 4.5;
};

export const distance = (point1, point2) => {
  let xs = 0;
  let ys = 0;

  xs = point2.x - point1.x;
  xs = xs * xs;

  ys = point2.y - point1.y;
  ys = ys * ys;

  return Math.sqrt(xs + ys);
};

export const getRandomColor = () => {
  const max = 123;
  const min = 100;
  return Math.floor(Math.random() * (max - min + 1) + min);
};
