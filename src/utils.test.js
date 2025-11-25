import { decrementStock } from './utils';

describe("Stock management", () => {
  it("should decrement stock for a valid id", () => {
    const initial = { 1: 2, 2: 0 };
    expect(decrementStock(initial, 1)).toEqual({ 1: 1, 2: 0 });
  });
  it("should not go below zero", () => {
    const initial = { 1: 0 };
    expect(decrementStock(initial, 1)).toEqual({ 1: 0 });
  });
});
