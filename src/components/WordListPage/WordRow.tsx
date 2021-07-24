import React from 'react';
import { Icon, Text } from 'react-native-elements';
import styled from 'styled-components/native';
import { Word as WordType } from 'data/words';

export default function WordRow({ word: { id, chinese, english } }: { word: WordType }) {
  return (
    <Row key={id}>
      <WordsContainer>
        <Word>
          <Text>{chinese}</Text>
        </Word>
        <Word>
          <Text>{english}</Text>
        </Word>
      </WordsContainer>

      <Icon color="grey" name="volume-high" type="ionicon" />
      <Icon color="grey" name="star" style={{ marginLeft: 8 }} type="font-awesome" />
    </Row>
  );
}

const Row = styled.View`
  flex-direction: row;
`;

const WordsContainer = styled.View`
  flex-direction: row;
  width: 85%;
`;

const Word = styled.View`
  width: 50%;
`;
