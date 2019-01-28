import { TEMPLATE_ACTION_TYPE } from "../consts/template_action_type";

export const tempReducer = (state = [], action) => {
  switch (action.type) {
    case TEMPLATE_ACTION_TYPE.TEMPLATE_ACTION:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};
