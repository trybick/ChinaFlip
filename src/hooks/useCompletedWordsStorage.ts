import { useEffect, useState } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  completedWords: 'COMPLETED_WORDS',
  isFlipped: 'IS_FLIPPED',
};

export const useCompletedWordsStorage = () => {
  const { getItem: loadItem, setItem: storeItem } = useAsyncStorage(STORAGE_KEYS.completedWords);
  const [completedWords, setCompletedWords] = useState<string[]>([]);

  const loadFromStorage = async () => {
    const item = await loadItem();
    setCompletedWords(item && JSON.parse(item));
  };

  const toggleCompletedWord = async (id: string) => {
    let updatedArray: string[];
    if (getIsCompleted(id)) {
      updatedArray = completedWords?.filter(wordId => wordId !== id);
    } else {
      updatedArray = [...(completedWords || []), id];
    }
    setCompletedWords(updatedArray);
    await storeItem(JSON.stringify(updatedArray));
  };

  const getIsCompleted = (id: string) => completedWords?.includes(id);

  useEffect(() => {
    loadFromStorage();
  }, []);

  return { getIsCompleted, toggleCompletedWord };
};

const TRUE = 'TRUE';
const FALSE = 'FALSE';

export const useIsFlippedStorage = () => {
  const { getItem: loadItem, setItem: storeItem } = useAsyncStorage(STORAGE_KEYS.isFlipped);
  const [isLoading, setIsLoading] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  const loadFromStorage = async () => {
    setIsLoading(true);
    const item = await loadItem();
    if (item === FALSE) {
      setIsFlipped(false);
    } else {
      setIsFlipped(true);
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

  return { isFlipped, isLoading, toggleIsFlipped };
};
