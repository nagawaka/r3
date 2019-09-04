export const r3 = (value: number, start1: number, stop1: number, start2: number, stop2: number): number => {
  const retVal: number = (start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1)));
  return retVal;
}