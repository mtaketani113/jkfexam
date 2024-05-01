import React from 'react';
import {Button} from 'react-native';

const Exam = (props: any) => {
  return (
    <Button
      title="戻る"
      color="#841584"
      accessibilityLabel="main"
      onPress={() => props.navigation.navigate('Main')}
    />
  );
};

export default Exam;
