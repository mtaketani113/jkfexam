import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import kumite from '../data/kumite.json';
import {useRoute} from '@react-navigation/native';
import Section from '../components/Section';

const Answer = (props: any) => {
  const route: any = useRoute();
  const question = kumite.filter(s => s.id === route.params.id)[0];

  const buttonStyle = {
    marginTop: 8,
    marginLeft: 24,
    width: 100,
  };

  const textStyle = {
    marginTop: 8,
    marginLeft: 24,
  };

  return (
    <>
      <Section
        title={question.answer === route.params.answer ? '正解' : '不正解'}>
        <Text>{question.answer ? '○' : '×'}</Text>
      </Section>
      <Text style={textStyle}>{question.explanation}</Text>
      <View style={buttonStyle}>
        <Button
          title="次へ"
          color="#841584"
          accessibilityLabel="exam"
          onPress={() => props.navigation.navigate('Exam')}
        />
      </View>
      <View style={buttonStyle}>
        <Button
          title="メインへ"
          color="#841584"
          accessibilityLabel="main"
          onPress={() => props.navigation.navigate('Main')}
        />
      </View>
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
