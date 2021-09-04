export type WordListID =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17';

const wordListTitles: { [key in WordListID]: string } = {
  ['1']: 'Basics I',
  ['2']: 'Basics II',
  ['3']: 'Numbers',
  ['4']: 'Animals',
  ['5']: 'Body Parts',
  ['6']: 'Colors',
  ['7']: 'Directions',
  ['8']: 'Feelings',
  ['9']: 'Food',
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
