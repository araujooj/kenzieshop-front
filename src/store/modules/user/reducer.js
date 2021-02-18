const token = localStorage.getItem("token") || "";

const defaultState = {
  token,
  user: {},
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "@user/SIGN_IN":
      const { token } = action;

      return { ...state, token };
    default:
      return state;
  }
};

export default userReducer;
