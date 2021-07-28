import React from 'react';
import { Divider, Icon, Text } from 'react-native-elements';
import styled from 'styled-components/native';
import { Word as WordType } from 'database/helper';

export default function WordRow({
  isCompleted,
  toggleCompletedWord,
  word: { id, chinese, english },
}: {
  isCompleted: boolean;
  toggleCompletedWord: (id: string) => Promise<void>;
  word: WordType;
}) {
  return (
    <>
      <Row key={id} style={{ opacity: isCompleted ? 0.4 : 1 }}>
        <WordsContainer>
          <Word>
            <Text>{english}</Text>
          </Word>
          <Word>
            <Icon
              color="grey"
              name="volume-high"
              size={20}
              style={{ marginRight: 4 }}
              type="ionicon"
            />
            <Text style={{ lineHeight: 20 }}>{chinese}</Text>
          </Word>
        </WordsContainer>
        <Icon
          color="grey"
          name={isCompleted ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
          onPress={() => toggleCompletedWord(id)}
          size={24}
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
