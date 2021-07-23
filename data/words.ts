enum Levels {
  ONE = '01',
  TWO = '02',
}

export type Word = {
  id: string;
  english: string;
  chinese: string;
};

type WordsObject = {
  [key in Levels]: Word[];
};

export default <WordsObject>{
  ['01']: [
    {
      id: '0001',
      english: 'Hello',
      chinese: 'nǐ hǎo',
    },
    {
      id: '0002',
      english: 'Good morning',
      chinese: 'zǎo shàng hǎo',
    },
    {
      id: '0003',
      english: 'Good evening',
      chinese: 'wǎn shàng hǎo',
    },
    {
      id: '0004',
      english: 'How are you?',
      chinese: 'nǐ hǎo ma ?',
    },
    {
      id: '0005',
      english: 'I’m fine',
      chinese: 'wǒ hěn hǎo',
    },
    {
      id: '0006',
      english: 'Have you eaten?',
      chinese: 'nǐ chī le ma ?',
    },
    {
      id: '0007',
      english: 'I ate',
      chinese: 'chī le',
    },
    {
      id: '0008',
      english: 'And you?',
      chinese: 'nǐ ne',
    },
    {
      id: '0009',
      english: 'Welcome',
      chinese: 'huān yíng',
    },
    {
      id: '0010',
      english: 'Pleased to meet you',
      chinese: 'hěn gāo xìng jiàn dào nǐ',
    },
    {
      id: '0011',
      english: 'My name is …. What about you?',
      chinese: 'wǒ jiào [Name], nǐ ne ？',
    },
    {
      id: '0012',
      english: 'What is your name?',
      chinese: 'zěn me chēng hū ？',
    },
    {
      id: '0013',
      english: 'I’m from …',
      chinese: 'wǒ cóng … lái',
    },
    {
      id: '0014',
      english: 'What kind of work do you do?',
      chinese: 'nǐ zuò shén me yàng de gōng zuò ?',
    },
    {
      id: '0015',
      english: 'Good bye',
      chinese: 'zài jiàn',
    },
    {
      id: '0016',
      english: 'Good night',
      chinese: 'wǎn ān',
    },
    {
      id: '0017',
      english: 'See you later',
      chinese: 'huí tóu jiàn',
    },
    {
      id: '0018',
      english: 'Have a nice day!',
      chinese: 'zhù nín yǒu gè měi hǎo de yī tiān ！',
    },
    {
      id: '0019',
      english: 'Have a nice weekend',
      chinese: 'zhōu mò yú kuài',
    },
    {
      id: '0020',
      english: 'Have a smooth and safe journey.',
      chinese: 'yí lù shùn fēng',
    },
    {
      id: '0021',
      english: 'Take care',
      chinese: 'màn zǒu',
    },
    {
      id: '0022',
      english: 'Thank you',
      chinese: 'xiè xie',
    },
    {
      id: '0023',
      english: 'You are welcome',
      chinese: 'bù kè qì',
    },
    {
      id: '0024',
      english: 'Yes',
      chinese: 'duì',
    },
    {
      id: '0025',
      english: 'no',
      chinese: 'bù',
    },
    {
      id: '0026',
      english: 'maybe',
      chinese: 'yě xǔ ba',
    },
    {
      id: '0027',
      english: 'Please',
      chinese: 'qǐng',
    },
    {
      id: '0028',
      english: 'Excuse me?',
      chinese: 'qǐng wèn',
    },
    {
      id: '0029',
      english: 'Sorry',
      chinese: 'bào qiàn',
    },
    {
      id: '0030',
      english: 'I’m sorry',
      chinese: 'duì bù qǐ',
    },
    {
      id: '0031',
      english: 'No problem',
      chinese: 'méi guān xì',
    },
    {
      id: '0032',
      english: 'Excuse me',
      chinese: 'bù hǎo yì si',
    },
    {
      id: '0033',
      english: 'Please excuse me',
      chinese: 'jiè guò yī xià',
    },
  ],
  ['02']: [
    {
      id: '0034',
      english: 'I know',
      chinese: 'wǒ zhī dào',
    },
    {
      id: '0035',
      english: 'I don’t know',
      chinese: 'wǒ bù zhī dào',
    },
    {
      id: '0036',
      english: 'I understand',
      chinese: 'wǒ míng bái',
    },
    {
      id: '0037',
      english: 'I don’t understand',
      chinese: 'wǒ bù míng bái',
    },
    {
      id: '0038',
      english: 'What do you mean?',
      chinese: 'shén me yì si',
    },
    {
      id: '0039',
      english: 'I don’t speak Chinese',
      chinese: 'wǒ bù huì shuō zhōng wén',
    },
    {
      id: '0040',
      english: 'Do you speak English?',
      chinese: 'nǐ huì shuō yīng yǔ ma ？',
    },
    {
      id: '0041',
      english: 'I speak a little Chinese',
      chinese: 'wǒ huì shuō yī diǎn zhōng wén',
    },
    {
      id: '0042',
      english: 'Please speak more slowly',
      chinese: 'qǐng shuō màn yī diǎn',
    },
    {
      id: '0043',
      english: 'Please write it down',
      chinese: 'qǐng xiě xià lái',
    },
    {
      id: '0044',
      english: 'Could you please repeat that?',
      chinese: 'qǐng nǐ zài shuō yī biàn hǎo ma ？',
    },
    {
      id: '0045',
      english: 'How do you say this in Chinese?',
      chinese: 'zhè gè yòng zhōng wén zěn me shuō',
    },
    {
      id: '0046',
      english: 'Wait a moment',
      chinese: 'děng yī xià',
    },
    {
      id: '0047',
      english: 'Toilets',
      chinese: 'cè suǒ',
    },
    {
      id: '0048',
      english: 'Excuse me,where’s the toilet?',
      chinese: 'qǐng wèn ， cè suǒ zài nǎ lǐ ？',
    },
    {
      id: '0049',
      english: 'Entrance',
      chinese: 'rù kǒu',
    },
    {
      id: '0050',
      english: 'Exit',
      chinese: 'chū kǒu',
    },
    {
      id: '0051',
      english: 'Emergency exit',
      chinese: 'jǐn jí chū kǒu',
    },
    {
      id: '0052',
      english: 'Push',
      chinese: 'tuī',
    },
    {
      id: '0053',
      english: 'Pull',
      chinese: 'lā',
    },
    {
      id: '0054',
      english: 'How much?',
      chinese: 'duō shǎo ',
    },
    {
      id: '0055',
      english: 'Too expensive',
      chinese: 'tài guì le',
    },
    {
      id: '0056',
      english: 'The bill, please. Thank you.',
      chinese: 'jié zhàng ， xiè xie。',
    },
    {
      id: '0057',
      english: 'I want…',
      chinese: 'wǒ yào',
    },
    {
      id: '0058',
      english: 'a bottle of beer',
      chinese: 'yī píng pí jiǔ',
    },
    {
      id: '0059',
      english: 'a cup of coffee',
      chinese: 'yī bēi kā fēi',
    },
    {
      id: '0060',
      english: 'a bottle of water',
      chinese: 'yī píng shuǐ',
    },
    {
      id: '0061',
      english: 'I will miss you',
      chinese: 'wǒ huì xiǎng niàn nǐ de',
    },
    {
      id: '0062',
      english: 'I love you',
      chinese: 'wǒ ài nǐ',
    },
    {
      id: '0063',
      english: 'Leave me alone!',
      chinese: 'bié guǎn wǒ',
    },
    {
      id: '0064',
      english: 'Help!',
      chinese: 'jiù mìng a',
    },
    {
      id: '0065',
      english: 'Call the police',
      chinese: 'jiào jǐng chá',
    },
    {
      id: '0066',
      english: 'Stop',
      chinese: 'tíng xià',
    },
    {
      id: '0067',
      english: 'Happy Birthday',
      chinese: 'shēng rì kuài lè',
    },
    {
      id: '0068',
      english: 'Congratulations',
      chinese: 'gōng xǐ',
    },
    {
      id: '0069',
      english: 'Happy Chinese New Year',
      chinese: 'xīn chūn kuài lè',
    },
    {
      id: '0070',
      english: 'That’s hilarious',
      chinese: 'hǎo gǎo xiào',
    },
  ],
};
