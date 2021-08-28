import { useEffect, useState } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const TRUE = 'TRUE';
const FALSE = 'FALSE';

const STORAGE = {
  completedWords: 'COMPLETED_WORDS',
  isFlipped: 'IS_FLIPPED',
  isTranslationHidden: 'IS_TRANSLATION_HIDDEN',
};

export const useCompletedWordsStorage = () => {
  const { getItem: loadCompletedWords, setItem: storeCompletedWords } = useAsyncStorage(
    STORAGE.completedWords
  );
  const [completedWords, setCompletedWords] = useState<string[]>([]);

  const loadFromStorage = async () => {
    const completedWords = await loadCompletedWords();
    completedWords && setCompletedWords(JSON.parse(completedWords));
  };

  const toggleCompletedWord = async (id: string) => {
    let updatedArray: string[];
    if (getIsCompleted(id)) {
      updatedArray = completedWords?.filter(wordId => wordId !== id);
    } else {
      updatedArray = [...(completedWords || []), id];
    }
    setCompletedWords(updatedArray);
    await storeCompletedWords(JSON.stringify(updatedArray));
  };

  const getIsCompleted = (id: string) => completedWords?.includes(id);

  useEffect(() => {
    loadFromStorage();
  }, []);

  return { getIsCompleted, toggleCompletedWord };
};

export const useIsFlippedStorage = () => {
  const { getItem: loadItem, setItem: storeItem } = useAsyncStorage(STORAGE.isFlipped);
  const [isLoading, setIsLoading] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  const loadFromStorage = async () => {
    setIsLoading(true);
    const item = await loadItem();
    if (item === TRUE) {
      setIsFlipped(true);
    } else {
      setIsFlipped(false);
    }
    setIsLoading(false);
  };

  const toggleIsFlipped = async () => {
    if (isFlipped) {
      setIsFlipped(false);
      await storeItem(FALSE);
    } else {
      setIsFlipped(true);
      await storeItem(TRUE);
    }
  };

  useEffect(() => {
    loadFromStorage();
  }, []);

  return { isFlipped, isLoadingIsFlipped: isLoading, toggleIsFlipped };
};

export const useIsTranslationHiddenStorage = () => {
  const { getItem: loadItem, setItem: storeItem } = useAsyncStorage(STORAGE.isTranslationHidden);
  const [isLoading, setIsLoading] = useState(true);
  const [isTranslationHidden, setIsTranslationHidden] = useState(false);

  const loadFromStorage = async () => {
    setIsLoading(true);
    const item = await loadItem();
    if (item === TRUE) {
      setIsTranslationHidden(true);
    } else {
      setIsTranslationHidden(false);
    }
    setIsLoading(false);
  };

  const toggleIsTranslationHidden = async () => {
    if (isTranslationHidden) {
      setIsTranslationHidden(false);
      await storeItem(FALSE);
    } else {
      setIsTranslationHidden(true);
      await storeItem(TRUE);
    }
  };

  useEffect(() => {
    loadFromStorage();
  }, []);

  return { isLoadingTranslationHidden: isLoading, isTranslationHidden, toggleIsTranslationHidden };
};
