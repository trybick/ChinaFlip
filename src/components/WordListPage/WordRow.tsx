import React from 'react';
import { Icon, Text } from 'react-native-elements';
import styled from 'styled-components/native';
import { Word as WordType } from 'data/words';

export default function WordRow({
  items,
  setItem,
  word: { id, chinese, english },
}: {
  items: any;
  setItem: any;
  word: WordType;
}) {
  return (
    <Row key={id}>
      <WordsContainer>
        <Word>
          <Text>{english}</Text>
        </Word>
        <Word>
          <Icon
            color="grey"
            name="volume-high"
            size={16}
            style={{ marginRight: 3 }}
            type="ionicon"
          />
          <Text>{chinese}</Text>
        </Word>
      </WordsContainer>
      <Icon
        color="grey"
        name={items && items?.includes(id) ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
        onPress={() => setItem(id, items && items?.includes(id))}
        size={20}
        type="material-community"
      />
    </Row>
  );
}

const Row = styled.View`
  flex-direction: row;
  margin-bottom: 8%;
`;

const WordsContainer = styled.View`
  flex-direction: row;
`;

const Word = styled.View`
  width: 46%;
  flex-direction: row;
`;
