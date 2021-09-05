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
  | '17'
  | '18';

const wordListTitles: { [key in WordListID]: string } = {
  ['1']: 'Basics I',
  ['2']: 'Basics II',
  ['3']: 'Questions',
  ['4']: 'Numbers',
  ['5']: 'Telling Time',
  ['6']: 'Days and Months',
  ['7']: 'Directions',
  ['8']: 'Feelings',
  ['9']: 'Food',
  ['10']: 'Music',
  ['11']: 'Animals',
  ['12']: 'Body Parts',
  ['13']: 'Colors',
  ['14']: 'Money',
  ['15']: 'Countries',
  ['16']: 'Shower',
  ['17']: 'Furniture',
  ['18']: 'Transportation',
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
