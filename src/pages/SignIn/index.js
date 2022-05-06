import React from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { styles } from './styles';

export function SignIn(){
  return (
    <View style={styles.container}>
        <Animatable.View
          style={styles.headerContainer}
          animation='fadeInLeft'
          delay={500}
        >
          <Text style={styles.headerText}>
            Welcome
          </Text>
        </Animatable.View>
          
        <Animatable.View
          style={styles.textContainer}
          animation='fadeInUp'
        >
          <Text style={styles.title}>
            Email
          </Text>
          <TextInput 
            style={styles.input}
            placeholder='Enter a valid email address'
          />

          <Text style={styles.title}>
            Password
          </Text>
          <TextInput 
            style={styles.input}
            placeholder='Your password'
          />

          <TouchableOpacity
            style={styles.loginButton}
          >
            <Text style={styles.loginText}>
              Access
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerButton}
          >
            <Text style={styles.registerText}>
            Don't have an account? Register here.
            </Text>
          </TouchableOpacity>
        </Animatable.View>
    </View>
  );
}