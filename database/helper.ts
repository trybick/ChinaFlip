export type WordListID = '01' | '02';

const WordListTitlesForDisplay: { [key in WordListID]: string } = {
  ['01']: 'Basics I',
  ['02']: 'Basics II',
};

export const getTitleForDisplay = (id: WordListID) => WordListTitlesForDisplay[id];

export type Word = {
  id: string;
  english: string;
  chinese: string;
};

export type Database = {
  [key in WordListID]: Word[];
};
