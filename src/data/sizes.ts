export const card: Size = {
  width: 900,
  height: 1263,
};

export const disc: Size = {
  width: 900,
  height: 900,
};

export const shield: Size = {
  width: 3216 / 2,
  height: 1610 / 2,
};

export const page: Size = {
  width: 700,
  height: 700 * Math.sqrt(2),
};

interface Size {
  width: number;
  height: number;
}
