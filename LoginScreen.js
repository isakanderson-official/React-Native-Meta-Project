import { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Alert } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput
        placeholder='email'
        style={styles.inputBox}
        onChangeText={setEmail}
        value={email}
        keyboardType={'email-address'}
        onFocus={() => {
          Alert.alert('The Email box is in focus');
        }}
        clearButtonMode={'always'}
      />
      <TextInput
        placeholder='password'
        secureTextEntry={true}
        style={styles.inputBox}
        value={password}
        onChangeText={setPassword}
        keyboardType={'default'}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
});
