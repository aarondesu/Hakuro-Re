import { TEMPLATE_ACTION_TYPE } from "../consts/template_action_type";

export const tempAction = data => ({
  type: TEMPLATE_ACTION_TYPE.TEMPLATE_ACTION,
  data
});

export const doTempAction = () => {
  return (dispatch, getState) => {
    dispatch(tempAction);
  };
};
