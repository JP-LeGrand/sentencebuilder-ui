import * as Types from "./sentenceBuilderActionTypes";
import InitialState from "../redux/initialState";

const SentenceBuilderReducer = (state = InitialState.sentenceBuilder, action) => {
  switch (action.type) {
    case Types.GET_SENTENCE:
      return {
        ...state,
        sentenceHistory: action.payload,
      };
    case Types.GET_WORDS:
      return {
        ...state,
        words: action.payload,
      };
    case Types.GET_WORD_TYPES:
      return {
        ...state,
        wordTypes: action.payload,
      };
    default:
      return state;
  }
};

export default SentenceBuilderReducer;
