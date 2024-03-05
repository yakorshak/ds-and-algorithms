function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  let inputRows = mat.length;
  let inputColumns = mat[0].length;
  let flat: number[] = mat.flat();
  let res: number[][] = [];
  let temp: number[] = [];

  if (inputRows * inputColumns != r * c) {
    return mat;
  }

  for (let i = 0; i < flat.length; i++) {
    if (temp.length < c) {
      temp.push(flat[i]);
    }

    if (temp.length == c) {
      res.push(temp);
      temp = [];
    }
  }

  return res;
}
