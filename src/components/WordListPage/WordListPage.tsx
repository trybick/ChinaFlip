import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useLocation, useHistory } from 'react-router-native';
import { Card, Header } from 'react-native-elements';
import styled from 'styled-components/native';
import { getTitleFromLevel, Level, Word as WordType } from 'data/words';
import WordRow from './WordRow';

export default function WordListPage() {
  const history = useHistory();
  const {
    state: { words, level },
  } = useLocation<{ words: WordType[]; level: Level }>();
  const [items, setItems] = React.useState<any>();

  const { getItem, setItem } = useAsyncStorage('completedWords');

  const readItemFromStorage = async () => {
    const item = await getItem();
    const parsed = item && JSON.parse(item);
    setItems(parsed);
  };

  const setItemInStorage = async (id: string, wasChecked: boolean) => {
    const merged = items ? items : [];
    if (wasChecked) {
      const filteredStorage = merged.filter((itemId: any) => itemId !== id);
      await setItem(JSON.stringify(filteredStorage));
      const filtered = items.filter((itemId: any) => itemId !== id);
      setItems(filtered);
    } else {
      merged.push(id);
      await setItem(JSON.stringify(merged));
      setItems([...items, id]);
    }
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  return (
    <View>
      <Header
        leftComponent={{
          text: 'Back',
          style: { color: '#fff' },
          onPress: () => history.push('/'),
        }}
        centerComponent={{ text: 'ChinaFlip', style: { color: '#fff' } }}
      />

      <ScrollView>
        <PageContainer>
          <Card containerStyle={{ width: '90%' }}>
            <Card.Title>{getTitleFromLevel(level)}</Card.Title>
            <Card.Divider />
            {words.map(word => (
              <WordRow key={word.id} items={items} setItem={setItemInStorage} word={word} />
            ))}
          </Card>
        </PageContainer>
      </ScrollView>
    </View>
  );
}

const PageContainer = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
  margin-bottom: 30%;
`;
