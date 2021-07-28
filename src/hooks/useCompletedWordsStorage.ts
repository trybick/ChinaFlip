import { useEffect, useState } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'COMPLETED_WORDS';

export const useCompletedWordsStorage = () => {
  const { getItem: loadItem, setItem: storeItem } = useAsyncStorage(STORAGE_KEY);
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
