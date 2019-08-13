export const addtoCart = obj => ({
  type: 'ADD_TO_CART',
  payload: obj,
});

export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  payload: id,
});
