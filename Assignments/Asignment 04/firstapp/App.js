import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function SignupScreen({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    await AsyncStorage.setItem('userData', JSON.stringify({ name, email, password }));

    navigation.navigate('Signin');
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: '50px', fontFamily: 'Cormorant', fontWeight: 'bold', marginBottom: '30px'}}>SignUp Screen</Text>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={text => setName(text)}
      />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={text => setEmail(text)}
      />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={text => setPassword(text)}
      />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
}

function SigninScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async () => {
    const userData = await AsyncStorage.getItem('userData');
    if (userData) {
      const { email: storedEmail, password: storedPassword } = JSON.parse(userData);
      if (email === storedEmail && password === storedPassword) {
        navigation.navigate('Profile');
      } else {
        Alert.alert('Error', 'Incorrect email or password');
      }
    } else {
      Alert.alert('Error', 'No user found');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: '50px', fontFamily: 'Cormorant', fontWeight: 'bold', marginBottom: '30px'}}>SignIn Screen</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={text => setEmail(text)}
      />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={text => setPassword(text)}
      />
      <Button title="Signin" onPress={handleSignin} />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: '50px', fontFamily: 'Cormorant', fontWeight: 'bold'}}>Welcome</Text>
      <Text style={{fontSize: '35px', fontFamily: 'Cormorant', fontWeight: 'bold'}}>Usama Mansoor</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 40,
    borderColor: '#000',
    color: '#fff',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '300px',
    borderRadius: '5px',
    backgroundColor: '#a89bce',
  },
});