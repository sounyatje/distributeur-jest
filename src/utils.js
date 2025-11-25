export function decrementStock(stock, id) {
  return {
    ...stock,
    [id]: stock[id] > 0 ? stock[id] - 1 : 0
  };
}