import React from 'react';
import {Button, Text} from 'react-native';
import kumite from '../data/kumite.json';

const Exam = (props: any) => {
  /**
   *
   * @param max
   * @returns 0からmaxで指定した値のランダムな整数
   */
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const id: number = getRandomInt(kumite.length - 1);

  const question = kumite.filter(s => s.id === id.toString())[0];

  return (
    <>
      <Text>{question.question}</Text>
      <Button
        title="○"
        color="#841584"
        accessibilityLabel="answer"
        onPress={() => props.navigation.navigate('Answer')}
      />
      <Button
        title="×"
        color="#841584"
        accessibilityLabel="answer"
        onPress={() => props.navigation.navigate('Answer')}
      />
      <Button
        title="戻る"
        color="#841584"
        accessibilityLabel="main"
        onPress={() => props.navigation.navigate('Main')}
      />
    </>
  );
};

export default Exam;
