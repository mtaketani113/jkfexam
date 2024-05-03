import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import kumite from '../data/kumite.json';
import {useRoute} from '@react-navigation/native';

const Answer = (props: any) => {
  const route: any = useRoute();
  const question = kumite.filter(s => s.id === route.params.id)[0];

  return (
    <>
      <Text style={styles.sectionTitle}>
        {question.answer === route.params.answer ? '正解' : '不正解'}
      </Text>
      <Text>{question.answer ? '○' : '×'}</Text>
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

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default Answer;
