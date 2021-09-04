export type WordListID =
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17';

const wordListTitles: { [key in WordListID]: string } = {
  ['01']: 'Basics I',
  ['02']: 'Basics II',
  ['03']: 'Numbers',
  ['04']: 'Animals',
  ['05']: 'Body Parts',
  ['06']: 'Colors',
  ['07']: 'Directions',
  ['08']: 'Feelings',
  ['09']: 'Food',
  ['10']: 'Music',
  ['11']: 'Money',
  ['12']: 'Countries',
  ['13']: 'Questions',
  ['14']: 'Telling time',
  ['15']: 'Days and Months',
  ['16']: 'Shower',
  ['17']: 'Transportation',
};

export const getTitleForDisplay = (id: WordListID) => wordListTitles[id];

export type Word = {
  id: string;
  english: string;
  chinese: string;
};

export type Database = {
  [key in WordListID]: Word[];
};
