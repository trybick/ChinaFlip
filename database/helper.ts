export type WordListID = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08';

const WordListTitlesForDisplay: { [key in WordListID]: string } = {
  ['01']: 'Basics I',
  ['02']: 'Basics II',
  ['03']: 'Numbers',
  ['04']: 'Animals',
  ['05']: 'Body Parts',
  ['06']: 'Colors',
  ['07']: 'Directions',
  ['08']: 'Emotions',
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
