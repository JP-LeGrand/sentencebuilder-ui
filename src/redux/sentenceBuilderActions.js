import * as Types from "./sentenceBuilderActionTypes";
import sentenceBuilderApi from "../api/sentenceBuilderApi";

export const getWords = () => async (dispatch) => {
  try {
    const response = await sentenceBuilderApi.get("word/words");
    dispatch({ type: Types.GET_WORDS, payload: response.data });
    dispatch({ type: Types.GET_WORD_SUCCESS });
  } catch (error) {
    dispatch({ type: Types.GET_WORD_ERROR });
    throw error;
  }
};

export const getWordTypes = () => async (dispatch) => {
  try {
    const response = await sentenceBuilderApi.get("word/types");
    dispatch({ type: Types.GET_WORD_TYPES, payload: response.data });
    dispatch({ type: Types.GET_WORD_TYPES_SUCCESS });
  } catch (error) {
    dispatch({ type: Types.GET_WORD_TYPES_ERROR });
    throw error;
  }
};

export const submitSentence = (sentenceData) => async (dispatch) => {
  try {
    const response = await sentenceBuilderApi.post(
      "sentence/submit",
      sentenceData
    );
    if (response.status === 200) {
      dispatch({ type: Types.SUBMIT_SENTENCE_SUCCESS });
    }
  } catch (error) {
    dispatch({ type: Types.SUBMIT_SENTENCE_ERROR });
    throw error;
  }
};

export const getSentenceHistory = () => async (dispatch) => {
  try {
    const response = await sentenceBuilderApi.get("sentence/history");
    dispatch({ type: Types.GET_SENTENCE, payload: response.data });
    dispatch({ type: Types.GET_SENTENCE_SUCCESS });
  } catch (error) {
    dispatch({ type: Types.GET_SENTENCE_ERROR });
    throw error;
  }
};

export const buildSentence = (word) => async (dispatch) => {
  dispatch({ type: Types.SENTENCE_ADD_WORD, payload: word });
};

export const breakSentence = (word) => async (dispatch) => {
  dispatch({ type: Types.SENTENCE_REMOVE_WORD, payload: word });
};
