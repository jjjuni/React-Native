import React from 'react';
import { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DetailScreen({navigation}) {

  useEffect(() => {
    navigation.setOptions({title: '정보'});
  }, [navigation])

  return (
     <View style={S.Container}>
        <Text style={S.Content}>
          정보
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

export default DetailScreen;