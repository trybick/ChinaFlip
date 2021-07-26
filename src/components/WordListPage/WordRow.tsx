import React from 'react';
import { Icon, Text } from 'react-native-elements';
import styled from 'styled-components/native';
import { Word as WordType } from 'data/words';

export default function WordRow({ word: { id, chinese, english } }: { word: WordType }) {
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
        name="checkbox-blank-outline"
        size={20}
        style={{ marginLeft: 8 }}
        type="material-community"
      />
    </Row>
  );
}

const Row = styled.View`
  flex-direction: row;
  margin-bottom: 5%;
`;

const WordsContainer = styled.View`
  flex-direction: row;
  width: 85%;
`;

const Word = styled.View`
  width: 50%;
  flex-direction: row;
`;
