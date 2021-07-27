import React from 'react';
import { Divider, Icon, Text } from 'react-native-elements';
import styled from 'styled-components/native';
import { Word as WordType } from 'data/words';

export default function WordRow({
  getIsCompleted,
  toggleCompletedWord,
  word: { id, chinese, english },
}: {
  getIsCompleted: (id: string) => boolean;
  toggleCompletedWord: (id: string) => Promise<void>;
  word: WordType;
}) {
  return (
    <>
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
          name={getIsCompleted(id) ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
          onPress={() => toggleCompletedWord(id)}
          size={20}
          type="material-community"
        />
      </Row>
      <Divider orientation="horizontal" />
    </>
  );
}

const Row = styled.View`
  flex-direction: row;
  margin-top: 5%;
  margin-bottom: 4%;
`;

const WordsContainer = styled.View`
  flex-direction: row;
`;

const Word = styled.View`
  width: 46%;
  flex-direction: row;
`;
