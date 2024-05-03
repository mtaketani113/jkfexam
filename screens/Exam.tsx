import React from 'react';
import {Button, Text, View} from 'react-native';
import kumite from '../data/kumite.json';
import Section from '../components/Section';

const Exam = (props: any) => {
  /**
   *
   * @param max
   * @returns 1からmaxで指定した値のランダムな整数
   */
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max) + 1;
  };

  const id: number = getRandomInt(kumite.length);

  const question = kumite.filter(s => s.id === id.toString())[0];

  const buttonStyle = {
    margin: 24,
    width: 100,
  };

  return (
    <>
      <Section title={'問題' + question.id}>
        <Text>{question.question}</Text>
      </Section>
      <Section title="解答">
        <View style={buttonStyle}>
          <Button
            title="○"
            color="#841584"
            accessibilityLabel="answer"
            onPress={() =>
              props.navigation.navigate('Answer', {
                id: question.id,
                answer: true,
              })
            }
          />
        </View>
        <Text> </Text>
        <View style={buttonStyle}>
          <Button
            title="×"
            color="#B8BB59"
            accessibilityLabel="answer"
            onPress={() =>
              props.navigation.navigate('Answer', {
                id: question.id,
                answer: false,
              })
            }
          />
        </View>
      </Section>
      <View style={buttonStyle}>
        <Button
          title="戻る"
          color="#841584"
          accessibilityLabel="main"
          onPress={() => props.navigation.navigate('Main')}
        />
      </View>
    </>
  );
};

export default Exam;
