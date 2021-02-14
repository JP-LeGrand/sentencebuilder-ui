import * as Types from "./sentenceBuilderActionTypes";
import InitialState from "../redux/initialState";

const SentenceBuilderReducer = (
  state = InitialState.sentenceBuilder,
  action
) => {
  let sentenceArray = state.sentence;
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
    case Types.SENTENCE_ADD_WORD:
      sentenceArray.push(action.payload);
      return {
        ...state,
        sentence: sentenceArray,
      };
    case Types.SENTENCE_REMOVE_WORD:
      return {
        ...state,
        sentence: sentenceArray.filter((s) => s._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export default SentenceBuilderReducer;
