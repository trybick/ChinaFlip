export type Level = '01' | '02';

const LevelTitlesForDisplay: { [key in Level]: string } = {
  ['01']: 'Basics I',
  ['02']: 'Basics II',
};

export const getTitleForDisplay = (level: Level) => LevelTitlesForDisplay[level];

export type Word = {
  id: string;
  english: string;
  chinese: string;
};

export type Database = {
  [key in Level]: Word[];
};
