import {} from "../actions/types";

const INITIAL_STATE = {
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}