import {PROPERTIES_FETCH, PROPERTIES_FETCH_SUCCESS} from "../actions/types";

const INITIAL_STATE = {
  loading: true,
  properties: [],
  unsubscribe: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROPERTIES_FETCH:
      return INITIAL_STATE;
    case PROPERTIES_FETCH_SUCCESS:
      return {
        loading: false,
        properties: action.payload.properties,
        unsubscribe: action.payload.unsubscribe
      };
    default:
      return state;
  }
}