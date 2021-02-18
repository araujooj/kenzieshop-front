const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "@cart/ADD":
      const { product } = action;
      return [...state, product];

    case "@cart/REMOVE":
      const filteredState = state.filter((product) => product.id !== action.id);
      return filteredState;

    default:
      return state;
  }
};

export default cartReducer;
