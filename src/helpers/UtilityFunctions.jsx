import moment from "moment";

export const readableDate = (dateTime) => {
  dateTime = moment();
  return dateTime.format("dddd Do MMMM, YYYY");
};

export const toUpper = (text) =>
  `${text.charAt(0).toUpperCase()}${text.substring(1, text.length)}`;

export const filterWordsToType = (words, type) =>
  words.filter((w) => w.type === type);

export const joinWords = (strArr) => {
  var newStrArr = strArr.map((s) => s.word);
  return toUpper(newStrArr.join(" "));
};
