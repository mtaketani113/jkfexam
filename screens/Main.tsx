/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Section from '../components/Section';

function Main(props: any): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const mainTitle = {
    fontSize: 30,
    fontWeight: 'bold' as 'bold',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text style={mainTitle}>JKF 審判試験 演習</Text>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="演習について">
            JKFの審判の問題をランダムに出題します。
            <Button
              title="演習開始"
              color="#841584"
              accessibilityLabel="start kumite exam"
              onPress={() => props.navigation.navigate('Exam')}
            />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Main;
