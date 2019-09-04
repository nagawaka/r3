export const r3 = (value: number, initialStartValue: number, initialEndValue: number, finalStartValue: number, finalEndValue: number): number => {
  const retVal: number = (finalStartValue + (finalEndValue - finalStartValue) * ((value - initialStartValue) / (initialEndValue - initialStartValue)));
  return retVal;
}