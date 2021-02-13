import SentenceBuilderReducer from "./sentenceBuilderReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  sentenceBuilder: SentenceBuilderReducer,
});

export default RootReducer;
