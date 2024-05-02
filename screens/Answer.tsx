import React from 'react';
import {Button, Text} from 'react-native';
import kumite from '../data/kumite.json';

const Answer = (props: any) => {
  /**
   *
   * @param max
   * @returns 0からmaxで指定した値のランダムな整数
   */
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const id: number = getRandomInt(kumite.length - 1);
  console.log(id);
  console.log(kumite);

  const question = kumite.filter(s => s.id === id.toString())[0];
  console.log(question);

  return (
    <>
      <Text>{question.answer}</Text>
      <Text>{question.explanation}</Text>
      <Button
        title="次へ"
        color="#841584"
        accessibilityLabel="exam"
        onPress={() => props.navigation.navigate('Exam')}
      />
      <Button
        title="メインページへ戻る"
        color="#841584"
        accessibilityLabel="main"
        onPress={() => props.navigation.navigate('Main')}
      />
    </>
  );
};

export default Answer;
