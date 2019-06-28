export const normalizeSize = size => {
  if (typeof size === "number") return `${size}px`;
  return `${size}`;
};

