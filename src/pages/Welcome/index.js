import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export function Welcome(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Animatable.Image 
            source={require('../../assets/logo.png')}
            style={{ width: '100%' }}
            resizeMode='contain'
            animation='flipInY'
          />
        </View>
        <Animatable.View 
          style={styles.textContainer}
          animation='fadeInUp'  
          delay={600}
        >
          <Text style={styles.title}>
            Organize your expenses wherever you are.
          </Text>
          <Text style={styles.subtitle}>
            Sign in to start
          </Text>
          <TouchableOpacity 
            activeOpacity={.7}
            style={styles.button}
            onPress={ () => navigation.navigate('SignIn')}
          >
            <Text style={styles.textButton}>
              Access
            </Text>
          </TouchableOpacity>
        </Animatable.View>
    </View>
  );
}