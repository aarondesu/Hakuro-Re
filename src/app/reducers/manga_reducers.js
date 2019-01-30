import { MANGA_ACTION_TYPE } from "../consts/manga_action_types";

const initialState = {};

export const mangaList = (state = {}, action) => {
  switch (action.type) {
    case MANGA_ACTION_TYPE.GET_LIST:
      return action.data;
    case MANGA_ACTION_TYPE.RESET__ALL:
    case MANGA_ACTION_TYPE.RESET_LIST:
      return initialState;
    default:
      return state;
  }
};

export const mangaInfo = (state = {}, action) => {
  switch (action.type) {
    case MANGA_ACTION_TYPE.GET_MANGA_INFO:
      return action.data;
    case MANGA_ACTION_TYPE.RESET_INFO:
    case MANGA_ACTION_TYPE.RESET__ALL:
      return initialState;
    default:
      return state;
  }
};
