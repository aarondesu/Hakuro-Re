import { MANGA_ACTION_TYPE } from "../consts/manga_action_types";
import axios from "axios";

const api = axios.create({
  baseURL: "https://www.mangaeden.com/api/"
});

export const updateList = data => ({
  type: MANGA_ACTION_TYPE.GET_LIST,
  data
});

export const updateMangaInfo = data => ({
  type: MANGA_ACTION_TYPE.GET_MANGA_INFO,
  data
});

export const resetList = () => ({
  type: MANGA_ACTION_TYPE.RESET_LIST
});

export const resetInfo = () => ({
  type: MANGA_ACTION_TYPE.RESET_INFO
});

export const resetALl = () => ({
  type: MANGA_ACTION_TYPE.RESET__ALL
});

export const doGetList = page => {
  return (dispatch, getState) => {
    api
      .get(`list/1/?p=${page}&l=30`)
      .then(result => {
        dispatch(updateList(result.data.manga));
      })
      .catch(error => {
        // TODO: add better way to show error
        console.error(error);
      });
  };
};

export const doGetMangaInfo = mangaId => {
  return (dispatch, getState) => {
    api
      .get(`manga/${mangaId}/`)
      .then(result => {
        dispatch(updateMangaInfo(result.data));
      })
      .catch(error => {
        // TODO: add better way to show error
        console.error(error);
      });
  };
};
