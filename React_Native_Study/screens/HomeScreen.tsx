import React from 'react';
import { useEffect } from 'react';
import {View, Text, StyleSheet } from 'react-native';

function HomeScreen({navigation}) {

  useEffect(() => {
    navigation.setOptions({title: '홈'});
  }, [navigation])

  return (
       <View style={S.Container}>
          <Text style={S.Content}>
            홈
          </Text>
        </View>
  );
}

const S = StyleSheet.create({
  Container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Content: {
    textAlign: 'center',
    fontSize: 25,
  }
})

export default HomeScreen;